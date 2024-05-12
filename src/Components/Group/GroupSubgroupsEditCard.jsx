/* eslint-disable react/prop-types */
import { CardCapsule, DeleteButton } from '@hrbolek/uoisfrontend-shared/src'

import { GroupMediumCard } from './GroupMediumCard'
import { GroupLink } from './GroupLink'


const GroupRow = ({index, group}) => {
    return (
        <tr>
            <td>{index}</td>
            <td><GroupLink group={group} /></td>
            <td><DeleteButton>D</DeleteButton></td>
        </tr>
    )
}

export const GroupSubgroupsEditCard = ({group, filterFunc=(g)=>g?.valid===true}) => {
    const subgroups = group?.subgroups || []
    const filtered = subgroups.filter(filterFunc)
    return (
        <CardCapsule title={<>Skupiny podřízené <GroupLink group={group} /></>}>
            <table className='table table-striped table-bordered'>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Skupina</th>
                        <th>Nástroje</th>
                    </tr>
                </thead>
                <tbody>
                    {filtered.map(
                        (g, i) => <GroupRow index={i+1} key={g.id} group={g} />
                    )}
                    <tr>
                        <td colSpan={3}><button className='btn btn-success form-control'>+</button></td>
                    </tr>
                </tbody>
            </table>
        </CardCapsule>

    )
}
