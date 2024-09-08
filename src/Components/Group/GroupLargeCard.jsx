/* eslint-disable react/prop-types */
import { CardCapsule } from '@hrbolek/uoisfrontend-shared/src'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { GroupRawCard } from './GroupRawCard'
import { GroupMediumCard } from './GroupMediumCard'
import { GroupSubFaculty, GroupSubStudentsGroups, GroupSubUniversity, GroupSubgroupsCard } from './GroupSubgroupsCard'
import { GroupMembersCard } from './GroupMembersCard'
import { GroupLink } from './GroupLink'
import { ExternalIds } from '../EIDs/ExternalIds'
import { GroupProjects } from './GroupProjects'
import { GroupAnalysisLinksCard } from './GroupAnalysisCard'
import { GroupEventsCard } from './GroupEventsCard'
import { PeopleFill } from 'react-bootstrap-icons'

export const GroupLargeCard = ({group, children}) => {
    return (
        <CardCapsule title={<><PeopleFill /> <GroupLink group={group} /></>}>
        <Row>
            <Col md={3}>
                <GroupMediumCard group={group} />
                {/* <GroupSubgroupsCard group={group} /> */}
                <ExternalIds />
                <GroupSubUniversity group={group} />
                <GroupSubFaculty group={group} />
                <GroupSubStudentsGroups group={group} />
                
                <GroupProjects group={group} />
                <GroupAnalysisLinksCard group={group} />
            </Col>
            <Col md={6}>
                {/* <GroupEventsCard group={group} /> */}
                {children}
            </Col>
            <Col md={3}>
                <GroupMembersCard group={group} />
                
            </Col>
            
        </Row>
        <br />
        <Row>
            <Col>
                <GroupRawCard group={group}/>
            </Col>
        </Row>
    </CardCapsule>

    )
}
