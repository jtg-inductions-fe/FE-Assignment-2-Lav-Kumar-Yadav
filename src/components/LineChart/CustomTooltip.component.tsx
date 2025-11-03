import { Box, Paper, Typography, useTheme } from '@mui/material';

import type { CustomToolTipProps } from './LineChart.types';

/**
 *
 * A reusable tooltip component designed for Recharts line charts.
 * It displays formatted label and value information inside a styled Material UI Paper card.
 *
 * @param active - Whether the tooltip is currently active (hovered).
 * @param payload - Array of data points associated with the hovered chart element.
 * @param label - The x-axis value associated with the hovered data point.
 * @param valueFormatter - Optional formatter function for tooltip values.
 * @param customLabelFormatter - Optional formatter function for tooltip labels.
 * @param heading - The label displayed before the formatted value (e.g., “Sales:”).
 *
 * @returns  A styled tooltip displaying formatted chart data, or `null` if inactive.
 */
export const CustomTooltip = <T extends object>({
    active,
    payload,
    label,
    customLabelFormatter,
    valueFormatter,
    heading,
}: CustomToolTipProps<T>) => {
    const isVisible = active && payload && payload.length;
    const theme = useTheme();
    const formattedLabel = (
        customLabelFormatter && label
            ? customLabelFormatter(label as T[keyof T])
            : label
    ) as string;

    const firstPayload = payload?.[0] as { value?: unknown } | undefined;

    const rawValue = firstPayload?.value as T[keyof T] | undefined;

    const formattedValue =
        rawValue !== undefined
            ? valueFormatter
                ? valueFormatter(rawValue)
                : String(rawValue)
            : '';

    if (!isVisible) return null;

    return (
        <Paper
            elevation={2}
            sx={{
                padding: theme.spacing(4),
                borderRadius: 4,
            }}
        >
            <Typography
                variant="overline"
                component="p"
                color={theme.palette.secondary.main}
            >
                {formattedLabel}
            </Typography>

            <Box display="flex" alignItems="center" gap={1} marginTop={2}>
                <Box
                    sx={{
                        width: 8,
                        height: 8,
                        borderRadius: '50%',
                        backgroundColor: theme.palette.primary.main,
                    }}
                />
                <Typography
                    variant="body1"
                    color={theme.palette.text.secondary}
                >
                    {heading}:
                    <Typography
                        component="span"
                        variant="h4"
                        color={theme.palette.text.primary}
                    >
                        {formattedValue}
                    </Typography>
                </Typography>
            </Box>
        </Paper>
    );
};
