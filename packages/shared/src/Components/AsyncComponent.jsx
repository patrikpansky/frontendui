import { useAsyncAction } from "@hrbolek/uoisfrontend-gql-shared"
import { ErrorHandler } from "./ErrorHandler"
import { LoadingSpinner } from "./LoadingSpinner"
import { ChildWrapper } from "../ComponentManagement"

export const AsyncComponent  = ({children, asyncAction, queryVariables, propertyName, ...props}) => {
    const { 
        loading,
        error,
        entity
    } = useAsyncAction(asyncAction, queryVariables)
    
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