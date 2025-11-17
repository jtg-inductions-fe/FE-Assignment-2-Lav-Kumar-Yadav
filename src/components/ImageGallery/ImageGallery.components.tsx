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
 *   noOfCols={4}
 * />
 * ```
 */
export const ImageGallery = ({
    data,
    noOfCols,
    ...props
}: ImageGalleryProps) => {
    const isDesktop = useMediaQuery((theme) => theme.breakpoints.up('md'));

    const transformedData = isDesktop ? data : data.slice(0, 3).reverse();

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
                    cols={isDesktop ? item.cols : 1}
                    rows={item.rows || 1}
                >
                    <img
                        src={item.src}
                        alt={item.label}
                        loading={
                            (index === 0 || index == 1) && !isDesktop
                                ? 'eager'
                                : 'lazy'
                        }
                    />
                </ImageListItem>
            ))}
        </ImageList>
    );
};
