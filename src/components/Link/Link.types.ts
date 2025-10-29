import type { LinkOwnProps } from '@mui/material';

export type LinkProps = (
    | {
          /**
           * The URL to link to for external navigation.
           */
          href: string;

          /**
           * No route for navigation when href is defined
           */
          to?: never;
      }
    | {
          /**
           * The route to navigate using react-router
           */
          to: string;

          /**
           * No external URL for navigation when to is defined
           */
          href?: never;
      }
) &
    LinkOwnProps;
