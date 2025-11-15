import { format, parseISO } from 'date-fns';

import { CssBaseline, ThemeProvider } from '@mui/material';

import type { Meta, StoryObj } from '@storybook/react-vite';
import { theme } from '@theme';

import { LineChart } from './LineChart.component';

const meta = {
    title: 'LineChart',
    component: LineChart<'date', 'sales'>,
} satisfies Meta<typeof LineChart<'date', 'sales'>>;

export default meta;

type Story = StoryObj<typeof meta>;

export const LineChartStory: Story = {
    args: {
        data: [
            {
                date: '2025-04-01',
                sales: 80000,
            },
            {
                date: '2025-04-02',
                sales: 120000,
            },
            {
                date: '2025-04-03',
                sales: 110000,
            },
            {
                date: '2025-04-04',
                sales: 240000,
            },
            {
                date: '2025-04-05',
                sales: 130000,
            },
            {
                date: '2025-04-06',
                sales: 140000,
            },
            {
                date: '2025-04-07',
                sales: 80000,
            },
        ],
        heading: 'Sales',
        xKey: 'date',
        yKey: 'sales',
        xTickFormatter: (val) => {
            try {
                return format(parseISO(String(val)), 'dd MMM');
            } catch {
                return String(val);
            }
        },
        yTickFormatter: (value) => {
            const num = Number(value);

            return !isNaN(num) ? `$${num / 1000}k` : '$0k';
        },
        toolTipLabelFormatter: (val) => {
            try {
                return format(parseISO(String(val)), 'd MMM, yyyy');
            } catch {
                return String(val);
            }
        },
        toolTipValueFormatter: (value) => {
            const num = Number(value);

            return !isNaN(num) ? `$${num / 1000}k` : '$0k';
        },
    },

    render: (args) => (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <LineChart {...args} />
        </ThemeProvider>
    ),
};
