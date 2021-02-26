import React from 'react'

import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';

import { TextField, Button } from '@material-ui/core'
import { DataGrid, ColDef } from '@material-ui/data-grid';
import { ArgumentAxis, ValueAxis, Chart, LineSeries, } from '@devexpress/dx-react-chart-material-ui';


import PageTitle from '../../components/pagetitle/PageTitle'

import "./Weight.css"

const Weight = () => {

    const columns: ColDef[] = [
        { field: 'date', headerName: 'Date', width: 150 },
        { field: 'weight', headerName: 'Weight (kg)', width: 150 },
    ]

    const rows = [
        { id: 1, date: 1, weight: 'Snow' },
        { id: 2, date: 2, weight: 'Lannister' },
        { id: 3, date: 3, weight: 'Lannister' },
        { id: 4, date: 4, weight: 'Stark' },
    ];

    const data = [
        { argument: 1, value: 10 },
        { argument: 2, value: 20 },
        { argument: 3, value: 30 },
    ];

    return (
        <>
            <PageTitle title={'Weight'} />
            <div className="weight">
                <form className="weight__form">
                    <Box mt={-4}>
                        <TextField
                            id="standard-basic"
                            type="number"
                            label="Weight (kg)"
                        />
                    </Box>
                    <Box mt={5}>
                        <TextField
                            id="date"
                            label="Date"
                            type="date"
                            defaultValue="2021-02-26"
                            InputLabelProps={{
                                shrink: true,
                            }} />
                    </Box>
                    <Box mt={5}>
                        <Button variant="contained" color="primary">
                            Add
                        </Button>
                    </Box>
                </form>
                <div className="weight__table">
                    <DataGrid rows={rows} columns={columns} pageSize={5} checkboxSelection />
                    <Box mt={3}>
                        <Button variant="contained" color="secondary">
                            Delete
                        </Button>
                    </Box>
                </div>
                <div className="weight__graph">
                    <Paper>
                        <Chart
                            data={data}
                        >
                            <ArgumentAxis />
                            <ValueAxis />

                            <LineSeries valueField="value" argumentField="argument" />
                        </Chart>
                    </Paper>
                </div>
            </div>
        </>
    )
}

export default Weight
