import type { ReactNode } from 'react';

type BaseProps = {
    children: ReactNode;
};

type InternalLinkProps = {
    to: string;
    href?: never;
} & BaseProps;

type ExternalLinkProps = {
    href: string;
    to?: never;
} & BaseProps;

export type LinkProps = InternalLinkProps | ExternalLinkProps;
