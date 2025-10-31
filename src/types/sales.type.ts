/**
 * Represents a single sales data point used in the Sales chart.
 */
export type Sales = {
    /**
     * The ISO 8601 formatted date string (e.g., "2025-11-03").
     */
    date: string;
    /**
     *  The total sales amount for that date.
     */
    sales: number;
};
