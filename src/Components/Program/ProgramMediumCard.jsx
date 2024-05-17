import { CardCapsule } from '@hrbolek/uoisfrontend-shared/src'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { ProgramLink } from './ProgramLink'


export const ProgramMediumCard = ({program}) => {
    const startdate = new Date(program?.startdate)
    const enddate = new Date(program?.enddate)
    return (
        <CardCapsule  title={<>Program <ProgramLink program={program} /></>}>
            <Row>
                <Col >
                    Název
                </Col>           
                <Col >
                    <ProgramLink program={program} />
                </Col>           
            </Row>
            <Row>
                <Col >
                    Typ
                </Col>           
                <Col >
                    {program?.type?.name}
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
                    {program?.licencedGroup?.name}
                </Col>           
            </Row>
            <Row>
                <Col >
                    Garanti
                </Col>           
                <Col >
                    {program?.grantsGroup?.name}
                </Col>           
            </Row>
        </CardCapsule>

    )
}
