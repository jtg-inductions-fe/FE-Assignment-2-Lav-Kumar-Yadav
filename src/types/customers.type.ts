import type { User } from './user.type';

export type Customer = {
    sale: number;
} & User;
