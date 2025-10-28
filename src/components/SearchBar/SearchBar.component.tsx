import SearchSharpIcon from '@mui/icons-material/SearchSharp';
import { InputAdornment, TextField } from '@mui/material';

import { StyledAutoComplete } from './Searchbar.style';
import type { SearchBarProps } from './SearchBar.types';
/***
 * A generic, reusable search bar component built using MUI's Autocomplete
 * @param  options - the array of selectable options
 * @param  getOptionLabel - A function to extract a display label from each option
 * @param  onChange - Callback fired when the value change
 * @param  value - The current selected value when nothing is selected pass `undefined`
 *
 * @returns  the rendered searchbar component
 */
export const SearchBar = <T,>({
    options,
    getOptionLabel,
    onChange,
    value,
}: SearchBarProps<T>) => (
    <StyledAutoComplete
        value={value ?? null}
        aria-label="searchbar"
        popupIcon={null}
        disablePortal
        options={options}
        getOptionLabel={getOptionLabel}
        renderInput={(params) => (
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
                                    fontSize="small"
                                    sx={{
                                        marginLeft: 2,
                                    }}
                                />
                            </InputAdornment>
                        ),
                    },
                }}
            />
        )}
        onChange={onChange}
    />
);
