import {
    CartesianGrid,
    Line,
    LineChart as RechartsLineChart,
    Tooltip,
    XAxis,
    YAxis,
} from 'recharts';

import { useMediaQuery, useTheme } from '@mui/material';

import { CustomTooltip } from './CustomTooltip.component';
import type { LineChartProps } from './LineChart.types';

/**
 * LineChart Component
 *
 * A reusable and customizable line chart component built using Recharts and Material UI.
 *
 * @param data - Array of data points to be visualized in the line chart.
 * @param heading - Title displayed above the chart.
 * @param chartInfo - Optional text displayed in a popover when hovering over the info icon.
 * @param xKey - Key in `data` representing the x-axis values.
 * @param Key - Key in `data` representing the y-axis values.
 * @param xTickFormatter - Custom formatter for x-axis tick labels.
 * @param props.yTickFormatter - Custom formatter for y-axis tick labels.
 * @param toolTipLabelFormatter - Custom formatter for tooltip labels.
 * @param toolTipValueFormatter - Custom formatter for tooltip values.
 *
 * @returns A styled Material UI Paper element containing a responsive Recharts line chart with optional info popover and custom tooltip.
 */

export const LineChart = <Value extends object>({
    data,
    heading,
    xKey,
    yKey,
    xTickFormatter,
    yTickFormatter,
    toolTipLabelFormatter,
    toolTipValueFormatter,
}: LineChartProps<Value>) => {
    const theme = useTheme();
    const isMobile = useMediaQuery(({ breakpoints }) => breakpoints.down('md'));

    return (
        <RechartsLineChart
            style={{
                width: '100%',
                margin: 'auto',
                cursor: 'pointer',
                height: 420,
                color: theme.palette.text.disabled,
                fontSize: theme.typography.pxToRem(14),
            }}
            responsive
            data={data}
        >
            <CartesianGrid
                stroke={theme.palette.action.selected}
                fillOpacity={0.5}
                vertical={false}
            />
            <XAxis
                dataKey={xKey as string}
                tickLine={false}
                axisLine={false}
                padding={{ left: 40 }}
                tickFormatter={xTickFormatter}
                angle={isMobile ? -45 : 0}
            />
            <YAxis
                dataKey={yKey as string}
                width="auto"
                max={24}
                tickLine={false}
                axisLine={false}
                tickFormatter={yTickFormatter}
            />
            <Tooltip<string | number, string>
                cursor={{
                    stroke: theme.palette.secondary.contrastText,
                    strokeWidth: 2,
                    strokeDasharray: '5 5',
                }}
                aria-label="status"
                aria-live="polite"
                content={(props) => (
                    <CustomTooltip
                        valueFormatter={toolTipValueFormatter}
                        customLabelFormatter={toolTipLabelFormatter}
                        heading={heading}
                        {...props}
                    />
                )}
            />
            <Line
                type="bump"
                dataKey="sales"
                stroke={theme.palette.success.main}
                strokeWidth={2}
                dot={false}
            />
        </RechartsLineChart>
    );
};
