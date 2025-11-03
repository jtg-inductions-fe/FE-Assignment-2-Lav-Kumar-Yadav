import { Link as ReactRouterLink } from 'react-router';

import { Link as MuiLink } from '@mui/material';

import type { LinkProps } from './Link.types';

/**
 * Link Component
 * Used to create Route link or anchor links with href
 * @Component
 * @param to - the path for internal routing
 * @param href - the path for external routing
 * @param children - react component on which link should be applied
 * @returns Link component with clickable items
 *  * @example usage
 * ```tsx
 * <Link to='/'>
 *  Click here
 * </Link>
 * ```
 */
export const Link = ({ to, children, ...props }: LinkProps) => (
    <MuiLink {...(to && { component: ReactRouterLink, to })} {...props}>
        {children}
    </MuiLink>
);
