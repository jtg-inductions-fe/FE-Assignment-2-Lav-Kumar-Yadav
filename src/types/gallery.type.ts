export type Gallery = {
    /**
     *  A unique identifier for the image (used for keys or references).
     */
    id: string;
    /**
     * The image source URL or file path.
     */
    src: string;
    /**
     * A short descriptive text or caption for the image.
     */
    label: string;

    /**Used to show no of rows to keep in grid */
    rows: number;

    /** Used to  show no cols in grid*/
    cols: number;
};
