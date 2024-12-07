/* eslint-disable react/prop-types */
import { CardCapsule, useDispatch} from '@hrbolek/uoisfrontend-shared/src'
// import { Link as ProxyLink } from "react-router-dom";
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { GroupLink } from '../Group'
import { UserLink } from './UserLink'
import { ProxyLink } from '../ProxyLink'
import { UserAsyncActions } from '../../Queries/_users'
import { PersonFill } from 'react-bootstrap-icons'

const groupPriorityMap = {
    "cd49e152-610c-11ed-9f29-001a7dda7110": 1, //"name": "univerzita"
    "cd49e153-610c-11ed-bf19-001a7dda7110": 2, //"name": "fakulta"
    "cd49e154-610c-11ed-bdbf-001a7dda7110": 3, //"name": "ústav"
    "cd49e155-610c-11ed-bdbf-001a7dda7110": 4, //"name": "centrum"
    "cd49e155-610c-11ed-844e-001a7dda7110": 5, //"name": "katedra"
}
const getPriority = (typeid) => {
    const priority = groupPriorityMap[typeid]
    return priority?priority: 20
}

const Membership = ({membership, valid=true}) => {
    const filtered = (valid===null)?membership:membership.filter(
        g => g?.valid === valid
    )
    const mapped = filtered.map(
        m => m.group
    )
    const ordered = mapped.map(
        g => ({...g, order: getPriority(g?.grouptype?.id)})
    ).toSorted(
        (a,b) => a.order - b.order
    )
    return (
        <>
            {ordered.map(
                g => <Row key={g.id}>
                    <Col>{g?.grouptype?.name}</Col>
                    <Col><GroupLink group={g} /></Col>
                </Row>
            )}
        </>
    )
}

const UserGDPR = ({user}) => {
    const dispatch = useDispatch()
    const loadgdpr = () => {
        dispatch(UserAsyncActions.readgdpr(user))
    }
    return (
        <Row>
            <Col>grpd</Col>
            <Col>
                {user?.gdpr?user?.gdpr:<button className='btn btn-sm btn-outline-success' onClick={loadgdpr}>Ukázat</button>}
            </Col>
        </Row>
    )
}

export const UserRolesOn = ({user}) => {
    const rolesOn = user?.rolesOn || []
    const rolesOnValid = rolesOn.filter(role => role?.valid)
    return (
        <>
            {rolesOnValid.map(r => 
                (<Row key={r.id}>
                    <Col>{r?.roletype?.name}</Col>
                    <Col>
                        <ProxyLink to={"/ug/user/view/" + r?.user?.id}>{r?.user?.fullname}</ProxyLink>
                    </Col>
                </Row>)
            )}
        </>
    )

}

export const UserMediumBody = ({user}) => {
    return (
        <>
            
            <Row>
                <Col>Jméno</Col>
                <Col>{user?.name}</Col>
            </Row>
            <Row>
                <Col>Příjmení</Col>
                <Col>{user?.surname}</Col>
            </Row>
            <Row>
                <Col>
                    Email
                </Col>
                <Col>
                    <a href={"mailto:" + user?.email}>{user?.email}</a>
                </Col>
            </Row>
            <Row>
                <Col>
                    Telefon
                </Col>
                <Col>
                    <a href="tel:973211111">973 211 111</a>
                </Col>
            </Row>
            <UserGDPR user={user}/>
            {/* <Membership membership={user?.memberships||[]} /> */}

            <div className="py-3">
                <Membership membership={user?.memberships || []} />
            </div>
        </>
    )
}


export const UserUserRolesOnCard = ({user}) => {
    return (
        <CardCapsule  title={<><PersonFill /> <UserLink user={user } /></>}>
            <UserRolesOn user={user} />
        </CardCapsule>
    )
}

export const UserMediumCard = ({user}) => {
    return (
        <CardCapsule  title={<><PersonFill /> <UserLink user={user } /></>}>
            <UserMediumBody user={user} />

            {/* <Membership membership={user?.membership||[]} /> */}
        </CardCapsule>
    )
}
