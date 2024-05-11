/* eslint-disable react/prop-types */
import { CardCapsule, DeleteButton, Dialog, useDispatch, useFreshItem, CreateAsyncQueryValidator } from '@hrbolek/uoisfrontend-shared/src'
// import { TextInput } from '@hrbolek/uoisfrontend-shared/src'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import { GroupLink } from './GroupLink'
import { UserLink } from '../User'
import { useCallback, useEffect, useState } from 'react'
import { FetchRoleTypesAsyncAction } from '../../Queries/FetchRoleTypesAsyncAction'
import { Search, TextInput, UserSearch } from '../User/UserSearch'
import { InsertRoleAsyncAction } from '../../Queries/InsertRoleAsyncAction'
import { SearchBox } from '../RoleTypeSearch'
import { FetchSearchUserAsyncAction } from '../../Queries/FetchSearchUserAsyncAction'
import { FetchGroupByIdAsyncAction } from '../../Queries'

const RoleTypeSelect = ({id, value, onSelect}) => {
    const [_, promise] = useFreshItem({}, FetchRoleTypesAsyncAction)
    const [roleTypes, setRoleTypes] = useState([])
    promise.then(json => {
        const r = json?.data?.result
        if (r) {
            setRoleTypes(r)
        }
        return json
    })
    const onChange = (e) => {
        if (onSelect) {
            onSelect(e.target.value)
        }
    }
    return (
        <select className="form-select" id={id} value={value} onChange={onChange} aria-label="">
            {roleTypes.map(
                rt => <option key={rt.id} value={rt.id}>{rt?.name}</option>
            )}
        </select>
    )
}


const SelectInput = ({FetchAsyncAction, skip=0, limit=100, where=null, onChange, ...selectProps}) => {
    const [resuls, setResults] = useState([])
    const dispatch = useDispatch()
    const onChange_ = (event) => {
        event.preventDefault()
        const value = event.target.value
        if (onChange) {
            onChange(value)
        } else {
            console.error("missing onChange (SelectInput)")
        }
    }

    useEffect(
        ()=> {
            const func = async () => {
                const json = await dispatch(FetchAsyncAction({skip, limit, where}))
                const result = json?.data?.result
                if (result) {
                    setResults(result)
                }
                // console.log("json", json)
            }
            func()
        }, [FetchAsyncAction, dispatch, skip, limit, where]
    )
    return (
        <select className="form-select" onChange={onChange_} {...selectProps}>
            {resuls.map(
                item => <option key={item.id} value={item.id}>{item?.fullname || item?.name || "???Chyba???"}</option>
            )}
        </select>
    )

}

const AddRoleDialog = ({onCreate}) => {
    const [visible, setVisible] = useState(false)
    const [data, setData] = useState({
        roletype_id: "233217fd-e23f-46af-a005-f1a125d39c6a",
        startdate: new Date().toISOString().split('T')[0],
        enddate: new Date().toISOString().split('T')[0],
    })
    const onOk = () => {
        setVisible(false)
        onCreate({...data})
    }

    const onCancel = () => {
        setVisible(false)
    }
    const onOpen = () => {
        setVisible(true)
    }
    const onChange = useCallback((atributeName) => (value) => {
        setData(oldData => {
            const newData =  {...oldData}
            newData[atributeName] = value
            console.log(newData)
            return newData
        })
    }, [setData])

    if (visible) {
        return (
            <Dialog title="Výběr role" onOk={onOk} onCancel={onCancel}>
                <div className="form-floating">
                    <SelectInput FetchAsyncAction={FetchRoleTypesAsyncAction} id="select" value={data.roletype_id} onChange={onChange("roletype_id")} />
                    <label htmlFor={"select"}>Typ role</label>
                </div>                
                <div className="form-floating">
                    <TextInput type={"date"} id={"startdate"} value={data.startdate} onChange={onChange("startdate")} />
                    <label htmlFor={"startdate"}>startdate</label>
                </div>
                <div className="form-floating">
                    <TextInput type={"date"} id={"enddate"} value={data.enddate} onChange={onChange("enddate")} />
                    <label htmlFor={"enddate"}>enddate</label>
                </div>
                <Search title="Výběr uživatele" onSelect={onChange("user_id")} FetchByPhraseAsyncAction={FetchSearchUserAsyncAction} />
            </Dialog>
        )
    } else {
        return (
            <button className='btn btn-success form-control' onClick={onOpen}>+</button>
        )
    }
}

const validator = CreateAsyncQueryValidator({error: "Nepovedlo se přidat roli", success: "Přidání role se povedlo"})
export const GroupRolesEditCard = ({group}) => {
    const dispatch = useDispatch()
    const roles = group?.roles || []
    
    const onCreate = (data) => {
        const [onResolve, onReject] = validator(dispatch)
        const fullRecord = {...data, group_id: group.id, id: crypto.randomUUID()}
        console.log("fullRecord", fullRecord)
        dispatch(
            InsertRoleAsyncAction(fullRecord)
        ).then(onResolve, onReject)
        .then(() => {
            dispatch(FetchGroupByIdAsyncAction({id: group.id}))
        })
    }
    return (
        <CardCapsule title={<>Skupina <GroupLink group={group} /></>}>

            <table className='table table-striped'>
                <thead>
                    <tr>
                        <td>Uživatel</td>
                        <td>Typ</td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                </thead>
                <tbody>
                    {roles.map(
                        role => <tr key={role.id}>
                                <td><UserLink user={role?.user} /></td>
                                <td>{role?.roletype?.name}</td>
                                <td>{role?.startdate}</td>
                                <td>{role?.enddate}</td>
                                <td><DeleteButton>D</DeleteButton></td>
                            </tr>
                    )
                    
                    }
                    <tr>
                        <td colSpan={5}><AddRoleDialog group={group} onCreate={onCreate}/></td>
                    </tr>
                </tbody>
            </table>
        </CardCapsule>

    )
}
