import {ListGroup} from 'react-bootstrap';
import {ProgramLink} from './ProgramLink';

export const ProgramList = ({programs}) => {
    return (
        <ListGroup>
            {programs.map((program) => (
                <ListGroup.Item key={program.id}>
                    <ProgramLink program={program} />
                </ListGroup.Item>
            ))}
        </ListGroup>
    );
}