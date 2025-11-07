import type { User } from './user.type';

export type Customer = {
    /** Sale amount */
    sale: number;
} & User;
