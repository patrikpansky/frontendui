import { CardCapsule } from '@hrbolek/uoisfrontend-shared/src'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { ProgramLink } from './ProgramLink'
import { SubjectLink } from './SubjectLink'


export const SubjectMediumCard = ({subject}) => {
    const startdate = new Date(subject?.startdate)
    const enddate = new Date(subject?.enddate)
    return (
        <CardCapsule  title={<>Subject <SubjectLink subject={subject} /></>}>
            <Row>
                <Col >
                    Program
                </Col>           
                <Col >
                    <ProgramLink program={subject?.program} />
                </Col>           
            </Row>
            <Row>
                <Col >
                    Název
                </Col>           
                <Col >
                    {subject?.name}
                </Col>           
            </Row>
            <Row>
                <Col >
                    Typ
                </Col>           
                <Col >
                    {subject?.type?.name}
                </Col>           
            </Row>
            <Row>
                <Col >
                    Od
                </Col>           
                <Col >
                    {startdate.toLocaleDateString()}
                </Col>           
            </Row>
            <Row>
                <Col >
                    Od
                </Col>           
                <Col >
                    {enddate.toLocaleDateString()}
                </Col>           
            </Row>
            <Row>
                <Col >
                    Uskutečňovatel
                </Col>           
                <Col >
                    {subject?.licencedGroup?.name}
                </Col>           
            </Row>
            <Row>
                <Col >
                    Garanti
                </Col>           
                <Col >
                    {subject?.grantsGroup?.name}
                </Col>           
            </Row>
        </CardCapsule>

    )
}
