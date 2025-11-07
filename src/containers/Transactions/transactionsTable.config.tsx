import type { ChipProps } from '@mui/material';
import { Typography } from '@mui/material';

import type { TableProps } from '@components';
import type { Transaction } from '@types';

/**
 * column Configuration for Transactions table which will be used by Table component to render the table for transaction
 */
export const transactionsTableConfig: TableProps<Transaction>['tableConfig'] = [
    {
        type: 'custom',
        key: 'user',
        title: 'TRANSACTIONS',
        renderConfig: (rowData) => {
            const { paymentType, status } = rowData;

            let action;
            if (status === 'cancelled') {
                action =
                    paymentType === 'paid'
                        ? 'payment failed from '
                        : 'payment refund failed to ';
            } else {
                action =
                    paymentType === 'paid'
                        ? 'payment from '
                        : 'payment refund to ';
            }

            return (
                <Typography noWrap variant="caption" component="p">
                    {action}
                    <Typography variant="h5" component="span">
                        {rowData.user}
                    </Typography>
                </Typography>
            );
        },
    },
    {
        type: 'date',
        key: 'date',
        title: 'DATE & TIME',
    },
    {
        type: 'text',
        key: 'amount',
        title: 'AMOUNT',
        renderConfig: (rowData) => ({ children: `$${rowData.amount}` }),
    },
    {
        type: 'chip',
        key: 'status',
        title: 'STATUS',
        renderConfig: (rowData) => {
            const colorMap: Record<Transaction['status'], ChipProps['color']> =
                {
                    completed: 'success',
                    cancelled: 'error',
                    'in progress': 'info',
                };
            const color = colorMap[rowData.status];

            return {
                color,
                label: rowData.status,
            };
        },
    },
];
