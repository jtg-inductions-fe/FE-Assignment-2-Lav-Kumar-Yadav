import { Link as ReactRouterLink } from 'react-router';

import { Link as MuiLink } from '@mui/material';

import type { LinkProps } from './Link.types';
/**
 *
 * @param to - the path for internal routing
 * @param href - the path for external routing
 * @param children - react component on which link should be applied
 * @returns A component which will wrap to any component for external or internal link
 */
export const Link = ({ to, href, children }: LinkProps) => (
    <MuiLink
        {...(href && {
            href,
            target: '_blank',
        })}
        {...(to && {
            to,
            component: ReactRouterLink,
        })}
    >
        {children}
    </MuiLink>
);
