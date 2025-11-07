import {
    Skeleton,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableRow,
} from '@mui/material';

import type { TableCellConfig } from './Table.types';

/**
 * Skeleton for table
 * @param noOfRows - no of rows to show in tableSkeleton
 * @param tableConfig - tableCOnfiguration for fixed layout of skeleton
 * @returns A skeleton which can shown in the loading state of table
 */
export const TableSkeleton = <
    RowType extends Record<string, string | boolean | number>,
>({
    noOfRows,
    tableConfig,
}: {
    noOfRows: number;
    tableConfig: TableCellConfig<RowType>[];
}) => (
    <TableContainer
        sx={{
            borderRadius: 3,
        }}
    >
        <Table>
            <TableBody>
                {Array.from({ length: noOfRows }).map((_, index) => (
                    <TableRow key={index}>
                        {tableConfig.map((cellConfig) => (
                            <TableCell key={cellConfig.key}>
                                <Skeleton height={30} width="100%" />
                            </TableCell>
                        ))}
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    </TableContainer>
);
