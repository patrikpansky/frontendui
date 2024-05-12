/* eslint-disable react/prop-types */
import { CardCapsule, DeleteButton } from '@hrbolek/uoisfrontend-shared/src'
import { UserLink } from '../User/UserLink'
import { GroupLink } from './GroupLink'


const UserShort = ({user}) => {
    if (user) {
        return (
            <>
                <UserLink user={user} /> <br/>
            </>
        )
    } else {
        return null
    }

}

const MembershipRow = ({index, membership}) => {
    const {user, startdate, enddate, valid} = membership
    if (user) {
        return (
            <tr>
                <td>{index}</td>
                <td><UserLink user={user} /></td>
                <td>{startdate}</td>
                <td>{enddate}</td>
                <td><DeleteButton>D</DeleteButton></td>
            </tr>
        )
    }
}

export const GroupMembersEditCard = ({group, valid=true}) => {
    const membership = group?.memberships || []
    const filtered = (valid===null)?membership:membership.filter(m => m?.valid === valid)
    const mapped = filtered.map(m => m)
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
                        (m, i)  => <MembershipRow index={i} key={m?.id} membership={m} />
                    )}                    
                </tbody>
                <tfoot>
                    <tr>
                        <th colSpan={5}><button className='btn btn-success form-control'>+</button></th>
                    </tr>
                </tfoot>
            </table>
            

        </CardCapsule>

    )
}
