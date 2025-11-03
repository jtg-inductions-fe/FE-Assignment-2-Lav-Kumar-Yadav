import type { ImageListProps } from '@mui/material';

export type ImageGalleryItem = {
    /**
     * for uniquely identify the object
     */
    id: string;
    /**
     * image path or link
     */
    src: string;

    /**
     * label for image (used as alt text for accessibility)
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
     * shows if the image is visible in mobile (defaults to true if not specified)
     */
    isVisibleInMobile?: boolean;
};

export type ImageGalleryConfigType = ImageGalleryItem[];

export type ImageGalleryProps = {
    /**
     * config to render images grid
     */
    config: ImageGalleryConfigType;
} & Omit<ImageListProps, 'children'>;
