import { Avatar, ListItem, ListItemAvatar, ListItemText } from '@mui/material';

import type { StatListItemProps } from './StatListItem.types';

/**
 * This component is to show a listItem and should be wrapper by MUI List
 * @param label - used to show main heading of list item
 * @param subLabel - used to show some short description about list item heading
 * @param imageSrc - used to show the avatar in list item
 * @param rightContent- used to show the content on the right of the list item
 * @returns
 */
export const StatListItem = ({
    label,
    subLabel,
    imageSrc,
    rightContent,
    ...props
}: StatListItemProps) => (
    <ListItem {...props}>
        {imageSrc && (
            <ListItemAvatar sx={{ minWidth: 40 }}>
                <Avatar src={imageSrc} alt={label} />
            </ListItemAvatar>
        )}
        <ListItemText
            primary={label}
            secondary={subLabel}
            sx={{
                marginX: 2,
            }}
            slotProps={{
                primary: {
                    variant: 'h3',
                    noWrap: true,
                    component: 'p',
                },
                secondary: {
                    noWrap: true,
                    variant: 'subtitle2',
                    color: 'textDisabled',
                    component: 'p',
                },
            }}
        />
        {rightContent}
    </ListItem>
);
