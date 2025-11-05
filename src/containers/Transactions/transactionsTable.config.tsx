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
            const action =
                rowData.paymentType === 'paid'
                    ? 'payment from '
                    : 'payment refund to ';
            const str =
                rowData.status === 'cancelled'
                    ? action.replace('payment', 'payment failed')
                    : action;

            return (
                <Typography noWrap={true} variant="caption" component="p">
                    {str}
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
            const color =
                rowData.status === 'completed'
                    ? 'success'
                    : rowData.status === 'cancelled'
                      ? 'error'
                      : 'info';

            return {
                color,
                label: rowData.status,
            };
        },
    },
];
