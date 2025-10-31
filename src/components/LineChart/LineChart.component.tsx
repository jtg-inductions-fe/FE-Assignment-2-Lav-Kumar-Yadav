import { useState } from 'react';

import {
    CartesianGrid,
    Line,
    LineChart as RechartsLineChart,
    Tooltip,
    XAxis,
    YAxis,
} from 'recharts';

import { InfoOutlined } from '@mui/icons-material';
import {
    IconButton,
    Paper,
    Popover,
    Stack,
    Typography,
    useTheme,
} from '@mui/material';

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
    chartInfo,
    xKey,
    yKey,
    xTickFormatter,
    yTickFormatter,
    toolTipLabelFormatter,
    toolTipValueFormatter,
}: LineChartProps<Value>) => {
    const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);

    const handlePopoverOpen = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const theme = useTheme();

    const handlePopoverClose = () => {
        setAnchorEl(null);
    };

    const isPopOverOPen = !!anchorEl;

    return (
        <Paper
            elevation={2}
            aria-label={`${heading} chart showing ${yKey as string} over ${xKey as string}`}
            sx={{
                padding: theme.spacing(8),
                borderRadius: 4,
            }}
        >
            <Stack
                direction="row"
                alignItems="center"
                gap={theme.spacing(1)}
                marginBottom={theme.spacing(7.5)}
            >
                <Typography variant="h2">{heading}</Typography>
                <IconButton
                    aria-label="Show chart information"
                    onMouseEnter={handlePopoverOpen}
                    onMouseLeave={handlePopoverClose}
                >
                    <InfoOutlined />
                </IconButton>
                <Popover
                    sx={{ pointerEvents: 'none', maxWidth: 600 }}
                    open={isPopOverOPen}
                    anchorEl={anchorEl}
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'left',
                    }}
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'left',
                    }}
                    onClose={handlePopoverClose}
                    disableRestoreFocus
                    aria-live="polite"
                    role="tooltip"
                >
                    <Typography sx={{ p: 4 }}>{chartInfo}</Typography>
                </Popover>
            </Stack>
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
        </Paper>
    );
};
