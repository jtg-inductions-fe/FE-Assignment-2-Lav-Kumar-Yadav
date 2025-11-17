import type { ImageListProps } from '@mui/material';

export type ImageGalleryDataItem = {
    /**
     * for uniquely identify the object
     */
    id: string;
    /**
     * image path or link
     */
    src: string;

    /**
     * label for image (used as alt text for accessibility and displayed as caption)
     */
    label: string;

    /** Now of rows taken by image */
    rows: number;

    /** Now of cols taken by image */
    cols: number;
};

type GridSize = {
    /**
     *  no of rows it takes in grid (positive integer)
     */
    rows: number;

    /**
     * no of cols it takes in grid (positive integer)
     */
    cols: number;
};
type ImageGallerySkeletonLayout = Record<'xs' | 'md', GridSize[]>;

export type ImageGalleryProps = {
    /**
     * data to be shown in the gallery
     */
    data: ImageGalleryDataItem[];

    /**
     * no of Cols shown in the image gallery
     */
    noOfCols: number;
} & Omit<ImageListProps, 'children'>;

export type ImageGallerySkeletonProps = {
    /**
     * Layout on which skeleton should be display
     */
    imageGalleryLayout: ImageGallerySkeletonLayout;

    /**
     * no of columns to show skeletons
     */
    noOfCols: number;
};
