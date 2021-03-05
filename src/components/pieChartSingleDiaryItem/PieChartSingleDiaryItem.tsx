import React, { FC, useState, useEffect } from 'react'

import { PieChart, Pie, Cell } from "recharts";

import { Meal } from '../../redux/actions/dietDiaryActionTypes'

type PieChartSingleDiaryItemProps = {
    mealsData: Meal[]
}

const PieChartSingleDiaryItem: FC<PieChartSingleDiaryItemProps> = ({ mealsData }) => {

    const [data, setData] = useState([
        { name: "protein", value: 400 },
        { name: "carbs", value: 300 },
        { name: "fat", value: 300 },
    ])

    useEffect(() => {

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
        index,
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
            <PieChart width={400} height={400}>
                <Pie
                    data={data}
                    cx={200}
                    cy={200}
                    labelLine={false}
                    label={renderCustomizedLabel}
                    outerRadius={160}
                    fill="#8884d8"
                    dataKey="value"
                >
                    {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                </Pie>
            </PieChart>
        </div>
    )
}

export default PieChartSingleDiaryItem
