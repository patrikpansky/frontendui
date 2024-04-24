/* eslint-disable react/prop-types */
import { CardCapsule } from '@hrbolek/uoisfrontend-shared/src'
import { UserLink } from '../User/UserLink'
import { GroupLink } from './GroupLink'


const UserShort = ({user}) => {
    return (
        <>
            <UserLink user={user} /> <br/>
        </>
    )
}

export const GroupMembersCard = ({group, valid=true}) => {
    const membership = group?.memberships || []
    const filtered = (valid===null)?membership:membership.filter(m => m?.valid === valid)
    const mapped = filtered.map(m => m?.user)
    return (
        <CardCapsule title={<>Členové <GroupLink group={group} /></>}>
            {mapped.map(
                u => <UserShort key={u.id} user={u} />
            )}
            <br />
            <svg width="100" height="100">
  <circle cx="50" cy="50" r="40"
  stroke="green" stroke-width="4" fill="yellow" />
Sorry, your browser does not support inline SVG.
</svg>
            <br />
            <table className="table">
                <thead>
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">First</th>
                    <th scope="col">Last</th>
                    <th scope="col">Handle</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    </tr>
                    <tr>
                    <th scope="row">2</th>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                    </tr>
                    <tr>
                    <th scope="row">3</th>
                    <td colSpan="2">Larry the Bird</td>
                    <td>@twitter</td>
                    </tr>
                </tbody>
                </table>
        </CardCapsule>

    )
}
