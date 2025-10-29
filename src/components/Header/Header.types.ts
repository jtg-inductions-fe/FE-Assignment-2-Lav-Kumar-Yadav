import type { Product, User } from '@types';

export type HeaderProps = {
    user: User | undefined;
    products: Product[];
};
