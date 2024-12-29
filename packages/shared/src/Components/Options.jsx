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

export const Options = ({ asyncAction, params = {} }) => {
    const { error, loading, fetch, entity } = useAsyncAction(asyncAction, params);

    let options = []
    if (entity?.id) {
        options = entity?.options || []
    } else {
        const result = entity?.data?.result
        options = result?.options || []
    }

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
