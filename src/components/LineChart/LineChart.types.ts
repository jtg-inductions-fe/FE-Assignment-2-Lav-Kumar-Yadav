import type { TooltipContentProps } from 'recharts';

/**
 * Defines the props for the reusable `LineChart` component.
 *
 * @template XKey - The key in data representing x-axis values.
 * @template YKey - The key in data representing y-axis values.
 */
export type LineChartProps<
    XKey extends string = string,
    YKey extends string = string,
> = {
    /** The dataset to be visualized in the line chart. */
    data: (Record<XKey, string> & Record<YKey, number>)[];

    /** The chart title displayed above the visualization. */
    heading: string;

    /** The key from each data object to use for x-axis values. */
    xKey: XKey;

    /** The key from each data object to use for y-axis values. */
    yKey: YKey;

    /** Optional formatter for customizing x-axis tick labels. */
    xTickFormatter?: (value: string) => string;

    /** Optional formatter for customizing y-axis tick labels. */
    yTickFormatter?: (value: number) => string;

    /** Optional formatter for customizing tooltip labels (usually the x-axis value). */
    toolTipLabelFormatter?: (value: string | undefined) => string;

    /** Optional formatter for customizing tooltip values (usually the y-axis value). */
    toolTipValueFormatter?: (value: number) => string;
};

export type CustomToolTipProps = {
    /**
     * Optional function to format the value displayed in the tooltip.
     */
    valueFormatter?: LineChartProps['toolTipValueFormatter'];
    /**
     * Optional function to format the label displayed in the tooltip.
     */
    customLabelFormatter?: LineChartProps['toolTipLabelFormatter'];

    /**
     * The heading text used to describe the value displayed in the tooltip.
     */
    heading: string;
} & TooltipContentProps<number | string, string>;
