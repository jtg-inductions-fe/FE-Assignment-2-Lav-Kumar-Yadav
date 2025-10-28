import type { AutocompleteProps } from '@mui/material';

export type SearchBarProps<T> = Pick<
    AutocompleteProps<T, false, false, false>,
    'options' | 'getOptionLabel' | 'onChange' | 'value'
>;
