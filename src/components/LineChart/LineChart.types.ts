/**
 * Defines the props for the reusable `LineChart` component.
 *
 * @template T - The type of data objects provided to the chart.
 * @template XKey - The key in `T` representing x-axis values.
 * @template YKey - The key in `T` representing y-axis values.
 */
export type LineChartProps<
    T extends object,
    XKey extends keyof T = keyof T,
    YKey extends keyof T = keyof T,
> = {
    /** The dataset to be visualized in the line chart. */
    data: T[];

    /** The chart title displayed above the visualization. */
    heading: string;

    /** A short description or explanation of the chart. */
    chartInfo: string;

    /** The key from each data object to use for x-axis values. */
    xKey: XKey;

    /** The key from each data object to use for y-axis values. */
    yKey: YKey;

    /** Optional formatter for customizing x-axis tick labels. */
    xTickFormatter?: (value: T[XKey], index: number) => string;

    /** Optional formatter for customizing y-axis tick labels. */
    yTickFormatter?: (value: T[YKey], index: number) => string;

    /** Optional formatter for customizing tooltip labels (usually the x-axis value). */
    toolTipLabelFormatter?: (value: T[XKey]) => string;

    /** Optional formatter for customizing tooltip values (usually the y-axis value). */
    toolTipValueFormatter?: (value: T[YKey]) => string;
};
