import {Table, TableBody, TableCell, TableHead, TableRow} from "@mui/material";
import * as React from "react";

type DataTableProps = {
    data: Array<{ [key: string]: string }>
}

export const DataTable = (props: DataTableProps) => {

    if (!props.data || !props.data.length) {
        return (
            <div>No data</div>
        )
    }

    const columns = Object.keys(props.data[0]).map((col) => col.toUpperCase())

    return (
        <Table>
            <TableHead>
                <TableRow>
                    {columns.map((col) => <TableCell key={col}>{col}</TableCell>)}
                </TableRow>
            </TableHead>
            <TableBody>
                {props.data.map((row, index) => {
                    return (
                        <TableRow key={`row-${index}`}>
                            {Object.values(row).map((value, index) => <TableCell key={`cell-${index}`}>{value}</TableCell>)}
                        </TableRow>
                    )
                })}
            </TableBody>
        </Table>
    )
}
