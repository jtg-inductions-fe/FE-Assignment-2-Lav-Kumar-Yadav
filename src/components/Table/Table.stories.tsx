import type { ChipProps } from '@mui/material';
import { CssBaseline, Typography } from '@mui/material';

import { ThemeProvider } from '@emotion/react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { theme } from '@theme';

import { Table } from './Table.component';

const meta = {
    title: 'Table',
    component: Table<{
        user: string;
        date: string;
        amount: number;
        status: 'cancelled' | 'completed' | 'in progress';
        paymentType: 'paid' | 'refund';
    }>,
} satisfies Meta<
    typeof Table<{
        user: string;
        date: string;
        amount: number;
        status: 'cancelled' | 'completed' | 'in progress';
        paymentType: 'paid' | 'refund';
    }>
>;

export default meta;

type Story = StoryObj<typeof meta>;

export const TableStory: Story = {
    args: {
        data: [
            {
                user: 'Bonnie Green',
                date: '2025-08-23',
                amount: 2300,
                status: 'completed',
                paymentType: 'paid',
            },
            {
                user: 'Bonnie Green',
                date: '2025-08-23',
                amount: 670,
                status: 'cancelled',
                paymentType: 'refund',
            },
            {
                user: 'Jese Leos',
                date: '2025-08-15',
                amount: 2300,
                status: 'in progress',
                paymentType: 'paid',
            },
            {
                user: 'Bonnie Green',
                date: '2025-08-15',
                amount: 5000,
                status: 'completed',
                paymentType: 'refund',
            },
            {
                user: 'Jese Leos',
                date: '2025-08-18',
                amount: 234,
                status: 'cancelled',
                paymentType: 'paid',
            },

            {
                user: 'THEMESBERG LLC',
                date: '2025-08-11',
                amount: 280,
                status: 'in progress',
                paymentType: 'refund',
            },
        ],
        tableConfig: [
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
                renderConfig: (rowData) => ({
                    children: `${rowData.paymentType === 'refund' ? '-' : ''}$${rowData.amount}`,
                }),
            },
            {
                type: 'chip',
                key: 'status',
                title: 'STATUS',
                renderConfig: (rowData) => {
                    const colorMap: Record<
                        'cancelled' | 'completed' | 'in progress',
                        ChipProps['color']
                    > = {
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
        ],
    },
    render: (args) => (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Table {...args} />
        </ThemeProvider>
    ),
};
