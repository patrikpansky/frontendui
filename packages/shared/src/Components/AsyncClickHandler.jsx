import { useAsyncAction } from "@hrbolek/uoisfrontend-gql-shared"
import { ChildWrapper } from "../ComponentManagement"
import { LoadingSpinner } from "./LoadingSpinner"
import { ErrorHandler } from "./ErrorHandler"

/**
 * AsyncClickHandler Component
 *
 * A utility React component that wraps children components and provides enhanced `onClick` functionality.
 * It integrates with a deferred asynchronous action (`useAsyncAction`), allowing you to handle loading states,
 * errors, and pass the result to an external callback.
 *
 * @param {Object} props - The properties for the AsyncClickHandler component.
 * @param {React.ReactNode} props.children - The child components to be wrapped and enhanced with the `onClick` handler.
 * @param {Function} props.asyncAction - The asynchronous action to perform when the `onClick` handler is triggered.
 * @param {Object} [props.defaultParams={}] - Default parameters to pass to the asynchronous action.
 * @param {string} [props.loadingMsg="Loading..."] - A message to display while the action is in progress.
 * @param {Function} [props.onClick] - A callback triggered after the asynchronous action resolves, receiving the result.
 *
 * @returns {JSX.Element} A wrapper component that injects an enhanced `onClick` handler into its children and handles loading/error states.
 *
 * @example
 * // Example usage:
 * const asyncAction = (params) => mockApiCall(params);
 *
 * <AsyncClickHandler
 *   asyncAction={asyncAction}
 *   defaultParams={{ id: 1 }}
 *   loadingMsg="Processing..."
 *   onClick={(result) => console.log("Action completed:", result)}
 * >
 *   <Button>Click Me</Button>
 * </AsyncClickHandler>
 */
export const AsyncClickHandler = ({
    children,
    asyncAction,
    defaultParams = {},
    loadingMsg = "Loading...",
    onClick,
}) => {
    const { error, loading, fetch, entity } = useAsyncAction(asyncAction, defaultParams, { deferred: true });

    const handleClick = async (params = {}) => {
        const fetchParams = { ...defaultParams, ...params }
        
        const entity = await fetch(fetchParams);
        if (onClick) {
            onClick(entity);
        }
        // console.log("AsyncClickHandler.fetch with ", fetchParams)
        // console.log("AsyncClickHandler.fetch got ", entity)
    };
    // console.log("AsyncClickHandler.render", loading, error, entity)
    return (
        <>
            {loading && <LoadingSpinner text={loadingMsg} />}
            {error && <ErrorHandler errors={error} />}
            {/* {<ErrorHandler errors={error} />} */}
            <ChildWrapper onClick={handleClick}>
                {children}
            </ChildWrapper>
        </>
    );
};
