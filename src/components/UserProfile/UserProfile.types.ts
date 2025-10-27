import type { User } from '@types';

export type UserProfileProps = {
    user: User | undefined;
    menus: {
        icon: React.ReactNode;
        option: string;
    }[];
};
