import { useAsyncAction } from "@hrbolek/uoisfrontend-gql-shared"
import { RoleTypeListReadAsyncAction } from "./Queries/RoleTypeListReadAsyncAction"
import { ErrorHandler, LoadingSpinner, SimpleCardCapsule } from "@hrbolek/uoisfrontend-shared"
import { RoleTypeListTypeCDButton } from "./RoleTypeListTypeCDButton"
import { TrashFill } from "react-bootstrap-icons"
import { HorizontalLine } from "../../../../requests/src/Components/Part"

export const RoleTypeListDesigner = ({roletypelist, children}) => {
    const {loading, error, entity, fetch, dispatchResult} = useAsyncAction(RoleTypeListReadAsyncAction, roletypelist)
    
    const handleRefresh = async() => {
        const freshEntity = await fetch()
        console.log("refreshed entity", freshEntity)
    }

    if (loading) return (
        <LoadingSpinner text="Nahrávám" />
    )
    if (error) return (
        <ErrorHandler errors={error} />
    )
    if (!entity) return (
        <>Nenalezeno<br/>{JSON.stringify(dispatchResult)}<br/>{children}</>
    )
    const roletypes = entity?.roletypes || []
    return (<>
        
            {roletypes.map(roletype => <div key={roletype.id}>
                <span className="btn btn-light">
                    <span className="btn btn-sm btn-outline-primary">{roletype.name}</span>
                    &nbsp;
                    <RoleTypeListTypeCDButton 
                        operation="D"
                        className="btn btn-sm btn-outline-danger"
                        roletypelist={{id: entity.id, type_id: roletype.id, name: roletype.name}}
                        onDone={handleRefresh}
                    >
                        <TrashFill />
                    </RoleTypeListTypeCDButton>
                    
                </span>
                <br />
            </div>)}
            {/* <HorizontalLine>
                
            </HorizontalLine> */}
            <span className="btn btn-sm btn-light form-control">
                <RoleTypeListTypeCDButton 
                    className="btn btn-sm btn-outline-primary form-control"
                    roletypelist={roletypelist}
                    operation="C"
                    onDone={handleRefresh}
                >
                    Přidat roli
                </RoleTypeListTypeCDButton>
            </span>
            {/* <br />
            {JSON.stringify(roletypes)} */}
        
    </>)
}