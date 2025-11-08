import { StatusFallback } from '@components';

type SectionErrorProps = {
    handleRerender?: () => void;
};

/**
 * Fallback component for Section When an Error happens
 * @param handleRerender - callback will be call when Retry button will be clicked
 * @returns The Fallback when an Error happens in section
 */
export const SectionErrorFallback = ({ handleRerender }: SectionErrorProps) => (
    <StatusFallback
        body="It’s always time for a coffee break We should be back by the time you finish your coffee."
        title="Something has gone seriously wrong"
        buttons={[
            {
                children: 'Retry',
                variant: 'contained',
                onClick: () => handleRerender?.(),
            },
        ]}
    />
);
