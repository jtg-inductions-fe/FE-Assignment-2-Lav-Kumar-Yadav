import { useMediaQuery } from '@mui/material';

import { ImageGallery, ImageGallerySkeleton } from '@components';
import { useGallery } from '@hooks';

import { heroLayoutConfig } from './heroLayout.config';
/**
 * This Container is used to represent Hero Section with image Gallery
 * @returns - Image Gallery
 */
export const Hero = () => {
    const { data: gallery, isLoading, error } = useGallery();
    const isDesktop = useMediaQuery(({ breakpoints }) => breakpoints.up('md'));

    if (error) {
        if (error) {
            throw new Error(error);
        }
    }

    return (
        <section aria-labelledby="hero-image-gallery">
            {isLoading && (
                <ImageGallerySkeleton
                    imageGalleryLayout={heroLayoutConfig}
                    noOfCols={isDesktop ? 3 : 1}
                />
            )}
            {!isLoading && (
                <ImageGallery
                    data={gallery}
                    imageGalleryLayout={heroLayoutConfig}
                    noOfCols={isDesktop ? 3 : 1}
                    id="hero-image-gallery"
                    aria-label="Hero Image Gallery"
                />
            )}
        </section>
    );
};
