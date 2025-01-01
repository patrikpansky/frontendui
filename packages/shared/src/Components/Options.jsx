import { useEffect, useCallback, useState } from 'react';
import { useAsyncAction } from "@hrbolek/uoisfrontend-gql-shared";
import { ErrorHandler } from "./ErrorHandler";
import { LoadingSpinner } from "./LoadingSpinner";
import { SimpleCardCapsule } from './SimpleCardCapsule';

/**
 * A reusable component for loading and rendering `<option>` elements dynamically.
 *
 * @param {Object} props - The props for the `Options` component.
 * @param {Function} props.asyncAction - An async action to fetch options data.
 * @param {Object} [props.params={}] - Parameters to pass to the async action.
 *
 * @returns {JSX.Element} A collection of `<option>` elements or loading/error states.
 */

export const Options = ({ asyncAction, params = {}, shouldFetch }) => {
    const { error, loading, fetch, entity, dispatchResult } = useAsyncAction(asyncAction, params, {deferred: true});
    
    useEffect(() => {
        fetch(params)
    }, [shouldFetch, asyncAction]
    )

    console.log("Options.params", params)
    let options = []
    if (entity?.id) {
        options = entity?.options || []
    } else {
        const result = dispatchResult?.data?.result
        options = result?.options || []
    }
    // console.log("Options", options, entity, dispatchResult)
    return (
        <>
            {loading && <LoadingSpinner />}
            {error && <ErrorHandler errors={error} />}
            {options.map((option) => (
                <option key={option?.id} value={option?.id}>
                    {option?.name}
                </option>
            ))}
        </>
    );
};
