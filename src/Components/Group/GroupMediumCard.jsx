/* eslint-disable react/prop-types */
import { CardCapsule } from '@hrbolek/uoisfrontend-shared/src'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import { GroupLink } from './GroupLink'
import { UserLink } from '../User/UserLink'
import { PeopleFill } from 'react-bootstrap-icons'


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

export const GroupMediumCard = ({group, children, label=<PeopleFill />}) => {
    return (
        <CardCapsule title={<>{label} <GroupLink group={group} /> {children}</>}>
            {group?.mastergroup?
                <Row>
                    <Col><b>Nadřízený</b></Col>
                    <Col><GroupLink group={group?.mastergroup} /></Col>
                </Row>
            :""}            

            <Row>
                <Col><b>Typ</b></Col>
                <Col>{group?.grouptype?.name}</Col>
            </Row>

            <Roles roles={group?.roles||[]} />
        </CardCapsule>

    )
}
