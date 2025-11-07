import type { ReactNode } from 'react';

import type {
    ChipProps,
    TableContainerProps,
    TypographyProps,
} from '@mui/material';

type BaseConfig = {
    /**
     * title of column used to as column header
     */
    title: string;

    /**
     * key name in data item used to access value
     */
    key: string;
};

type ChipCellConfig<RowType> = {
    /**
     * chip type to render mui chip
     */
    type: 'chip';

    /**
     * used to receive Props for Mui Chip component
     */
    renderConfig: ((rowData: RowType) => ChipProps) | ChipProps;
} & BaseConfig;

type DateCellConfig<RowType> = {
    /**
     * to represent date in the cell
     */
    type: 'date';

    /**
     * used to receive Props for Mui Typography component
     */
    renderConfig?: ((rowData: RowType) => TypographyProps) | TypographyProps;
} & BaseConfig;

type TypographyCellConfig<RowType> = {
    /**
     * to render MUI Typography component
     */
    type: 'text';

    /**
     * used to receive Props for Mui Typography component
     */
    renderConfig?: ((rowData: RowType) => TypographyProps) | TypographyProps;
} & BaseConfig;

type CustomCellConfig<RowType> = {
    /**
     * to render a ReactNode with custom design
     */
    type: 'custom';

    /**
     * Represent a ReactNode which will be render in table cell
     */
    renderConfig: (rowData: RowType) => ReactNode;
} & BaseConfig;

/**
 * configuration type for table cells
 */
export type TableCellConfig<RowType> =
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
