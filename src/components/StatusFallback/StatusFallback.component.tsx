import { Box, Button, Stack, Typography } from '@mui/material';

import type { StatusFallbackProps } from './StatusFallback.types';

/**
 *
 * @param image - the fallback image
 * @param title - the fallback title
 * @param body - the fallback body text
 * @param buttons - the array of props for multiple buttons
 * @returns The fallback ui for the above information
 */
export const StatusFallback = ({
    title,
    illustration,
    actionButtons,
    content,
}: StatusFallbackProps) => (
    <Stack component="section" alignItems="center" gap={5}>
        {illustration && (
            <Box
                width={{
                    sm: 300,
                    md: 400,
                    lg: 500,
                }}
                height={{
                    sm: 252,
                    md: 336,
                    lg: 420,
                }}
            >
                <img
                    src={illustration}
                    alt={title}
                    width="100%"
                    onError={(e) => {
                        e.currentTarget.style.display = 'none';
                    }}
                />
            </Box>
        )}
        <Typography variant="h1" textAlign="center">
            {title}
        </Typography>

        <Typography variant="body1" color="textSecondary" textAlign="center">
            {content}
        </Typography>

        <Stack
            direction="row"
            gap={4}
            flexWrap="wrap"
            justifyContent="center"
            alignItems="center"
        >
            {actionButtons.map((btnProps, index) => (
                <Button
                    key={index}
                    sx={{
                        paddingX: 5,
                        paddingY: 3,
                        borderRadius: 3,
                        minWidth: 150,
                    }}
                    {...btnProps}
                />
            ))}
        </Stack>
    </Stack>
);
