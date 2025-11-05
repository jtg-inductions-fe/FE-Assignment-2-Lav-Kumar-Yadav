/**
 * Represents a single product entry with associated sales and framework information.
 */
export type Product = {
    /**
     * A unique identifier for the product.
     */
    id: string;
    /**
     * The name of the product.
     */
    name: string;
    /**
     * The total sales value or quantity for the product.
     */
    sales: number;
    /**
     * The framework or technology associated with the product (e.g., "React", "Vue", "Angular").
     */
    framework: string;
};
