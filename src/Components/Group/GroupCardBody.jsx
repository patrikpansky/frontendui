import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import { GroupLink } from './GroupLink'
import { UserLink } from '../User/UserLink'


const Roles = ({roles, valid=true}) => {
    const filtered = (valid===null)?roles:roles.filter(
        r => r?.valid === valid
    )
    return (
        <>
            {filtered.map(
                r => <Row key={r.id}>
                    <Col><b>{r?.roletype?.name}</b></Col>
                    <Col><UserLink user={r?.user} /></Col>
                </Row>
            )}
        </>
    )
}

export const GroupCardBody = ({ group, children }) => {
    return (
        <>
            {group?.mastergroup?
                <Row>
                    <Col><b>Nadřízený</b></Col>
                    <Col><GroupLink group={group?.mastergroup} /></Col>
                </Row>
            :""}            


            <Roles roles={group?.roles||[]} />

            <Row>
                <Col><b>Email</b></Col><Col>{ group?.email }</Col>
            </Row>
            <Row>
                <Col><b>Zkratka</b></Col><Col>{ group?.abbreviation }</Col>
            </Row>
            <Row>
                <Col><b>Platná</b></Col><Col>{ group?.valid }</Col>
            </Row>
            <Row>
                <Col><b>Typ</b></Col>
                <Col>{group?.grouptype?.name}</Col>
            </Row>

            {children}
        </>
    )
}

