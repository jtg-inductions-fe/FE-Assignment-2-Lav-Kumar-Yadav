/**
 * A generic API client function for fetching JSON data from a given URL.
 * @template T - the expected shape of the response data
 * @param {string} url - the endpoint url to fetch data from
 * @returns {Promise<T>} - A promise that resolves to the parsed JSON response of type `T`
 * @throws {Error} - throws an error if the network request fails or the response is not ok
 */
export const apiClient = async <T>(url: string): Promise<T> => {
    try {
        const response = await fetch(url, {
            signal: AbortSignal.timeout(10000),
        });
        if (!response.ok) {
            throw new Error(
                `Failed to fetch ${url}: ${response.status} ${response.statusText}`,
            );
        }
        const contentType = response.headers.get('content-type');
        if (!contentType || !contentType.includes('application/json')) {
            throw new Error(
                `Expected JSON response from ${url}, got ${contentType}`,
            );
        }

        return response.json() as Promise<T>;
    } catch (error) {
        if (error instanceof Error && error.name === 'TimeoutError') {
            throw new Error(`Request to ${url} timed out`);
        }
        throw error;
    }
};
