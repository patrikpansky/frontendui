import { 
    ProxyLink, 
    SearchInput, 
    CreateAsyncQueryValidator,
    TextInput
} from '@hrbolek/uoisfrontend-shared/src'

import { useState } from "react"
import { ArrowsExpand } from "react-bootstrap-icons"
import Table from "react-bootstrap/Table"
import { useDispatch, useSelector } from "react-redux"
import { PlanAddLessonButton } from "./PlanAddLessonButton"
import { LessonAddRemoveTeacherButton } from "./LessonAddRemoveTeacherButton"
import { FetchSearchUserAsyncAction } from '../../Queries/FetchSearchUserAsyncAction'
import { FetchSearchGroupAsyncAction } from '../../Queries/FetchSearchGroupAsyncAction'
import { FetchSearchFacilityAsyncAction } from '../../Queries/FetchSearchFacilityAsyncAction'
import { UpdateLessonAsyncAction } from '../../Queries/UpdateLessonAsyncAction'
import { LessonTypeSelect } from './LessonTypeSelect'
import { LessonAddRemoveGroupButton } from './LessonAddRemoveGroupButton'
import { LessonAddRemoveFacilityButton } from './LessonAddRemoveFacilityButton'
import { LessonOrderLess } from './LessonOrderLess'
import { LessonOrderMore } from './LessonOrderMore'
import { LessonDeleteButton } from './LessonDeleteButton'
import { PlanAddLessonsFromAccreditationButton } from './PlanAddLessonsFromAccreditationButton'

export const UserButton = ({user}) => <ProxyLink to={"/ug/user/view/" + user.id}>{user?.fullname}</ProxyLink>
export const GroupButton = ({group}) => <ProxyLink to={"/ug/group/view/" + group.id}>{group?.name}</ProxyLink>
export const FacilityButton = ({facility}) => <ProxyLink to={"/facilities/facility/view/" + facility.id}>{facility?.name}</ProxyLink>

export const PlanPivotEditableTableHead = ({plan, users, groups, facilities, onSelectUser, onSelectGroup, onSelectFacility}) => {
    const items = useSelector(state => state.items)
    const onSelectUser_ = (id) => {
        const user = items[id] || {id, fullname: "Nenalezen"}
        onSelectUser(user)
    }
    const onSelectGroup_ = (id) => {
        const group = items[id] || {id, name: "Nenalezena"}
        onSelectGroup(group)
    }
    const onSelectFacility_ = (id) => {
        const facility = items[id] || {id, name: "Nenalezena"}
        onSelectGroup(facility)
    }
    const stickyStyle = {top: 0, position: "sticky", zIndex: 100}
    return (
        <thead>
            <tr>
                <th colSpan={5} className="table-success" style={stickyStyle}>
                    <h3>
                        {plan?.semester?.subject?.name}
                        &nbsp;{plan?.semester?.order}{". semestr"}
                    </h3>
                </th>
                {/* <th  style={stickyStyle}></th>
                <th  style={stickyStyle}></th>
                <th  style={stickyStyle}></th>
                <th  style={stickyStyle}></th> */}

                <th  style={stickyStyle}></th>
                <th className="table-warning" style={stickyStyle}></th>
                <th colSpan={users.length} style={stickyStyle}>
                    {/* <UserSearch onSelect={onSelectUser}/> */}
                    <SearchInput label="Vyhledávání učitele" skip={0} limit={10} onSelect={onSelectUser_} FetchByPatternAsyncAction={FetchSearchUserAsyncAction} />

                </th>
                <th className="table-warning" style={stickyStyle}></th>
                <th colSpan={groups.length} style={stickyStyle}>
                    {/* <GroupSearch onSelect={onSelectGroup}/> */}
                    <SearchInput label="Vyhledávání skupiny" skip={0} limit={10} onSelect={onSelectGroup_} FetchByPatternAsyncAction={FetchSearchGroupAsyncAction} />
                </th>
                <th className="table-warning" style={stickyStyle}></th>
                <th colSpan={facilities.length} style={stickyStyle}>
                    {/* <FacilitySearch onSelect={onSelectFacility}/> */}
                    <SearchInput label="Vyhledávání místnosti" skip={0} limit={10} onSelect={onSelectFacility_} FetchByPatternAsyncAction={FetchSearchFacilityAsyncAction} />
                </th>
                <th style={stickyStyle}></th>
            </tr>

            <tr>
                <th colSpan={5} className="table-light">
                    <PlanAddLessonButton plan={plan} />
                    <hr />
                    <PlanAddLessonsFromAccreditationButton plan={plan} />
                </th>
                
                <th></th>
                <th className="table-warning"></th>
                {users.map(
                    user => <th key={user.id} style={{"writingMode": "vertical-rl", "textOrientation": "mixed"}}>
                        <UserButton user={user} />
                    </th>
                )}
                <th className="table-warning"></th>
                {groups.map(
                    group => <th key={group.id} style={{"writingMode": "vertical-rl", "textOrientation": "mixed"}}>
                        <GroupButton group={group} />
                    </th>
                )}
                <th className="table-warning"></th>
                {facilities.map(
                    facility => <th key={facility.id} style={{"writingMode": "vertical-rl", "textOrientation": "mixed"}}>
                        <FacilityButton facility={facility} />
                    </th>
                )}
                <th>Termín</th>
            </tr>
        </thead>
    )
}

/**
 * 
 * @param {Array} a array which going trought 
 * @param {Function} f returns [key, value] for a particular array item
 * @returns dictionary of arrays which represent subarrays of parameter a splitted by keys
 */
const pivotmap = (a, f) => {
    let result = {}
    a.forEach(
        i => {
            let [key, value] = f(i)
            if (key in result) {
                result[key].push(value)
            } else {
                result[key] = [value]
            }            
        }
    )
    return result
}
/**
 * 
 * @param {Array} a array which going trought
 * @param {Function} f returns [key, value] for a particular array item
 * @returns dictionary of values
 */
const keyedmap = (a, f) => {
    let result = {}
    a.forEach(
        i => {
            let [key, value] = f(i)
            result[key] = value
        }
    )
    return result
}

export const UsersSegment = ({plan, lesson, users}) => {
    return (
        <>
            {users.map(
                user => <td key={user.id}>
                    <LessonAddRemoveTeacherButton plan={plan} lesson={lesson} user={user} />
                </td>
            )}
        </>
    )
}

export const GroupsSegment = ({plan, lesson, groups}) => {
    return (
        <>
            {groups.map(
                    group => <td key={group.id}>
                        {/* {groupIndex[group.id]?"t":"f"} */}                       
                        <LessonAddRemoveGroupButton plan={plan} lesson={lesson} group={group} />
                    </td>
                )}
        </>
    )
}

export const FacilitiesSegment = ({plan, lesson, facilitites}) => {
    return (
        <>
            {facilitites.map(
                    facility => <td key={facility.id}>
                        <LessonAddRemoveFacilityButton plan={plan} lesson={lesson} facility={facility} />
                    </td>
                )}
        </>
    )
}

const validatorPlanPivotEditableTableRow = CreateAsyncQueryValidator({error: "Nepodařilo se změnit lekci", success: "Lekce změněna úspěšně"})
export const PlanPivotEditableTableRow = ({plan, lesson, users, groups, facilities}) => {
    const dispatch = useDispatch()
    const onChange_ = (attributename) => (value) => {
        const newLesson = {...lesson}
        if (attributename === "length") {
            newLesson[attributename] = Number(value)
        } else {
            newLesson[attributename] = value
        }
        

        const [onResolve, onReject] = validatorPlanPivotEditableTableRow(dispatch)
        dispatch(UpdateLessonAsyncAction(newLesson))
        .then(onResolve, onReject)
    }
    return (
        <tr>
            <td style={{left: 0, position: "sticky"}}>
                <div className="input-group input-group-sm ">
                    <span className="input-group-text" id="basic-addon1">{lesson?.order}{". "}</span>
                    <TextInput id={""} value={lesson.name} onChange={onChange_("name")} />
                </div>
            </td>
            <td className="mr-0 pr-0">
                <LessonOrderLess lesson={lesson} plan={plan} />
                <LessonOrderMore lesson={lesson} plan={plan} />
                {/* {"."} */}
            </td>
            <td>
                <span className="btn btn-sm btn-outline-success"><ArrowsExpand /></span>
                <LessonDeleteButton lesson={lesson} plan={plan} />
            </td>
            <td>
                <LessonTypeSelect lesson={lesson} plan={plan} onChange={onChange_("lessontype_id")}/> 
                {/* {lesson?.type?.name} */}
                

            </td>
            <td>
                {/* {lesson?.length} */}
                <TextInput size={2} type="number" id={""} value={lesson?.length || 0} onChange={onChange_("length")} />

            </td>
            <td></td>
            <td className="table-warning"></td>
            <UsersSegment plan={plan} lesson={lesson} users={users} />
            <td className="table-warning"></td>
            <GroupsSegment plan={plan} lesson={lesson} groups={groups} />
            <td className="table-warning"></td>
            <FacilitiesSegment plan={plan} lesson={lesson} facilitites={facilities} />
            <td></td>
        </tr>
    )
}

const setandreturn = (acc, id, value) => {
    // console.log("setandreturn", acc, id, value)
    const cvalue = value? value: 0
    acc[id] = id in acc? acc[id] + cvalue: cvalue
    return acc
}


const Sum = ({lessons, userid=null, lessontypename=null, groupid=null, facilityid=null}) => {
    let value = lessons
    if (userid) {
        value = value
            .filter(lesson => lesson?.users?.find(u => u.id === userid))
        // console.log("sum.u", value)
    }        
    if (groupid) {
        value = value
            .filter(lesson => lesson?.groups?.find(g => g.id === groupid))
    }        
    if (facilityid) {
        value = value
            .filter(lesson => lesson?.facilities?.find(f => f.id === facilityid))
    }        
    if (lessontypename) {
        value = value
            .filter(lesson => lesson?.type?.name === lessontypename)
        // console.log("sum.l", lessontypename, value)
    }
    value = value    
        .map(item => item.length? item.length: 0)
        .reduce((acc, value) => acc + value, 0)

    return (
        <>{value}</>
    )        
}

export const PlanPivotEditableTableLessonSumRow = ({lessons, users, lessontypename=null, groups, facilities}) => {  
    let lessons_ = lessons
    if (lessontypename) {
        lessons_ = lessons_
            .filter(lesson => lesson?.type?.name === lessontypename)
    }
        
    return (
        <tr>
            <td colSpan={3}></td>
            <td>{lessontypename}</td>
            <td><Sum lessons={lessons_}/></td>
            <td></td>
            <td className="table-warning"></td>
            {users.map(
                u => <td key={u.id}><Sum lessons={lessons_} userid={u.id} /></td>
            )}
            <td className="table-warning"></td>
            {groups.map(
                g => <td key={g.id}><Sum lessons={lessons_} groupid={g.id} /></td>
            )}
            <td className="table-warning"></td>
            {facilities.map(
                f => <td key={f.id}><Sum lessons={lessons_} facilityid={f.id} /></td>
            )}
            <td></td>
        </tr>
    )
}


export const PlanPivotEditableTableSumRows = ({lessons, users, groups, facilities}) => {  
    const lessonTypes = lessons
        .map(lesson => [lesson?.type?.name, lesson?.length]) 
        .reduce((acc, [typeid, length]) => setandreturn(acc, typeid, length), {})

    console.log("lessonTypes", lessonTypes)
    return (
        <>
            {Object.entries(lessonTypes).map(
                ([name, value]) => <PlanPivotEditableTableLessonSumRow key={name} lessons={lessons} lessontypename={name} users={users} groups={groups} facilities={facilities}/>
            )}
            <PlanPivotEditableTableLessonSumRow key={"total"} lessons={lessons} users={users} groups={groups} facilities={facilities}/>
        </>
    )

}
export const PlanPivotEditableTableFoot = ({plan, users, groups, facilities}) => {   
    return (
        <tfoot>
        <tr>           
            <td colSpan={6} >
            </td>
            
            <td className="table-warning"></td>
            {users.map(
                u => <td key={u.id}></td>
            )}
            <td className="table-warning"></td>
            {groups.map(
                g => <td key={g.id}></td>
            )}
            <td className="table-warning"></td>
            {facilities.map(
                f => <td key={f.id}></td>
            )}
            <td></td>
        </tr>
        <PlanPivotEditableTableSumRows lessons={plan.lessons} users={users} groups={groups} facilities={facilities} />
        </tfoot>
    )
}

const makeUnique = (a) => {
    const result = {}
    a.forEach(i => {
        const id = i.id
        if (!(id in result)) {
            result[id] = i
        }
    })
    return Object.values(result)
}

export const PlanPivotEditableTable = ({plan}) => {
    console.log("PlanPivotEditableTable.plan", plan)
    let lessons = plan?.lessons || []
    lessons = [...lessons]
    // lessons.sort((a, b) => (a?.order||0) - (b?.order||0))
    lessons.sort((a, b) => (a?.order) - (b?.order))

    const users = makeUnique(lessons.flatMap(
        lesson => lesson?.users || []
    ))
    const groups = makeUnique(lessons.flatMap(
        lesson => lesson?.groups || []
    ))
    const facilities = makeUnique(lessons.flatMap(
        lesson => lesson?.facilities || []
    ))
    const [_users, setUsers] = useState(users)
    const [_groups, setGroups] = useState(groups)
    const [_facilities, setFacilities] = useState(facilities)

    const onSelectUser = (user) => {
        if (_users.find(u => u.id === user.id)) {

        } else {
            setUsers([..._users, user])
        }
    }
    const onSelectGroup = (group) => {
        if (_groups.find(g => g.id === group.id)) {

        } else {
            setGroups([..._groups, group])
        }
    }
    const onSelectFacility = (facility) => {
        if (_facilities.find(f => f.id === facility.id)) {

        } else {
            setFacilities([..._facilities, facility])
        }
    }

    // console.log(users)

    const dynamicCols = _users.length + _groups.length + _facilities.length
    let tableStyle = {}
    if (dynamicCols > 15) {

        tableStyle = {maxWidth: null, tableLayout: "auto", overflow: "visible", width: 100 + (dynamicCols - 15) * 3 + "%"}
    }

    return (
        // <Table striped hover bordered responsive>
        <Table size="sm" striped hover bordered responsive style={tableStyle}>
            <PlanPivotEditableTableHead 
                plan={plan} users={_users} groups={_groups} facilities={_facilities} 
                onSelectUser={onSelectUser}
                onSelectGroup={onSelectGroup}
                onSelectFacility={onSelectFacility}
            />
            <tbody>
                {lessons.map(
                    lesson => <PlanPivotEditableTableRow key={lesson.id} plan={plan} lesson={lesson} users={_users} groups={_groups} facilities={_facilities} />
                )}
            </tbody>
            <PlanPivotEditableTableFoot plan={plan} users={_users} groups={_groups} facilities={_facilities} />
        </Table>
    )
}