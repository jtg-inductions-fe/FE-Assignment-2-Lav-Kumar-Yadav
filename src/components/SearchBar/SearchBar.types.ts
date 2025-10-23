import type {
    AutocompleteChangeDetails,
    AutocompleteChangeReason,
} from '@mui/material';

export type SearchBarProps<T> = {
    options: T[];
    getOptionLabel?: (option: T) => string;
    value?: T;
    onChange?:
        | ((
              event: React.SyntheticEvent,
              value: T | null,
              reason: AutocompleteChangeReason,
              details?: AutocompleteChangeDetails<T>,
          ) => void)
        | undefined;
};
