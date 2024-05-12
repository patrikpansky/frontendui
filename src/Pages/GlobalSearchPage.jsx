import { useState } from "react"
import { useSearchParams } from "react-router-dom"

import { CardCapsule, SearchInput, ProxyLink } from '@hrbolek/uoisfrontend-shared/src'
import { FetchSearchAnyAsyncAction } from "../Queries/FetchSearchAnyAsyncAction"
const BreakElement = () => "; "
const UserLink = ({item}) => {
    return (
        <><ProxyLink to={"/ug/user/view/" + item?.id}><span className="btn btn-sm btn-outline-success" >U</span> {item?.fullname}</ProxyLink><BreakElement /> </>
    )
}

const GroupLink = ({item}) => {
    return (
        // <><span><span className="btn btn-success">E</span>{item?.name}</span><br /> </>
        <><ProxyLink to={"/ug/group/view/" + item?.id}><span className="btn btn-sm btn-outline-success" >S</span> {item?.name}</ProxyLink><BreakElement /> </>
    )
}

const EventLink = ({item}) => {
    return (
        // <><span><span className="btn btn-success">E</span>{item?.name}</span><br /> </>
        <><ProxyLink to={"/events/event/view/" + item?.id}><span className="btn btn-sm btn-outline-success" >E</span> {item?.name}</ProxyLink><BreakElement /> </>
    )
}


const ComponentMap = {
    EventGQLModel: EventLink,
    UserGQLModel: UserLink,
    GroupGQLModel: GroupLink
}

let prev = " "
const ShowResultComponent = ({item}) => {
    const { __typename } = item
    const Component = ComponentMap[__typename]
    if (Component) {       
            // const result = (<>
            //     <Component item={item} />{(prev === __typename)?"!":"?"}</>)
            // prev = __typename
            return (
                // result
                <Component item={item} />
            )       
    } else {
        return (
            <><span>{item?.__typename} {item?.fullname || item?.name}</span>; </>
        )
    }
    
}

export const GlobalSearchPage = ({term: propTerm}) => {
    const [params, setParams] = useSearchParams()
    const [term, SetTerm] = useState((propTerm || params.get("term") || ""))

    const onSelect = (id) => {
        console.log("selected", id)
    }

    return (
        <CardCapsule title="Globální vyhledávání uživatelů, skupin, událostí, místností, programů, předmětů, projektů, výsledků">
            <SearchInput label="Vyhledávání" phrase={term} skip={0} limit={10} onSelect={onSelect} FetchByPatternAsyncAction={FetchSearchAnyAsyncAction} ShowResultComponent={ShowResultComponent}/>
        </CardCapsule>
    )

}