import * as React from "react";
import {Box, Paper} from "@mui/material";
import {DataTable} from "./DataTable";

const loadData = () => (
    new Promise((resolve) => {
        setTimeout(() => {
            resolve([
                {id: '1', name: 'John'},
                {id: '2', name: 'Paul'}
            ])
        }, 1000)
    })
)

export const Application = () => {

    const [data, setData] = React.useState()

    React.useEffect(() => {
        loadData().then(setData)
    })

    return (
        <Paper elevation={6}>
            <Box p={1}>
                <h1>Typescript &amp; React</h1>

                <DataTable data={data} />
            </Box>
        </Paper>
    );
}
