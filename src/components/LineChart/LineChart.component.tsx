import { CartesianGrid, Line, Tooltip, XAxis, YAxis } from 'recharts';

import { useMediaQuery, useTheme } from '@mui/material';

import { CustomTooltip } from './CustomTooltip.component';
import { StyledLineChart } from './LineChart.styles';
import type { LineChartProps } from './LineChart.types';

/**
 * LineChart Component
 *
 * A reusable and customizable line chart component built using Recharts and Material UI.
 *
 * @param data - Array of data points to be visualized in the line chart.
 * @param heading - Title displayed above the chart.
 * @param xKey - Key in `data` representing the x-axis values.
 * @param yKey - Key in `data` representing the y-axis values.
 * @param xTickFormatter - Custom formatter for x-axis tick labels.
 * @param props.yTickFormatter - Custom formatter for y-axis tick labels.
 * @param toolTipLabelFormatter - Custom formatter for tooltip labels.
 * @param toolTipValueFormatter - Custom formatter for tooltip values.
 *
 * @returns A styled Material UI Paper element containing a responsive Recharts line chart with optional info popover and custom tooltip.
 */

export const LineChart = <Xkey extends string, Ykey extends string>({
    data,
    heading,
    xKey,
    yKey,
    xTickFormatter,
    yTickFormatter,
    toolTipLabelFormatter,
    toolTipValueFormatter,
}: LineChartProps<Xkey, Ykey>) => {
    const theme = useTheme();
    const isMobile = useMediaQuery(({ breakpoints }) => breakpoints.down('md'));

    return (
        <StyledLineChart
            responsive
            data={data}
            margin={{
                bottom: 40,
                top: 10,
            }}
        >
            <CartesianGrid
                stroke={theme.palette.action.selected}
                fillOpacity={0.5}
                vertical={false}
            />
            <XAxis
                dataKey={xKey}
                tickLine={false}
                axisLine={false}
                padding={{ left: 40, right: 20 }}
                tickFormatter={xTickFormatter}
                angle={isMobile ? -45 : 0}
                color={theme.palette.text.disabled}
                dy={40}
            />
            {!isMobile && (
                <YAxis
                    dataKey={yKey}
                    tickLine={false}
                    axisLine={false}
                    tickFormatter={yTickFormatter}
                />
            )}
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
                dataKey={yKey}
                stroke={theme.palette.primary.main}
                strokeWidth={2}
                dot={false}
            />
        </StyledLineChart>
    );
};
