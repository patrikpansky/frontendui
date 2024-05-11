/* eslint-disable react/prop-types */
import { CardCapsule, useDispatch, CreateDelayer } from "@hrbolek/uoisfrontend-shared/src"
// import { TextInput } from "@hrbolek/uoisfrontend-shared/src"
import { useEffect, useMemo, useState } from "react"
import { useSelector } from "react-redux"
import { useSearchParams } from "react-router-dom"
import { FetchSearchUserAsyncAction } from "../../Queries/FetchSearchUserAsyncAction"


export const TextInput = ({id, value, onChange, placeholder, type="text"}) => {
    const [delayer] = useState(() => CreateDelayer())
    const localOnChange = //useCallback(
        (e) => {
            const newValue = e.target.value
            if (onChange) {
                delayer(() => onChange(newValue))
            }
        }
    const onBlur = //useCallback(
        (e) => {
            const newValue = e.target.value
            if (onChange) {
                delayer(() => onChange(newValue))
            }
        }

    return (
        <input type={type} id={id} className="form-control" placeholder={placeholder} defaultValue={value} onChange={localOnChange} onBlur={onBlur}/>
    )
}


const UserGQLModel = ({user, onClick}) => {
    const onClick_ = (event) => {
        if (onClick) {
            onClick(user)
        }
        event.preventDefault()
    }
    return (
        <a href="#" onClick={onClick_}>{user?.fullname || user?.email}</a>
    )
     
}

const ShowResult = ({user, onClick}) => {
    return (
        <>  
            <UserGQLModel user={user} onClick={onClick}/>
            <br />
        </>
    )
}

const ShowResult2 = ({item, onClick}) => {
    const onClick_ = (event) => {
        event.preventDefault()
        onClick(item)
    }
    return (
        <><a href="#" onClick={onClick_}>{item?.fullname || item?.name}</a>;  </>
    )
}


export const Search = ({limit=100, FetchByPhraseAsyncAction, onSelect}) => {
    const dispatch = useDispatch()
    const [Delayer] = useState(() => CreateDelayer()) // useState checks for a function ;)
    const [phrase, setPhrase] = useState("")
    const [results, setResults] = useState([])
    const [visible, setVisible] = useState(true)

    const onChange = (e) => {
        const newPhrase = e.target.value
        // console.log("newPhrase", newPhrase)
        Delayer(() => setPhrase(newPhrase))
    }
    const onClick = (item) => {
        console.log('clicked', item)
        if (onSelect) {
            onSelect(item.id)
        }
        setVisible(false)
        setPhrase(item?.fullname||item?.name||"???chyba???")
    }

    useEffect( () => {
        const lowercase = phrase.toLowerCase()
        if (lowercase.length > 2) {
            // console.log("useEffect with " + lowercase)
            dispatch(FetchByPhraseAsyncAction({pattern: `%${lowercase}%`, limit: limit}))
            .then(
                (json) => {
                    // console.log("useEffect end", json)
                    const data = json?.data || {}
                    // console.log("allResults", data)
                    let allResults = []
                    for(const key in data) {
                        const result = data[key]
                        // console.log("allResults", result)
                        if (Array.isArray(result)) {
                            allResults.push(...result)
                        }
                    }
                    console.log("allResults", allResults)
                    setResults(allResults)
                }
            )
        }
    }, [FetchByPhraseAsyncAction, dispatch, phrase])

    if (visible) {
        return (
            <>
                <div className="form-floating">
                    <input className="form-control" id={"searchbox"} defaultValue={phrase} onChange={onChange} />
                    <label htmlFor={"searchbox"}>{"search"}</label>
                </div>
                {results.map(
                    result => <ShowResult2 key={result.id} item={result} onClick={onClick}/>
                )}
                {/* <ShowResult2 onClick={onClick} item={{ __typename: "UserGQLModel", id: "8df87f6c-7b00-45d5-9512-80691bc027b4", name: "Petra", surname: "Ondráčková", fullname: "Petra Ondráčková", email: "" }} /> */}
            </>
        )
    } else {
        return (
            <div className="form-floating">
                <span id={"searchbox"} className="input-group-text form-control" onClick={() => setVisible(true)}>{phrase}</span>
                <label htmlFor={"searchbox"}>{"search"}</label>
            </div>            
        )        
    }
    
}

export const UserSearch = ({phrase, title, onClick}) => {
    // console.log(searchParams)
    // console.log(searchParams.get("term"))
    // const [id, setId] = useState(crypto.randomUUID())
    const [phrase_, setPhrase] = useState(phrase || "")
    const [results, setResults] = useState([])
    const [user, setUser] = useState(null)

    const dispatch = useDispatch()
    const onChange = (newValue) => {
        setPhrase(oldvalue => {
            const lowercase = newValue.toLowerCase()
            // if (lowercase.length > 2) {
            //     dispatch(FetchSearchAsyncAction({str: lowercase}))
            // }
            // setSearchParams({term : newValue})
            return lowercase
        })
    }
    const onClick_ = (user) => {
        // setPhrase("")
        // setId(crypto.randomUUID())
        setUser(user)
        // setPhrase(() => {
        //     return ""
        // })
        // console.log("selected", user)
        if (onClick) {
            onClick(user)
        }
    }

    const onClickSelectUserButton = () => {
        setUser(null)
    }

    useEffect( () => {
        const lowercase = phrase_.toLowerCase()
        if (lowercase.length > 2) {
            // console.log("useEffect with " + lowercase)
            dispatch(FetchSearchUserAsyncAction({str: lowercase}))
            .then(
                (json) => {
                    // console.log("useEffect end", json)
                    const r = json?.data?.resultall
                    if (r) {
                        setResults(r)
                    }
                }
            )
        }
    }, [dispatch, phrase_])
    
    // if (phrase || searchParams.get("term")) {
    //     let lowercase = phrase || searchParams.get("term")
    //     lowercase = lowercase.toLowerCase()
    //     // onChange(phrase)
    //     // dispatch(FetchSearchAsyncAction({str: lowercase}))
    // }

    const items = useSelector(state => state["items"])
    // const anys = (phrase_.length > 2)?Object.values(items).filter(
    //     i => (i?.fullname || i?.name || '').toLowerCase().includes(phrase_)
    // ):[]
    const anys = results
    // console.log(anys)
    // const u = { __typename: "UserGQLModel", id: "2c04831d-e8cd-471b-8219-005475d271dc", name: "Ľudovít", surname: "Hradský", fullname: "Ľudovít Hradský", email: "ludovit.hradsky@unob.cz" }
    // return (
    //     <>
    //         <CardCapsule title={title}>
    //             {user?"Vybraný uživatel: "  + user.fullname:""}
    //             <hr />
    //             <TextInput id={"30aa1832-2708-4c53-b891-dd09199bae82"} value={phrase_} onChange={onChange} />
    //             <hr />
    //             {(phrase_.length>2)?(anys.map(user => <ShowResult key={user.id} user={user} onClick={onClick_}/>)):""}

    //             {/* <UserGQLModel user={u} onClick={onClick_} /> */}

    //         </CardCapsule>
    //     </>        
    // )
    if (user) {
        return (<>
            <input className="form-control" disabled value={user.fullname} />
            {/* Vybraný uživatel: {user.fullname}  */}
            <button className="btn btn-success bt-sm" onClick={onClickSelectUserButton}>Vybrat uživatele</button>
        </>)
    } else {
        return (
            <>
                <TextInput id={"30aa1832-2708-4c53-b891-dd09199bae82"} value={phrase_} onChange={onChange} />
                <hr />
                {(phrase_.length>2)?(anys.map(user => <ShowResult key={user.id} user={user} onClick={onClick_}/>)):""}
    
                {/* <TextInput id={"30aa1832-2708-4c53-b891-dd09199bae82"} value={phrase_} onChange={onChange} />
                {user?<hr />:""}
                <hr /> */}          
            </>        
            )
    }
}