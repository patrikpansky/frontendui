import { useSelector } from "react-redux";

import { createAsyncGraphQLAction, useAsyncAction, useFreshItem } from "@hrbolek/uoisfrontend-gql-shared"
import { LoadingSpinner } from "@hrbolek/uoisfrontend-shared"
import { ErrorHandler } from "@hrbolek/uoisfrontend-shared"

const StateReadQuery = 
`
query StateReadQuery($id: UUID!) {
  result: stateById(id: $id)  {
  	__typename
    id  
    name
    targets {
      __typename
      id
      name
      target {
        id
        name
      }
    }
  } 
}
`

const StateReadAsyncAction = createAsyncGraphQLAction(StateReadQuery)

/**
 * A component for displaying the `state` attribute of an request entity.
 *
 * This component checks if the `state` attribute exists on the `request` object. If `state` is undefined,
 * the component returns `null` and renders nothing. Otherwise, it displays a placeholder message
 * and a JSON representation of the `state` attribute.
 *
 * @component
 * @param {Object} props - The props for the RequestStateAttribute component.
 * @param {Object} props.request - The object representing the request entity.
 * @param {*} [props.request.state] - The state attribute of the request entity to be displayed, if defined.
 *
 * @returns {JSX.Element|null} A JSX element displaying the `state` attribute or `null` if the attribute is undefined.
 *
 * @example
 * // Example usage:
 * const requestEntity = { state: { id: 1, name: "Sample State" } };
 *
 * <RequestStateAttribute request={requestEntity} />
 */
export const RequestStateAttribute = ({request}) => {
    const {state = {id: "bdf5169a-c2f1-4bc2-923b-1eefd941e261"}} = request
    if (typeof state === 'undefined') return null
    
    // const [_state] = useFreshItem(state, StateReadAsyncAction)
    const { entity: _state, error, loading } = useAsyncAction(StateReadAsyncAction, state)
    if (error) return <ErrorHandler errors={error} />
    if (loading) return <LoadingSpinner text="Nahrávám stavy"/>
    return (
        <>
            
            {(_state?.targets || []).map(
                transition => {
                    return (
                        <span key={transition.id} className="btn btn-lg btn-outline-success">{transition?.name} ({transition?.target?.name})</span>
                    )
                }
            )}
            {/* <br/>Probably {'<StateMediumCard state=\{state\} />'} <br />
            {JSON.stringify(_state)} */}
        </>
    )
}

export const RequestCurrentState = ({request}) => {
    const {state = {id: "bdf5169a-c2f1-4bc2-923b-1eefd941e261"}} = request
    if (typeof state === 'undefined') return null
    const items = useSelector((state) => state["items"]);
    const _state = items[state.id]
    if (_state) {
        return (
            <span className="btn btn-lg btn-outline-secondary form-control">Stav {_state?.name}</span>
        )
    }
}