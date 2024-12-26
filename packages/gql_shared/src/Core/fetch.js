/**
 * Wrapper function for `fetch` that provides an intermediary layer for server communication.
 * Includes options for custom headers, body modifications, and response handling.
 *
 * @param {string} path - The API endpoint path to fetch from. Ignored if `overridenPath` is provided.
 * @param {Object} [params={}] - Fetch parameters, including headers and body. These are merged with global fetch parameters.
 * @param {Object} [options={}] - Additional configuration options for the fetch request.
 * @param {boolean} [options.replaceUUID=false] - If true, replaces all instances of "UUID" in the request body with "ID".
 * @param {boolean} [options.replaceID=false] - If true, replaces all instances of ": ID" in the request body with ": UUID".
 * @param {Object} [options.globalFetchParams={}] - Default fetch parameters applied globally.
 * @param {string} [options.globalFetchParams.method='POST'] - HTTP method for the fetch request (e.g., 'GET', 'POST').
 * @param {Object} [options.globalFetchParams.headers={'Content-Type': 'application/json'}] - Default headers for the fetch request.
 * @param {string} [options.globalFetchParams.cache='no-cache'] - Cache behavior (e.g., 'no-cache', 'reload').
 * @param {string} [options.globalFetchParams.redirect='follow'] - Redirect behavior (e.g., 'manual', 'follow', 'error').
 * @param {string} [options.overridenPath='/api/gql'] - Path to use for the request instead of the provided `path`.
 *
 * @returns {Promise<Object>} - A promise that resolves to the parsed JSON response, or rejects with an error.
 *
 * @throws {Error} If the fetch response status is not in the 2xx range.
 * @throws {Error} If the response contains a redirect (302) and the `location` header is missing.
 *
 * @example
 * authorizedFetch2('/api/users', {
 *   headers: { Authorization: 'Bearer token' },
 *   body: JSON.stringify({ query: '{ users { id, name } }' })
 * }, {
 *   replaceUUID: true,
 *   overridenPath: '/api/custom'
 * }).then(data => console.log(data))
 *   .catch(err => console.error(err));
 */
export const authorizedFetch2 = (path, params = {}, options = {}) => {
    // console.log("fetch from shared")
    const {
        replaceUUID = false,
        replaceID = false,
        globalFetchParams = { 
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            redirect: 'error', // manual, *follow, error
        
        },
        overridenPath = '/api/gql', // Default to `path` if not overridden
    } = options;

    // Merge headers and parameters
    const headers = { ...globalFetchParams.headers, ...params.headers };
    const newParams = { ...globalFetchParams, ...params, headers };

    // Safely handle body replacements if `body` is a string
    if (typeof newParams.body === "string") {
        if (replaceUUID) {
            newParams.body = newParams.body.replaceAll("UUID", "ID");
        }
        if (replaceID) {
            newParams.body = newParams.body.replaceAll(": ID", ": UUID");
        }
    }

    const fetchResult = fetch(overridenPath, newParams)
    // if (!fetchResult.ok) {
    //     throw new Error(`HTTP error!`);
    // }
    return fetchResult.then(response => {
        if (response.status === 302 && typeof window !== "undefined") {
            const location = response.headers.get("location");
            if (location) {
                const redirectLocation = new URL(location, window.location.origin);
                window.location.assign(redirectLocation.toString());
            }
        }
        // Handle non-2xx statuses
        if (!response.ok) {
            return Promise.reject(new Error(`HTTP error: ${response.status}`));
        }

        // Parse and return JSON response
        return response.json();
    }).catch(error => {
        console.log("fetch", error)
        return Promise.reject(new Error(error));
    })
}
