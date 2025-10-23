/**
 * A generic API client function for fetching JSON data from a given URL.
 * @template T - the expected shape of the response data
 * @param {string} url - the endpoint url to fetch data from
 * @returns {Promise<T>} - A promise that resolves to the parsed JSON response of type `T`
 * @throws {Error} - throws an error if the network request fails or the response is not ok
 */
export const apiClient = async <T>(url: string): Promise<T> => {
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error('Error in fetching the data');
    }

    return response.json() as Promise<T>;
};
