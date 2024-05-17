/* eslint-disable react/prop-types */
import { 
    CardCapsule, 
    DeleteButton,
    Dialog,
    CreateAsyncQueryValidator,
    SelectInput,
    useDispatch,
    TextInput,
    SearchInput
} from '@hrbolek/uoisfrontend-shared/src'

import { UserLink } from '../User/UserLink'
import { GroupLink } from './GroupLink'
import { useCallback, useState } from 'react'
import { GroupAsyncActions } from '../../Queries/_groups'
import { MembershipAsyncActions } from '../../Queries/_memberships'
import { UserAsyncActions } from '../../Queries/_users'


const AddUserDialog = ({onCreate}) => {
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
            <Dialog title="Výběr uživatele" onOk={onOk} onCancel={onCancel}>
                {/* <div className="form-floating">
                    <SelectInput FetchAsyncAction={FetchRoleTypesAsyncAction} id="select" value={data.roletype_id} onChange={onChange("roletype_id")} />
                    <label htmlFor={"select"}>Typ role</label>
                </div>                 */}
                <div className="form-floating">
                    <TextInput type={"date"} id={"startdate"} value={data.startdate} onChange={onChange("startdate")} />
                    <label htmlFor={"startdate"}>startdate</label>
                </div>
                <div className="form-floating">
                    <TextInput type={"date"} id={"enddate"} value={data.enddate} onChange={onChange("enddate")} />
                    <label htmlFor={"enddate"}>enddate</label>
                </div>
                <SearchInput title="Výběr uživatele" onSelect={onChange("user_id")} FetchByPatternAsyncAction={UserAsyncActions.search} />
            </Dialog>
        )
    } else {
        return (
            <button className='btn btn-success form-control' onClick={onOpen}>+</button>
        )
    }
}

const MembershipRow = ({index, membership, group}) => {
    const {user, startdate, enddate, valid} = membership
    const dispatch = useDispatch()
    const onClick = () => {
        dispatch(MembershipAsyncActions.update({...membership, valid: valid?false:true}))
        .then(() => {
            dispatch(GroupAsyncActions.read({id: group?.id}))
        })
    }
    if (user) {
        return (
            <tr>
                <td>{index}</td>
                <td><UserLink user={user} /></td>
                <td>{valid?"+":"-"}</td>
                <td>{startdate}</td>
                <td>{enddate}
                    <br />
                    {/* {JSON.stringify(membership)} */}
                </td>
                <td><DeleteButton onClick={onClick}>D</DeleteButton></td>
            </tr>
        )
    }
}

const validator = CreateAsyncQueryValidator({error: "Nepovedlo se přidat roli", success: "Přidání role se povedlo"})
export const GroupMembersEditCard = ({group, valid=true}) => {
    const membership = group?.memberships || []
    const filtered = (valid===null)?membership:membership.filter(m => m?.valid === valid)
    const mapped = filtered.map(m => m)

    const dispatch = useDispatch()

    const onCreate = (data) => {
        const [onResolve, onReject] = validator(dispatch)
        const fullRecord = {
            ...data, 
            group_id: group.id, 
            id: crypto.randomUUID(),
            startdate: data["startdate"] + "T00:00:00",
            enddate: data["enddate"] + "T00:00:00"
        }
        console.log("fullRecord", fullRecord)
        dispatch(
            MembershipAsyncActions.create(fullRecord)
        ).then(onResolve, onReject)
        .then(() => {
            dispatch(GroupAsyncActions.read({id: group.id}))
        })   
    }
    return (
        <CardCapsule title={<>Členové <GroupLink group={group} /></>}>
            <table className='table table-sm table-striped table-bordered'>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Člen</th>
                        <th>Počátek</th>
                        <th>Konec</th>
                        <th>Nástroje</th>
                    </tr>
                </thead>
                <tbody>
                    {mapped.map(
                        (m, i)  => <MembershipRow index={i+1} key={m?.id} group={group} membership={m} />
                    )}                    
                </tbody>
                <tfoot>
                    <tr>
                        <th colSpan={5}>
                            <AddUserDialog onCreate={onCreate} />
                        </th>
                    </tr>
                </tfoot>
            </table>
            

        </CardCapsule>

    )
}
