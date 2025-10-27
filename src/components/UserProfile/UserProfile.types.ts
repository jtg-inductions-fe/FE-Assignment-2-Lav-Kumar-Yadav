import type { ProfileMenu, User } from '@types';

export type UserProfileProps = {
    user: User | undefined;
    menus: ProfileMenu;
};
