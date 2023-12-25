/* eslint-disable react/prop-types */
import Card from "react-bootstrap/Card";

export const CardCapsule = ({title="", children=null}) => 
    <Card>
        <Card.Header>
            <Card.Title>
                {title}
            </Card.Title>
        </Card.Header>
        <Card.Body>
            {children}
        </Card.Body>
    </Card>