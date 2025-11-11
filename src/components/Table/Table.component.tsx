import {
    Table as MuiTable,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Typography,
} from '@mui/material';

import { Cell } from './Cell.component';
import { StyledTableRow } from './Table.styles';
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
    <TableContainer
        {...props}
        sx={{
            borderRadius: 3,
            '&::-webkit-scrollbar': {
                height: '0.2em',
            },
            '&::-webkit-scrollbar-thumb': {
                backgroundColor: 'success.contrastText',
                borderRadius: 4,
                cursor: 'pointer',
            },
        }}
    >
        <MuiTable>
            <TableHead>
                <TableRow
                    sx={{
                        bgcolor: 'background.default',
                    }}
                >
                    {tableConfig.map((cellConfig) => (
                        <TableCell key={cellConfig.key.toString()}>
                            <Typography
                                color="textDisabled"
                                variant="h6"
                                noWrap
                            >
                                {cellConfig.title}
                            </Typography>
                        </TableCell>
                    ))}
                </TableRow>
            </TableHead>
            <TableBody>
                {data.map((rowData, index) => (
                    <StyledTableRow key={index}>
                        {tableConfig.map((cellConfig) => (
                            <TableCell
                                key={cellConfig.key.toString()}
                                sx={{
                                    maxWidth: index === 0 ? 300 : 'auto',
                                }}
                            >
                                <Cell
                                    cellConfig={cellConfig}
                                    rowData={rowData}
                                />
                            </TableCell>
                        ))}
                    </StyledTableRow>
                ))}
            </TableBody>
        </MuiTable>
    </TableContainer>
);
