/* eslint-disable react/prop-types */
import { CreateAsyncActionFromQuery, TextInput, useDispatch } from "@hrbolek/uoisfrontend-shared/src"
import { useEffect, useState } from "react"
import { useSearchParams } from "react-router-dom"



const RoleTypeQuery = `query($phrase: String!) {
    result: roleTypePage(where: {name: {_ilike: $phrase}}) {
      id
      name
    }
  }`
const Clicker = ({item, onClick}) => {
    const onClick_ = (event) => {
        event.preventDefault()
        console.log("clicked", item)
        onClick(item)
    }
    return (
        <><a href="" onClick={onClick_}>{item?.fullname||item?.name||"??? Chyba ???"}</a>; </>
    )
}

export const SearchBox = ({label, queryAsyncAction, C=Clicker, onSelect}) => {
    const [revealedItems, setRevealedItems] = useState([])
    const [phrase, setPhrase] = useState("")
    const [id] = useState(crypto.randomUUID())
    const [visible, setVisible] = useState(true)

    const dispatch = useDispatch()
    const onChange_ = async (value) => {
        setPhrase(value)
        console.log("SearchBox", value)
        if (value.length < 3) {
            setRevealedItems([])
            return
        }

        const variables = {phrase: `%${value.toLowerCase()}%`}
        const response = await dispatch(queryAsyncAction(variables))
        const items = response?.data?.result
        if (items) {
            setRevealedItems(items)
        }
    }
    const onSelect_ = (item) => {
        console.log("onSelect", item)
        setPhrase(item?.fullname||item.name)
        setVisible(false)
        if (onSelect) {
            onSelect(item.id)
        }
    }

    if (visible) {
        return (
            <>
                <div className="form-floating">
                    <TextInput id={id} value={phrase} onChange={onChange_} />
                    <label htmlFor={id}>{label}</label>
                </div>
                {revealedItems.map(r => <C key={r.id} item={r} onClick={onSelect_}/>)}
            </>
        )
    } else {
        return (
            <div className="form-floating">
                <span id={id} className="input-group-text form-control" onClick={() => setVisible(true)}>{phrase}</span>
                <label htmlFor={id}>{label}</label>
            </div>            
        )
    }
}

const RoleTypeFetch = CreateAsyncActionFromQuery(RoleTypeQuery)

export const RoleTypeSearch = ({onSelect}) => {
    
    return (
        <>
            <SearchBox label={"Typ role"} queryAsyncAction={RoleTypeFetch} onSelect={onSelect}/>
        </>        
    )
}