import SearchSharpIcon from '@mui/icons-material/SearchSharp';
import { InputAdornment, TextField, Typography, useTheme } from '@mui/material';

import { StyledAutoComplete } from './Searchbar.style';
import type { SearchBarProps } from './SearchBar.types';
/***
 * A generic, reusable search bar component built using MUI's Autocomplete
 * @template T - the type of the options in the autocomplete (e.g. string, object, etc.)
 * @param {T[]} options - the array of selectable options
 * @param {(option: T) => string} getOptionLabel - A function to extract a display label from each option
 * @param {(event: React.SyntheticEvent, value: T | null) => void} onChange - Callback fired when the value change
 * @param { T | undefined } value - The current selected value when nothing is selected pass `undefined`
 *
 * @returns {JSX.Element} the rendered searchbar component
 */
export const SearchBar = <T,>({
    options,
    getOptionLabel,
    onChange,
    value,
}: SearchBarProps<T>) => {
    const theme = useTheme();

    return (
        <StyledAutoComplete
            value={value ? value : null}
            aria-label="searchbar"
            role="searchbox"
            popupIcon={null}
            disablePortal
            options={options}
            getOptionLabel={getOptionLabel}
            renderInput={(params) => (
                <Typography variant="body1" component="div">
                    <TextField
                        {...params}
                        placeholder="Search"
                        color="secondary"
                        slotProps={{
                            input: {
                                ...params.InputProps,
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <SearchSharpIcon
                                            sx={{
                                                fontSize: theme.spacing(5),
                                                marginLeft: theme.spacing(2),
                                            }}
                                        />
                                    </InputAdornment>
                                ),
                            },
                        }}
                    />
                </Typography>
            )}
            onChange={onChange}
        />
    );
};
