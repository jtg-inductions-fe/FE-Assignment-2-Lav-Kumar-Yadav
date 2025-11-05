import {
    Table as MuiTable,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Typography,
} from '@mui/material';

import { RenderCell } from './RenderCell.component';
import type { TableProps } from './Table.types';

/**
 * The Component used to show data in the table
 * @Component
 * @param data - The data which will be represented by Table
 * @param tableConfig - configuration for each column used by all cells of particular columns
 * @param props - any other props will be passed to table container
 * @returns - A table with given data and configuration
 * @example
 * <Table data = {data} tableConfig={config}/>
 */
export const Table = <
    RowType extends Record<string, string | boolean | number>,
>({
    data,
    tableConfig,
    ...props
}: TableProps<RowType>) => (
    <TableContainer {...props}>
        <MuiTable>
            <TableHead>
                <TableRow
                    sx={{
                        bgcolor: 'background.default',
                    }}
                >
                    {tableConfig.map((cellConfig) => (
                        <TableCell key={cellConfig.title}>
                            <Typography
                                color="textDisabled"
                                variant="h6"
                                noWrap={true}
                            >
                                {cellConfig.title}
                            </Typography>
                        </TableCell>
                    ))}
                </TableRow>
            </TableHead>
            <TableBody>
                {data.map((rowData, index) => (
                    <TableRow
                        key={index}
                        sx={{
                            '& td, &th': { border: 0 },
                            bgcolor:
                                index % 2 == 1
                                    ? 'background.default'
                                    : 'inherit',
                        }}
                    >
                        {tableConfig.map((cellConfig, idx) => (
                            <TableCell key={idx}>
                                <RenderCell
                                    cellConfig={cellConfig}
                                    rowData={rowData}
                                />
                            </TableCell>
                        ))}
                    </TableRow>
                ))}
            </TableBody>
        </MuiTable>
    </TableContainer>
);
