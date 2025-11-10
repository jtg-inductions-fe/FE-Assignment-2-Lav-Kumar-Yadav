import { useMatches } from 'react-router';

import { IconButton, List, ListItem, Typography } from '@mui/material';

import { Link } from '@components';
import { useError } from '@contexts';

import { socialMediaConfig } from './footer.config';
import { StyledPaper } from './Footer.style';

/**
 * Footer container to display at the bottom of the dashboard
 *
 * @returns  The rendered footer component with description text and social link icons.
 */
export const Footer = () => {
    const { isError } = useError();
    const matches = useMatches();

    const isNotFound = matches.some((match) =>
        match.id.startsWith('not-found'),
    );

    if (isNotFound || isError) {
        return null;
    }

    return (
        <StyledPaper elevation={1} component="footer">
            <Typography color="textDisabled">
                © 2021 Themesberg, LLC. All rights reserved.
            </Typography>
            <List
                sx={{
                    display: 'flex',
                    gap: 2,
                    flexWrap: 'wrap',
                }}
                aria-label="Social Media Links"
                disablePadding
                dense
            >
                {socialMediaConfig.map(({ Icon, label, url }) => (
                    <ListItem
                        key={label}
                        sx={{
                            width: 50,
                        }}
                        disableGutters
                        disablePadding
                    >
                        <IconButton
                            LinkComponent={Link}
                            href={url}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={label}
                            sx={{
                                color: 'text.primary',
                            }}
                        >
                            <Icon />
                        </IconButton>
                    </ListItem>
                ))}
            </List>
        </StyledPaper>
    );
};
