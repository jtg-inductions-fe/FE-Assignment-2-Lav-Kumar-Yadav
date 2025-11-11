import type { ReactNode } from 'react';

import type {
    ChipProps,
    TableContainerProps,
    TypographyProps,
} from '@mui/material';

type BaseConfig<RowType extends Record<string, string | boolean | number>> = {
    /**
     * title of column used to as column header
     */
    title: string;

    /**
     * key name in data item used to access value
     */
    key: keyof RowType;
};

type ChipCellConfig<RowType extends Record<string, string | boolean | number>> =
    {
        /**
         * chip type to render mui chip
         */
        type: 'chip';

        /**
         * used to receive Props for Mui Chip component
         */
        renderConfig: ((rowData: RowType) => ChipProps) | ChipProps;
    } & BaseConfig<RowType>;

type DateCellConfig<RowType extends Record<string, string | boolean | number>> =
    {
        /**
         * to represent date in the cell
         */
        type: 'date';

        /**
         * used to receive Props for Mui Typography component
         */
        renderConfig?:
            | ((rowData: RowType) => TypographyProps)
            | TypographyProps;
    } & BaseConfig<RowType>;

type TypographyCellConfig<
    RowType extends Record<string, string | boolean | number>,
> = {
    /**
     * to render MUI Typography component
     */
    type: 'text';

    /**
     * used to receive Props for Mui Typography component
     */
    renderConfig?: ((rowData: RowType) => TypographyProps) | TypographyProps;
} & BaseConfig<RowType>;

type CustomCellConfig<
    RowType extends Record<string, string | boolean | number>,
> = {
    /**
     * to render a ReactNode with custom design
     */
    type: 'custom';

    /**
     * Represent a ReactNode which will be render in table cell
     */
    renderConfig: (rowData: RowType) => ReactNode;
} & BaseConfig<RowType>;

/**
 * configuration type for table cells
 */
export type TableCellConfig<
    RowType extends Record<string, string | boolean | number>,
> =
    | ChipCellConfig<RowType>
    | DateCellConfig<RowType>
    | TypographyCellConfig<RowType>
    | CustomCellConfig<RowType>;

export type TableProps<
    RowType extends Record<string, string | boolean | number>,
> = {
    /**
     * data which will be represent in Table
     */
    data: RowType[];

    /**
     * configuration for each column
     */
    tableConfig: TableCellConfig<RowType>[];
} & TableContainerProps;
