import type { AutocompleteProps } from '@mui/material';

export type SearchBarProps<T> = Omit<
    AutocompleteProps<T, false, false, false>,
    'renderInput'
>;
