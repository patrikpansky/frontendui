import { CardCapsule, TextInput, useDispatch } from "@hrbolek/uoisfrontend-shared/src"
import { useState } from "react"
import { FetchSearchAsyncAction } from "../Queries/FetchSearchAsyncAction"
import { Col, Row } from "react-bootstrap"
import { useSelector } from "react-redux"
import { UserLink } from "./User/UserLink"
import { GroupLink } from "./Group"

const ShowUser = ({user}) => {
    return (
        <>
            <UserLink user={user} />
            <br />
        </>
    )
}

const ShowGroup = ({group}) => {
    return (
        <>
            <GroupLink group={group} />
            <br />
        </>
    )
}

const Nevim = ({item}) => {
    return (
        <>
            Nalezl jsem toto : {JSON.stringify(item)}
        </>
    )
}

const LinkMap = {
    GroupGQLModel: ({item}) => <GroupLink group={item} />,
    UserGQLModel: ({item}) => <UserLink user={item} />,
}

const ShowResult = ({item}) => {
    const Component = LinkMap[item?.__typename] || Nevim
    return (
        <>  
            <Component item={item} />
            <br />
        </>
    )
}

export const UGSearch = () => {
    const [phrase, setPhrase] = useState("")
    const dispatch = useDispatch()
    const onChange = (newValue) => {
        const lowercase = newValue.toLowerCase()
        setPhrase(lowercase)
        if (lowercase.length > 2) {
            dispatch(FetchSearchAsyncAction({str: lowercase}))
        }
    }

    const items = useSelector(state => state["items"])
    const anys = (phrase.length > 2)?Object.values(items).filter(
        i => (i?.fullname || i?.name || '').toLowerCase().includes(phrase)
    ):[]

    return (
        <>
            <CardCapsule title="Hledání">
                <TextInput value={phrase} onChange={onChange} />
            </CardCapsule>
            <CardCapsule title="Výsledky">
                {anys.map(i => <ShowResult key={i.id} item={i} />)}
            </CardCapsule>
        </>        
    )
}