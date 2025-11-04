import { useMediaQuery } from '@mui/material';

import { ImageGallery, Section } from '@components';
import { useGallery } from '@hooks';

import { heroLayoutConfig } from './heroLayout.config';

export const Hero = () => {
    const { data: gallery } = useGallery();
    const isDesktop = useMediaQuery(({ breakpoints }) => breakpoints.up('md'));

    return (
        <Section>
            <ImageGallery
                data={gallery}
                imageGalleryLayout={heroLayoutConfig}
                noOfCols={isDesktop ? 3 : 1}
                aria-label="Hero Image Gallery"
            />
        </Section>
    );
};
