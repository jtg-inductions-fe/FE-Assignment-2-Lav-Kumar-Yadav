import { Skeleton, Stack } from '@mui/material';

/**
 * @component
 * @returns Skeleton for StatListItem
 */
export const StatListItemSkeleton = () => (
    <Stack direction="row" gap={4} height={60} width="100%">
        <Skeleton variant="circular" width={40} height={40} />
        <Skeleton variant="rounded" width="70%" height={40} />
        <Skeleton variant="text" width="20%" height={40} />
    </Stack>
);
