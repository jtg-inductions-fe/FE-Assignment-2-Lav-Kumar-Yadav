import { useMediaQuery } from '@mui/material';

import { ImageGallery } from '@components';
import { useGallery } from '@hooks';

import { heroLayoutConfig } from './heroLayout.config';
/**
 * This Container is used to represent Hero Section with image Gallery
 * @returns - Image Gallery
 */
export const Hero = () => {
    const { data: gallery } = useGallery();
    const isDesktop = useMediaQuery(({ breakpoints }) => breakpoints.up('md'));

    return (
        <section aria-labelledby="hero-image-gallery">
            <ImageGallery
                data={gallery}
                imageGalleryLayout={heroLayoutConfig}
                noOfCols={isDesktop ? 3 : 1}
                id="hero-image-gallery"
                aria-label="Hero Image Gallery"
            />
        </section>
    );
};
