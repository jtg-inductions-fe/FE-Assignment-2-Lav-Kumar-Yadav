import { ImageList, ImageListItem, useMediaQuery } from '@mui/material';

import type { ImageGalleryProps } from './ImageGallery.types';

/**
 * Component for render image List
 * @param config - config for image gallery
 * @returns A Image Grid Gallery react component
 * @example
 * <ImageGallery config={config} />
 */
export const ImageGallery = ({ cols, config, ...props }: ImageGalleryProps) => {
    const isDesktop = useMediaQuery((theme) => theme.breakpoints.up('md'));

    return (
        <ImageList
            variant="quilted"
            cols={cols ?? (isDesktop ? 3 : 1)}
            rowHeight={240}
            gap={11}
            {...props}
        >
            {config.map((item) => (
                <ImageListItem
                    key={item.id}
                    cols={isDesktop ? item.cols : 1}
                    rows={item.rows}
                    aria-label={item.label}
                    sx={{
                        ...(!item.isVisibleInMobile &&
                            !isDesktop && { display: 'none' }),
                    }}
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
