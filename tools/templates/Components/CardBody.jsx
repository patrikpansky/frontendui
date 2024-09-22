import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export const {{Name name}}CardBody = ({ {{name name}}, children }) => {
    return (
        <>
        {{#each returnType.fields }}
            {{#if isScalar}}
            <Row>
                <Col><b>{{name name}}</b></Col><Col>{ {{name ../name}}?.{{name name}} }</Col>
            </Row>
            {{/if}}
        {{/each}}            
            {children}
        </>
    )
}

