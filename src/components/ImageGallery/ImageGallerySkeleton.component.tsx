import {
    ImageList,
    ImageListItem,
    Skeleton,
    useMediaQuery,
} from '@mui/material';

import type { ImageGallerySkeletonProps } from './ImageGallery.types';

/**
 * A skeleton component for hero gallery image
 * @param imageGalleryLayout - Layout on which skeleton should be display
 * @param noOfCols - no of columns to show skeletons
 * @returns Skeleton for hero Image gallery
 */
export const ImageGallerySkeleton = ({
    imageGalleryLayout,
    noOfCols,
}: ImageGallerySkeletonProps) => {
    const isDesktop = useMediaQuery((theme) => theme.breakpoints.up('md'));
    const LAYOUT_CONFIG = imageGalleryLayout[isDesktop ? 'md' : 'xs'];

    const placeholderCount = LAYOUT_CONFIG?.length ?? 0;

    return (
        <ImageList variant="quilted" cols={noOfCols} rowHeight={240} gap={11}>
            {Array.from({ length: placeholderCount }).map((_, index) => (
                <ImageListItem
                    key={index}
                    cols={LAYOUT_CONFIG?.[index]?.cols || 1}
                    rows={LAYOUT_CONFIG?.[index]?.rows || 1}
                >
                    <Skeleton
                        variant="rectangular"
                        width="100%"
                        height="100%"
                        animation="wave"
                        sx={{ borderRadius: 1 }}
                    />
                </ImageListItem>
            ))}
        </ImageList>
    );
};
