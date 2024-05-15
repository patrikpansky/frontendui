/* eslint-disable react/prop-types */
import { 
    CardCapsule, 
    DeleteButton, 
    Dialog, 
    useDispatch, 
    CreateAsyncQueryValidator,
    SelectInput,
    SearchInput
 } from '@hrbolek/uoisfrontend-shared/src'

// import { TextInput } from '@hrbolek/uoisfrontend-shared/src'
// import Row from 'react-bootstrap/Row'
// import Col from 'react-bootstrap/Col'

import { GroupLink } from './GroupLink'
import { UserLink } from '../User'
import { useCallback, useState } from 'react'
import { FetchRoleTypesAsyncAction } from '../../Queries/FetchRoleTypesAsyncAction'
import { TextInput } from '../User/UserSearch'
import { InsertRoleAsyncAction } from '../../Queries/InsertRoleAsyncAction'
import { FetchSearchUserAsyncAction } from '../../Queries/FetchSearchUserAsyncAction'
import { FetchGroupByIdAsyncAction } from '../../Queries'

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
                <SearchInput title="Výběr uživatele" onSelect={onChange("user_id")} FetchByPatternAsyncAction={FetchSearchUserAsyncAction} />
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

    // const startdate = role?.startdate?new Date(role?.startdate).toLocaleDateString(): ""
    return (
        <CardCapsule title={<>Skupina <GroupLink group={group} /></>}>

            <table className='table table-striped'>
                <thead>
                    <tr>
                        <td>Uživatel</td>
                        <td>Typ</td>
                        <td>Od</td>
                        <td>Do</td>
                        <td></td>
                    </tr>
                </thead>
                <tbody>
                    {roles.map(
                        role => <tr key={role.id}>
                                <td><UserLink user={role?.user} /></td>
                                <td>{role?.roletype?.name}</td>
                                <td>{role?.startdate?new Date(role?.startdate).toLocaleDateString(): ""}</td>
                                <td>{role?.enddate?new Date(role?.enddate).toLocaleDateString(): ""}</td>
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
