import {
    ImageList,
    ImageListItem,
    useMediaQuery,
    useTheme,
} from '@mui/material';

import type { HeroProps } from './Hero.types';

/**
 * Component for render image List
 * @param config - config for image gallery
 * @returns A Image Grid Gallery react component
 * @example
 * <Hero config={config} />
 */
export const Hero = ({ config, ...props }: HeroProps) => {
    const theme = useTheme();
    const isMdUp = useMediaQuery(theme.breakpoints.up('md'));

    return (
        <ImageList
            variant="quilted"
            cols={isMdUp ? 3 : 1}
            rowHeight={240}
            gap={11}
            {...props}
        >
            {(isMdUp ? config : config.slice(0, 3)).map((item) => (
                <ImageListItem
                    key={item.src}
                    cols={isMdUp ? item.cols : 1}
                    rows={item.rows}
                    aria-label={item.label}
                >
                    <img src={item.src} alt={item.label ?? 'hero image'} />
                </ImageListItem>
            ))}
        </ImageList>
    );
};
