import { format } from 'date-fns';

import { Chip, Typography } from '@mui/material';

import type { TableCellConfig, TableProps } from './Table.types';

/**
 * This Component render each cell by their cell type
 * @component
 * @param cellConfig -  configuration for the particular cell
 * @param rowData - data for the particular row
 * @returns A table cell to use in the table
 */
export const Cell = <
    RowType extends Record<string, string | boolean | number>,
>({
    cellConfig,
    rowData,
}: {
    cellConfig: TableCellConfig<RowType>;
    rowData: TableProps<RowType>['data'][number];
}) => {
    switch (cellConfig.type) {
        case 'chip': {
            const renderConfig = cellConfig.renderConfig;
            const chipProps =
                typeof renderConfig === 'function'
                    ? renderConfig(rowData)
                    : renderConfig;

            return <Chip {...chipProps} />;
        }

        case 'date': {
            const value = rowData[cellConfig.key];
            const renderConfig = cellConfig.renderConfig;

            const typographyConfig =
                typeof renderConfig === 'function'
                    ? renderConfig(rowData)
                    : renderConfig;

            const formattedDate =
                typeof value === 'string'
                    ? format(value, 'MMM dd, yyyy')
                    : value;

            return (
                <Typography
                    variant="caption"
                    color="textDisabled"
                    component="p"
                    noWrap
                    {...typographyConfig}
                >
                    {typographyConfig?.children || formattedDate}
                </Typography>
            );
        }

        case 'text': {
            const value = rowData[cellConfig.key];
            const renderConfig = cellConfig.renderConfig;
            const typographyConfig =
                typeof renderConfig === 'function'
                    ? renderConfig(rowData)
                    : renderConfig;

            return (
                <Typography
                    variant="h4"
                    component="p"
                    noWrap
                    {...typographyConfig}
                >
                    {typographyConfig?.children || value}
                </Typography>
            );
        }

        case 'custom': {
            const children = cellConfig.renderConfig(rowData);

            return children;
        }
        default: {
            return null;
        }
    }
};
