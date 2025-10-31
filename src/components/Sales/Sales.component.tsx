import {
    CartesianGrid,
    Line,
    LineChart,
    Tooltip,
    XAxis,
    YAxis,
} from 'recharts';

import { Paper, Typography } from '@mui/material';

import type { SalesProps } from './Sales.types';
export const Sales = ({ config }: SalesProps) => {
    config = config.map((item) => ({
        ...item,
        sales: item.sales / 1000,
    }));

    return (
        <Paper
            elevation={2}
            sx={{
                padding: 4,
                borderRadius: 4,
            }}
        >
            <Typography variant="h5">Sales</Typography>
            <LineChart
                style={{
                    width: '100%',
                    aspectRatio: 1.618,
                    margin: 'auto',
                    cursor: 'pointer',
                    height: 470,
                }}
                responsive
                data={config}
            >
                <CartesianGrid
                    stroke="#f3f4f6"
                    fillOpacity={0.5}
                    vertical={false}
                />
                <XAxis
                    dataKey="date"
                    tickLine={false}
                    axisLine={false}
                    padding={{ left: 20 }}
                />
                <YAxis
                    width="auto"
                    unit="k"
                    max={24}
                    tickLine={false}
                    axisLine={false}
                    padding={{
                        bottom: 20,
                    }}
                />
                <Tooltip
                    cursor={{
                        stroke: '#e5e7eb',
                        strokeWidth: 2,
                        strokeDasharray: '5 5',
                    }}
                    // content={({x}) =>}
                />
                <Line
                    type="bump"
                    dataKey="sales"
                    stroke="#0e9f6e"
                    strokeWidth={2}
                    dot={false}
                />
            </LineChart>
        </Paper>
    );
};
