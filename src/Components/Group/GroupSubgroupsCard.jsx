/* eslint-disable react/prop-types */
import { CardCapsule } from '@hrbolek/uoisfrontend-shared/src'
import { useFreshItem } from "@hrbolek/uoisfrontend-shared/src"

import { GroupLink } from './GroupLink'
import { useMemo } from 'react'
import { GroupMediumCard } from './GroupMediumCard'
import { GroupAsyncActions } from '../../Queries/_groups'
import { GroupLinkDepartments } from './GroupLinkDepartments'
import { ArrowUpRightSquare, ArrowUpSquare, ArrowsAngleExpand } from 'react-bootstrap-icons'
import { ProxyLink } from '../ProxyLink'


const overridenPath = '/api/gql'

const globalFetchParams = {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    redirect: 'follow', // manual, *follow, error
}



const academic = [
    "cd49e153-610c-11ed-bf19-001a7dda7110",
    "cd49e155-610c-11ed-844e-001a7dda7110"
]
const filterFacultiesOrDepartments = (group) => {
    const grouptypeid = group?.grouptype?.id 
    return academic.includes(grouptypeid)  
}

export const filterValidSubFaculty = (group) => {
    const grouptypeid = group?.grouptype?.id 
    const valid = group?.valid || true
    return (grouptypeid === "cd49e155-610c-11ed-844e-001a7dda7110") && valid
    // return true
}

const filterValidStudentGroup = (group) => {
    const grouptypeid = group?.grouptype?.id 
    const valid = group?.valid || true
    return (grouptypeid === "cd49e157-610c-11ed-9312-001a7dda7110") && valid
    // return true
}

export const filterValidSubUniversity = (group) => {
    const grouptypeid = group?.grouptype?.id 
    const valid = group?.valid
    return (grouptypeid === "cd49e153-610c-11ed-bf19-001a7dda7110") && valid
}


export const GroupSubgroupsCard = ({group, filterFunc=(g)=>g?.valid===true, label="Skupiny podřízené", Component=GroupLink}) => {
    const subgroups = group?.subgroups || []
    const filtered = subgroups.filter(filterFunc)
    // console.log("filtered", subgroups)
    // console.log("filtered", subgroups)
    if (filtered.length > 0) {
        // const title = <>{label} <GroupLink group={group} /></>
        const title = (<>{label} <GroupLink group={group} /></>)
        return (
            <CardCapsule title={title}>
                {filtered.map(
                    g => <div key={g.id} ><Component group={g} /></div>
                )}
                {/* <GroupAnalysisCard group={group} /> */}
            </CardCapsule>
    
        )
    } else {
        return null
    }
    
}

export const GroupSubUniversity = ({group}) => 
    // <GroupSubgroupsCard group={group} filterFunc={filterValidSubUniversity} label="Fakulty (...)"/>
    <GroupSubgroupsCard group={group} filterFunc={filterValidSubUniversity} label={
        <>
            Fakulty (...) <ProxyLink to={"/ug/group/faculties/" + group.id}>
                <span className='btn btn-sm btn-outline-primary'>
                    
                    {/* <ArrowsAngleExpand/> */}
                    <ArrowUpRightSquare/>
                </span>
            </ProxyLink>
            
        </>}/>    
    

export const GroupSubFaculty = ({group}) =>
    <GroupSubgroupsCard group={group} filterFunc={filterValidSubFaculty} label={
        <>
            Katedry <ProxyLink to={"/ug/group/departments/" + group.id}>
                <span className='btn btn-sm btn-outline-primary'>
                    
                    {/* <ArrowsAngleExpand/> */}
                    <ArrowUpRightSquare/>
                </span>
            </ProxyLink>
             
        </>}/>
    

export const GroupSubStudentsGroups = ({group}) =>
    <GroupSubgroupsCard group={group} filterFunc={filterValidStudentGroup} label={<>Studijní skupiny</>}/>
    

// export const GroupSubgroupsDepartmentsCard = ({group}) => {
//     const [_group, groupPromise] = useFreshItem({id: group.id}, GroupAsyncActions.read)
//     // groupPromise.then(onResolve, onReject)
//     return (
//         <GroupSubgroupsCard group={group} filterFunc={filterValidSubFaculty} label='Katedry' Component={GroupMediumCard} />
//     )
// }
    