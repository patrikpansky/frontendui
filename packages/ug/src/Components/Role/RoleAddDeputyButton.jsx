import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { useDispatch } from 'react-redux';
import { useState } from 'react'

import { Dialog, LeftColumn } from '@hrbolek/uoisfrontend-shared'
import { GroupLink } from '../Group'
import { UserLink } from '../User'
import { createAsyncGraphQLAction, CreateAsyncQueryValidator2, hookGraphQLResult, ItemActions } from '@hrbolek/uoisfrontend-gql-shared'
import { UserInputSearch } from '../User/UserInputSearch';

const RoleInsertQuery = 
`
mutation roleInsert($id: UUID, $user_id: UUID!, $group_id: UUID!, $roletype_id: UUID!) {
  
  result: roleInsert(role: {id: $id, userId: $user_id, groupId: $group_id, roletypeId: $roletype_id}) {
    __typename
    ...on InsertError {
      failed
      msg
    }
    ...on RoleGQLModel {
      id
      lastchange
      startdate
      enddate
      deputy
      user {
        id
        fullname
      }
      group {
        id
        name
      }
      roletype {
        id
        name
      }
    }
  }
}
`

const RoleInsertAsyncAction = createAsyncGraphQLAction(
    RoleInsertQuery,
    (jsonResult) => (dispatch, /* getState */) => next => {
        const role = jsonResult?.data?.result
        if (role?.__typename !== "RoleGQLModel") return next(jsonResult)
        const {user, group} = role
        const updatedUser = {...user, roles: [role]}
        const updatedGroup = {...group, roles: [role]}
        dispatch(ItemActions.item_updateAttributeVector({item: updatedUser, vectorname: "roles"}))
        dispatch(ItemActions.item_updateAttributeVector({item: updatedGroup, vectorname: "roles"}))
        return next(jsonResult)
    }
)

const RoleInsertAsyncActionValidator = CreateAsyncQueryValidator2({error: "Nepovedlo se nastavit zástup", success: "Zástup nastaven"});

const RoleAddDeputyDialog = ({role, onClose=(()=>null)}) => {
    const title = <>
        Přidat zástup za <UserLink user={role?.user}/> ({role?.roletype?.name}) @<GroupLink group={role?.group}/>  </>
    const now = new Date()
    const fourteenDaysAhead = new Date();
    fourteenDaysAhead.setDate(now.getDate() + 14); // Add 14 days
    const dispatch = useDispatch()
    const [state, setState] = useState({
        now: now,
        id: crypto.randomUUID(),
        startdate: new Date().toISOString().substring(0, 19),
        enddate: fourteenDaysAhead.toISOString().substring(0, 19),
        roletype_id: role?.roletype?.id,
        user_id: role?.user?.id,
        group_id: role?.group?.id,
        userSelector: true
        // startdate: new Date().toISOString(),
        // enddate: fourteenDaysAhead.toISOString(),
        // startdate: new Date(),
        // enddate: fourteenDaysAhead,
    })
    const setIt = (name) => (e) => setState(prev => ({...prev, [name]: e.target.value}))
    const setEnd = (days) => () => {
        const value = new Date()
        value.setDate(value.getDate() + days)
        value.setHours(23)
        value.setMinutes(59)
        setState(prev => ({...prev, enddate: value.toISOString().substring(0, 19)}))
        // setIt("enddate")(value.toISOString().substring(0, 19))
    }

    const _onClose = () => onClose()
    const _okOk = () => {
        _onClose()
        RoleInsertAsyncActionValidator(dispatch(RoleInsertAsyncAction(state)))
    }
    const onUserSelect = (user) => {
        setState(prev => ({...prev, user_id: user.id, user, userSelector: false}))
    }
    const onShowSelector = () => {
        setState(prev => ({...prev, userSelector: true}))
    }
    return (
        // <Dialog title='Přidat zástup'>
        <Dialog title={title} onOk={_okOk} onCancel={_onClose}>
            {/* <Row>
                <LeftColumn>Kde</LeftColumn>
                <Col><GroupLink group={role?.group}/></Col>
            </Row>
            <Row>
                <LeftColumn>Koho</LeftColumn>
                <Col><UserLink user={role?.user}/></Col>
            </Row>
            <Row>
                <LeftColumn>Role</LeftColumn>
                <Col>{role?.roletype?.name}</Col>
            </Row> */}
            <Row>
                <LeftColumn>Zastupující</LeftColumn>
                <Col>
                    {state.userSelector?(<>
                            <UserInputSearch onSelect={onUserSelect} />              
                                          
                        </>):(<>
                            <span className='btn btn-sm btn-outline-primary'>
                                <UserLink user={state.user} />
                            </span>
                            <span className="btn btn-sm btn-outline-success" onClick={onShowSelector}>Vyhledat</span>
                            <hr />
                        </>)}
                </Col>                
            </Row>
            <Row>
                <LeftColumn>Počátek zástupu</LeftColumn>
                <Col>
                    <input type={"datetime-local"} className='form-control' onChange={setIt("startdate")} value={state.startdate}/>
                </Col>                
            </Row>
            <Row>
                <LeftColumn>Konec zástupu</LeftColumn>
                <Col>
                    <input type={"datetime-local"} className='form-control' onChange={setIt("enddate")} value={state.enddate}/>
                </Col>
            </Row>
            <Row>
                <LeftColumn></LeftColumn>
                <Col>
                    <hr />
                </Col>
            </Row>
            <Row>
                <LeftColumn>
                    Nastavit dobu zástupu
                </LeftColumn>
                <Col>
                    <button className='btn btn-outline-success form-control' onClick={setEnd(1)}>1 den</button>
                </Col>
                <Col>
                    <button className='btn btn-outline-success form-control' onClick={setEnd(3)}>3 dny</button>
                </Col>
                <Col>
                    <button className='btn btn-outline-success form-control' onClick={setEnd(7)}>7 dní</button>
                </Col>
                <Col>
                    <button className='btn btn-outline-success form-control' onClick={setEnd(14)}>14 dní</button>
                </Col>
            </Row>
        </Dialog>
    )
}


export const RoleAddDeputyButton = ({role}) => {
    const [visible, setVisible] = useState(false)
    return (
        <Row>
            <Col>
                {!role?.user && "Chybí informace o uživateli!"}
                {role?.user?.isThisMe && <button className='btn btn-outline-success form-control' onClick={()=>setVisible((prev)=>!prev)}>Určit zástup</button>}
                {visible&&<RoleAddDeputyDialog role={role} onClose={()=>setVisible(false)}/>}
            </Col>
        </Row>
    )
}