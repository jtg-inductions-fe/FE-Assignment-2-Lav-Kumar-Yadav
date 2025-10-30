import type { ImageListProps } from '@mui/material';

export type HeroConfigType = {
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
}[];

export type HeroProps = {
    /**
     * config to render images grid
     */
    config: HeroConfigType;
} & Omit<ImageListProps, 'children'>;
