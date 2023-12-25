const overridenPath = '/api/gql'
const token = `eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiQmVhcmVyIiwiYWNjZXNzX3Rva2VuIjoiQUNDVC0xTTVQTkFiRmpHazIzVUtRcjkzYTZjRDBudnhPcG1ndCIsImV4cGlyZXNfaW4iOjM2MDAsInJlZnJlc2hfdG9rZW4iOiJSRUZULWp3aVJiWVFKajViYjRPOUFLU3ZCSGVNbkxKWWt4QmRhIiwidXNlcl9pZCI6IjJkOWRjNWNhLWE0YTItMTFlZC1iOWRmLTAyNDJhYzEyMDAwMyJ9.sCksLLkUPLDdN-04UVZjMiS7u9Isw44P8lYXhxM6evj9Z2I9QzXE4sSgEqzDO9QFJ9gowxsHnJWaGkicBXYozq-0O12wOaz4q8LWYnBufA6kSB299LnIndrgWse6q26vmMJcXAKaRNTL7aGy344pKc_2AqLzYhRFl4cT4Pg6a32MKTOgwZ188Y4-JKoLOYnDuyrayKbf9QhON_PjWDH9IRqXrI8dGYVCitvjlJ9Un2sUoRnBuqMouAFn_xAAVzudPVT1Ud1fTytSKuls4D3M2ZuINypG3gU4KnvsXUt3lDCYKnviR2Hn2D2NiqSwoyrSMsq28XFo8Wio4PnRoB7jeA`
const globalFetchParams = {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'authorization': token
    },
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    redirect: 'follow', // manual, *follow, error
}

// /**
//  * Zapouzdrujici funkce pro fetch, vytvari mezi vrstvu pro komunikace ze serverem
//  * @param {*} path 
//  * @param {*} params 
//  * @returns Promise
//  */
// export const authorizedFetch_ = (path, params) => {
//     // console.log("fetch from shared")
//     const newParams = {...globalFetchParams, ...params} // allow owerwrite default parameters (globalFetchParams)
//     // const overridenPath = '/api/gql/'
//     const overridenPath = '/api/gql'
//     return (
//         fetch(overridenPath, newParams) //params.header should be extended with Authorization TOKEN
//     )
// }


// const cache = {}
const replaceUUID = false
const replaceID = true
/**
 * Zapouzdrujici funkce pro fetch, vytvari mezi vrstvu pro komunikace ze serverem
 * @param {*} path 
 * @param {*} params 
 * @returns Promise
 */
export const authorizedFetch2 = (path, params) => {
    console.log("fetch from shared")

    const headers = {...globalFetchParams.headers, ...params.headers}
    const newParams = {...globalFetchParams, ...params, headers} // allow owerwrite default parameters (globalFetchParams)
    if (replaceUUID) {
        newParams.body = newParams.body.replaceAll("UUID", "ID")
    }
    if (replaceID) {
        newParams.body = newParams.body.replaceAll(": ID", ": UUID")
    }

    return fetch(overridenPath, newParams).then(response => response.json()) //params.header should be extended with Authorization TOKEN
    // const cached = cache[bodyIndex]
    // if (cached) {
    //     console.log("fetch2.cache used")
    //     return cached
    // } else {
    //     const result = fetch(overridenPath, newParams).then(response => response.json()) //params.header should be extended with Authorization TOKEN
    //     // cache[bodyIndex] = result   
    //     result.then(
    //         r => {
    //             // delete cache[bodyIndex]
    //         }
    //     )
    //     return result
    // }
}
