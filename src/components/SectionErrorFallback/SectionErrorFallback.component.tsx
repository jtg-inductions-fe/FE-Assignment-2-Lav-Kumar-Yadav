import type { PaperProps } from '@mui/material';
import { Paper } from '@mui/material';

import { StatusFallback } from '@components';
import { useErrorBoundaryContext } from '@contexts';

type SectionErrorFallbackProp = {
    height?: number;
} & PaperProps;

/**
 * Fallback component for Section When an Error happens
 * @param handleRerender - callback will be call when Retry button will be clicked
 * @returns The Fallback when an Error happens in section
 */
export const SectionErrorFallback = ({ height }: SectionErrorFallbackProp) => {
    const { resetErrorBoundary } = useErrorBoundaryContext();

    return (
        <Paper
            elevation={2}
            sx={{
                height: height || 400,
                borderRadius: 4,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
            <StatusFallback
                content="Please Retry to load this section"
                subTitle="Something has gone  wrong"
                actionButtons={[
                    {
                        children: 'Retry',
                        variant: 'contained',
                        onClick: () => resetErrorBoundary(),
                    },
                ]}
            />
        </Paper>
    );
};
