import { useEffect, useRef } from 'react'
import { useAsyncAction } from "@hrbolek/uoisfrontend-gql-shared"
import { ErrorHandler } from "./ErrorHandler"
import { LoadingSpinner } from "./LoadingSpinner"
import { ChildWrapper } from "../ComponentManagement"

/**
 * AsyncComponent
 *
 * A higher-order React component that handles asynchronous operations and passes the result
 * as a prop to its children. It manages loading states, errors, and fetched data, making
 * it easier to integrate asynchronous logic into UI components.
 *
 * @component
 * @param {Object} props - The properties for the AsyncComponent.
 * @param {React.ReactNode} props.children - The child components that will receive the fetched data.
 * @param {Function} props.asyncAction - The asynchronous function to be executed. Should return a promise.
 * @param {Object} props.queryVariables - The variables passed to the asynchronous function for fetching data.
 * @param {string} props.propertyName - The name of the prop under which the fetched data (`entity`) is passed to the children.
 * @param {Function} [props.onGotFetch=(fetch) => null] - Callback invoked with the `fetch` function once it is available. 
 *                                                        Useful for performing additional actions like re-fetching.
 * @param {...Object} props - Additional props that are passed down to the `ChildWrapper` component.
 *
 * @example
 * // Usage Example
 * const MyComponent = () => {
 *     const asyncAction = (variables) => fetch('/api/data', { method: 'POST', body: JSON.stringify(variables) });
 *
 *     return (
 *         <AsyncComponent
 *             asyncAction={asyncAction}
 *             queryVariables={{ id: 1 }}
 *             propertyName="data"
 *             onGotFetch={(fetch) => console.log('Fetch function available:', fetch)}
 *         >
 *             {(props) => <div>Data: {props.data}</div>}
 *         </AsyncComponent>
 *     );
 * };
 *
 * @returns {JSX.Element} A component that renders child components with the fetched data and handles loading, error, and data states.
 */
export const AsyncComponent = ({children, asyncAction, queryVariables, propertyName, shouldFetch=0, onGotFetch=(fetch)=>null, ...props}) => {
    const { 
        loading,
        error,
        entity,
        fetch
    } = useAsyncAction(asyncAction, queryVariables, {deferred: true})
    
    useEffect(()=>{
        fetch(queryVariables)
    }, [shouldFetch])

    const fetchPassedUp = useRef(false)
    if (!fetchPassedUp.current) {
        if (fetch) {
            onGotFetch(fetch)
            fetchPassedUp.current = true
        }
    }
    
    const childrenProps = {[propertyName]: entity}
    return (<>
        {error && <ErrorHandler errors={error} />}
        {loading && <LoadingSpinner />}
        {!entity && <span className='alert-warning' role="alert">Nemám data</span>}
        {entity && <ChildWrapper {...childrenProps} {...props}>
            {children}
        </ChildWrapper>}
    </>)
}