import type { ImageGallerySkeletonProps } from 'components/ImageGallery/ImageGallery.types';

export const heroLayoutConfig: ImageGallerySkeletonProps['imageGalleryLayout'] =
    {
        xs: [
            {
                rows: 2,
                cols: 1,
            },
            {
                rows: 1,
                cols: 1,
            },
            {
                rows: 1,
                cols: 1,
            },
        ],
        md: [
            {
                rows: 1,
                cols: 1,
            },
            {
                rows: 1,
                cols: 1,
            },
            {
                rows: 2,
                cols: 1,
            },
            {
                rows: 1,
                cols: 2,
            },
        ],
    };
