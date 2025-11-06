import { Box, IconButton, Typography } from '@mui/material';

import { Link } from '@components';

import { footerConfig } from './footer.config';
import { StyledPaper } from './Footer.style';

/**
 * Footer container to display at the bottom of the dashboard
 *
 * @returns  The rendered footer component with description text and social link icons.
 */
export const Footer = () => (
    <StyledPaper elevation={1} component="footer">
        <Typography color="textDisabled" aria-label="Description of Footer">
            {footerConfig.description}
        </Typography>
        <Box aria-label="Social Media">
            {footerConfig.socialMedia.map(({ Icon, label, url }, index) => (
                <IconButton
                    key={index}
                    LinkComponent={Link}
                    href={url}
                    target="_blank"
                    sx={{
                        marginX: 3,
                        color: 'inherit',
                    }}
                    aria-label={label}
                >
                    <Icon />
                </IconButton>
            ))}
        </Box>
    </StyledPaper>
);
