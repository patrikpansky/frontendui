import { CardCapsule } from '@hrbolek/uoisfrontend-shared/src'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


export const ProjectMediumCard = ({project}) => {
    const startdate = new Date(project?.startdate)
    const enddate = new Date(project?.enddate)
    return (
        <CardCapsule  title={<>Projekt {project?.name }</>}>
            <Row>
                <Col >
                    Název
                </Col>           
                <Col >
                    {project?.name}
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
                    Součást
                </Col>           
                <Col >
                    {project?.group?.name}
                </Col>           
            </Row>
            <Row>
                <Col >
                    Řešitelé
                </Col>           
                <Col >
                    {project?.team?.name}
                </Col>           
            </Row>
        </CardCapsule>

    )
}
