import { useState } from "react"
import { useSearchParams } from "react-router-dom"

import { CardCapsule, SearchInput, ProxyLink } from '@hrbolek/uoisfrontend-shared/src'
import { FetchSearchAnyAsyncAction } from "../Queries/FetchSearchAnyAsyncAction"

const UserLink = ({item}) => {
    return (
        <><ProxyLink to={"/ug/user/view/" + item?.id}>{item?.fullname}</ProxyLink><br /> </>
    )
}

const EventLink = ({item}) => {
    return (
        // <><span><span className="btn btn-success">E</span>{item?.name}</span><br /> </>
        <><ProxyLink to={"/events/event/view/" + item?.id}>{item?.name}</ProxyLink><br /> </>
    )
}


const ComponentMap = {
    EventGQLModel: EventLink,
    UserGQLModel: UserLink
}

const ShowResultComponent = ({item}) => {
    const { __typename } = item
    const Component = ComponentMap[__typename]
    if (Component) {
        return (
            <Component item={item} />
        )
    } else {
        return (
            <><span>{item?.__typename} {item?.fullname || item?.name}</span>; </>
        )
    }
    
}

export const GlobalSearchPage = ({term: propTerm}) => {
    const {term: paramTerm  } = useSearchParams()
    const [term, SetTerm] = useState((propTerm || paramTerm || ""))

    const onSelect = (id) => {
        console.log("selected", id)
    }

    return (
        <CardCapsule title="Globální vyhledávání">
            <SearchInput title="Vyhledávání" limit={10} onSelect={onSelect} FetchByPatternAsyncAction={FetchSearchAnyAsyncAction} ShowResultComponent={ShowResultComponent}/>
        </CardCapsule>
    )

}