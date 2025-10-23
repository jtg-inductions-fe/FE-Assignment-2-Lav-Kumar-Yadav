import type { User } from 'hooks/useUser';

export type UserProfileProps = {
    user: User | undefined;
    menus: {
        icon: React.ReactNode;
        option: string;
    }[];
};
