import { List, ListItem, ListItemButton, Typography } from '@mui/material';

import { Link } from '@components';

import { socialMediaConfig } from './footer.config';
import { StyledPaper } from './Footer.style';

/**
 * Footer container to display at the bottom of the dashboard
 *
 * @returns  The rendered footer component with description text and social link icons.
 */
export const Footer = () => (
    <StyledPaper elevation={1} component="footer">
        <Typography color="textDisabled">
            © 2021 Themesberg, LLC. All rights reserved.
        </Typography>
        <nav aria-label="Social Media Links">
            <List
                sx={{
                    display: 'flex',
                }}
                disablePadding
                dense
            >
                {socialMediaConfig.map(({ Icon, label, url }) => (
                    <ListItem key={label}>
                        <ListItemButton
                            disableGutters
                            LinkComponent={Link}
                            href={url}
                            target="_blank"
                            rel="noopener noreferrer"
                            sx={{
                                color: 'inherit',
                            }}
                            aria-label={label}
                        >
                            <Icon />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </nav>
    </StyledPaper>
);
