import { Box, Typography, useMediaQuery } from '@mui/material';

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
        throw new Error(error);
    }

    return (
        <section aria-labelledby="hero-image-gallery">
            {isLoading ? (
                <Box aria-live="polite" aria-busy="true">
                    <ImageGallerySkeleton
                        imageGalleryLayout={heroLayoutConfig}
                        noOfCols={isDesktop ? 3 : 1}
                    />
                </Box>
            ) : !!gallery?.length ? (
                <ImageGallery
                    data={gallery}
                    imageGalleryLayout={heroLayoutConfig}
                    noOfCols={isDesktop ? 3 : 1}
                    id="hero-image-gallery"
                    aria-label="Hero Image Gallery"
                />
            ) : (
                <Typography variant="body2" textAlign="center" padding={4}>
                    No Gallery available
                </Typography>
            )}
        </section>
    );
};
