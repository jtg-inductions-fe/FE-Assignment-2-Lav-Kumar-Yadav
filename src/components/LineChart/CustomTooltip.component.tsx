import { Box, Paper, Typography } from '@mui/material';

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
export const CustomTooltip = ({
    active,
    payload,
    label,
    customLabelFormatter,
    valueFormatter,
    heading,
}: CustomToolTipProps) => {
    const isVisible = active && payload?.length;
    if (!isVisible) return null;

    const entity = payload[0] as { value: number; name: string };

    const formattedLabel = customLabelFormatter?.(String(label)) || label;
    const formattedValue = valueFormatter?.(entity.value) || entity.value;

    return (
        <Paper
            elevation={2}
            sx={({ spacing }) => ({
                padding: spacing(4),
                borderRadius: 4,
            })}
        >
            <Typography
                variant="overline"
                component="p"
                sx={{
                    color: 'secondary.main',
                }}
            >
                {formattedLabel}
            </Typography>

            <Box display="flex" alignItems="center" gap={1} marginTop={2}>
                <Box
                    sx={{
                        width: 8,
                        height: 8,
                        borderRadius: '50%',
                        backgroundColor: 'primary.main',
                    }}
                />
                <Typography
                    variant="body1"
                    sx={{
                        color: 'text.secondary',
                    }}
                >
                    {heading}:
                    <Typography
                        component="span"
                        variant="h4"
                        sx={{
                            color: 'text.primary',
                        }}
                    >
                        {formattedValue}
                    </Typography>
                </Typography>
            </Box>
        </Paper>
    );
};
