import type { ImageListProps } from '@mui/material';

export type ImageGalleryConfigType = {
    /**
     * image path or link
     */
    src: string;

    /**
     * label for image
     */
    label: string;

    /**
     * no of rows it takes in grid
     */
    rows: number;

    /**
     * no of cols it takes in grid
     */
    cols: number;
    /**
     * shows if the image is visible in mobile
     */
    isVisibleInMobile?: boolean;
}[];

export type ImageGalleryProps = {
    /**
     * config to render images grid
     */
    config: ImageGalleryConfigType;
} & Omit<ImageListProps, 'children'>;
