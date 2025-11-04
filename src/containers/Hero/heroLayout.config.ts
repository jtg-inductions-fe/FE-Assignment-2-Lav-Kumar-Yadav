import type { ImageGalleryProps } from '@components';

export const heroLayoutConfig: ImageGalleryProps['imageGalleryLayout'] = {
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
