import { useRef } from 'react'
import { useAsyncAction } from "@hrbolek/uoisfrontend-gql-shared"
import { ErrorHandler } from "./ErrorHandler"
import { LoadingSpinner } from "./LoadingSpinner"
import { ChildWrapper } from "../ComponentManagement"

export const AsyncComponent  = ({children, asyncAction, queryVariables, propertyName, onGotFetch=(fetch)=>null, ...props}) => {
    const { 
        loading,
        error,
        entity,
        fetch
    } = useAsyncAction(asyncAction, queryVariables)
    const fetchPassedUp = useRef(false)
    if (!fetchPassedUp.current) {
        if (fetch) {
            onGotFetch(fetch)
            fetchPassedUp.current = true
        }
    }
    if (error) return <ErrorHandler errors={error} />
    if (loading) return <LoadingSpinner />
    if (!entity) return <>No entity</>
    const childrenProps = {[propertyName]: entity}
    return (
        <ChildWrapper {...childrenProps} {...props}>
            {children}
        </ChildWrapper>
    )
}