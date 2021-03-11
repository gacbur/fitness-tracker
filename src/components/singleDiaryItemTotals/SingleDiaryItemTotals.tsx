import React, { FC, useState, useEffect } from 'react'

import { withStyles, createStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import { PieChart, Pie, Cell } from "recharts";

import { Meal } from '../../redux/actions/dietDiaryActionTypes'

type SingleDiaryItemTotalsProps = {
    mealsData: Meal[]
}

const SingleDiaryItemTotals: FC<SingleDiaryItemTotalsProps> = ({ mealsData }) => {

    type NutritionTotalType = {
        kcal: number,
        protein: number,
        carbs: number,
        fat: number
    }

    const [nutritionTotals, setNutritionTotals] = useState({
        kcalTotal: 0,
        proteinTotal: 0,
        carbsTotal: 0,
        fatTotal: 0
    })

    const [data, setData] = useState([
        { name: "protein", value: 0 },
        { name: "carbs", value: 0 },
        { name: "fat", value: 0 },
    ])

    useEffect(() => {
        setData([
            { name: "protein", value: nutritionTotals.proteinTotal },
            { name: "carbs", value: nutritionTotals.carbsTotal },
            { name: "fat", value: nutritionTotals.fatTotal },
        ])
    }, [nutritionTotals])


    const StyledTableCell = withStyles(() =>
        createStyles({
            head: {
                backgroundColor: '#1890ff',
                color: 'white',
            },
            body: {
                fontSize: 14,
            },
        }),
    )(TableCell);

    const StyledTableRow = withStyles(() =>
        createStyles({
            root: {
                '&:nth-of-type(odd)': {
                    backgroundColor: 'white',
                    border: '1px solid lightgray',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
                },
            },
        }),
    )(TableRow);

    const useStyles = makeStyles({
        table: {
            minWidth: 700,
        },
    });

    const classes = useStyles();


    const handleGetNutritionTotals = () => {
        const { kcal, protein, carbs, fat } = mealsData.reduce((nutritionTotal: NutritionTotalType, Item: Meal) => {
            const { kcal, protein, carbs, fat } = Item;

            nutritionTotal.kcal += Number(kcal);
            nutritionTotal.protein += Number(protein);
            nutritionTotal.carbs += Number(carbs);
            nutritionTotal.fat += Number(fat);

            return nutritionTotal
        },
            {
                kcal: 0,
                protein: 0,
                carbs: 0,
                fat: 0,
            }
        )

        setNutritionTotals({
            kcalTotal: kcal,
            proteinTotal: protein,
            carbsTotal: carbs,
            fatTotal: fat,
        })
    }

    useEffect(() => {
        handleGetNutritionTotals()
    }, [])

    useEffect(() => {
        handleGetNutritionTotals()
    }, [mealsData])

    const COLORS = ["#0088FE", "#00C49F", "#FFBB28"];

    const RADIAN = Math.PI / 180;
    const renderCustomizedLabel = ({
        cx,
        cy,
        midAngle,
        innerRadius,
        outerRadius,
        percent,
        name
    }: any) => {
        const radius = innerRadius + (outerRadius - innerRadius) * 0.4;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);

        return (
            <text
                x={x}
                y={y}
                fill="white"
                textAnchor={x > cx ? "start" : "end"}
                dominantBaseline="central"
            >
                {`${name} ${(percent * 100).toFixed(0)}%`}
            </text>
        );
    };


    return (
        <div>
            <div className="pie-chart__totals">
                <p>Nutrition total:</p>
                <Table className={classes.table} aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell align="center">Calories</StyledTableCell>
                            <StyledTableCell align="center">Fat&nbsp;(g)</StyledTableCell>
                            <StyledTableCell align="center">Carbs&nbsp;(g)</StyledTableCell>
                            <StyledTableCell align="center">Protein&nbsp;(g)</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <StyledTableRow>
                            <StyledTableCell align="center">{nutritionTotals.kcalTotal}</StyledTableCell>
                            <StyledTableCell align="center">{nutritionTotals.proteinTotal}</StyledTableCell>
                            <StyledTableCell align="center">{nutritionTotals.carbsTotal}</StyledTableCell>
                            <StyledTableCell align="center">{nutritionTotals.fatTotal}</StyledTableCell>
                        </StyledTableRow>
                    </TableBody>
                </Table>
            </div>
            <div className="pie-chart">
                <PieChart width={400} height={400}>
                    <Pie
                        data={data}
                        cx={200}
                        cy={200}
                        labelLine={false}
                        label={renderCustomizedLabel}
                        outerRadius={160}
                        isAnimationActive={false}
                        fill="#8884d8"
                        dataKey="value"
                    >
                        {data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                    </Pie>
                </PieChart>
            </div>
        </div>
    )
}

export default SingleDiaryItemTotals
