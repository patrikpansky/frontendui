/**
 * Zapouzdrujici funkce pro fetch, vytvari mezi vrstvu pro komunikace ze serverem
 * @param {*} path 
 * @param {*} params 
 * @returns Promise
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
            redirect: 'follow', // manual, *follow, error
        
        },
        overridenPath = path, // Default to `path` if not overridden
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

    return fetch(overridenPath, newParams).then(response => {
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
    }) 
}
