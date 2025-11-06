import { Skeleton, Stack } from '@mui/material';

export const StatListItemSkeleton = () => (
    <Stack direction="row" gap={4} height={72} width="100%">
        <Skeleton variant="circular" width={40} height={40} />
        <Skeleton variant="rounded" width="70%" height={40} />
        <Skeleton variant="text" width="20%" height={40} />
    </Stack>
);
