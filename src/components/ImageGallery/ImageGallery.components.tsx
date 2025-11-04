import { ImageList, ImageListItem, useMediaQuery } from '@mui/material';

import type { ImageGalleryProps } from './ImageGallery.types';

/**
 * ImageGallery component displays a responsive, quilted image grid layout using Material UI's `ImageList` component.
 * @component
 * @param  props - Additional Props will be passed to Image List.
 * @param data - The array of image objects to display. Each item should include a unique `id`,
 * @param imageGalleryLayout - The layout configuration for each image, defining how many rows and columns
 * @param noOfCols Total number of columns for the image grid.
 * @param props Additional props to be passed to the underlying Material UI `ImageList`.
 * @returns  The rendered responsive image gallery component.
 * @example
 * ```tsx
 * <ImageGallery
 *   data={[
 *     { id: 1, src: '/images/photo1.jpg', label: 'Photo 1' },
 *     { id: 2, src: '/images/photo2.jpg', label: 'Photo 2' },
 *   ]}
 *   imageGalleryLayout={{
 *      xs: [{rows: 1,cols: 1}]
 *      md: [{rows: 1, cols: 2 }]
 *   }}
 *   noOfCols={4}
 * />
 * ```
 */
export const ImageGallery = ({
    data,
    imageGalleryLayout,
    noOfCols,
    ...props
}: ImageGalleryProps) => {
    const isDesktop = useMediaQuery((theme) => theme.breakpoints.up('md'));

    const LAYOUT_CONFIG = imageGalleryLayout[isDesktop ? 'md' : 'xs'];

    const trimmedData = data.slice(0, LAYOUT_CONFIG.length);
    const transformedData = isDesktop ? trimmedData : trimmedData.reverse();

    return (
        <ImageList
            variant="quilted"
            cols={noOfCols}
            rowHeight={240}
            gap={11}
            {...props}
        >
            {transformedData.map((item, index) => (
                <ImageListItem
                    key={item.id}
                    cols={LAYOUT_CONFIG[index].cols || 1}
                    rows={LAYOUT_CONFIG[index].rows || 1}
                >
                    <img
                        src={item.src}
                        alt={item.label ?? 'hero image'}
                        loading="lazy"
                    />
                </ImageListItem>
            ))}
        </ImageList>
    );
};
