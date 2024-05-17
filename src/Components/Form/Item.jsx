import { Col, Row } from 'react-bootstrap'
import { StudentItem } from './ItemCatalog/9bdb916a-afb6-11ed-9bd8-0242ac110002'
import { Tituly } from './ItemCatalog/36b53c34-a34f-43a3-9347-0128a5b9e1d9'
import { States } from './ItemCatalog/27be9340-bd57-4856-b830-0d80dbf06bdd'
import { Pojistovny } from './ItemCatalog/90f0bbbd-4743-4965-8cbb-9e66a72b9b67'


const itemregister = {
    "9bdb916a-afb6-11ed-9bd8-0242ac110002": StudentItem,
    "36b53c34-a34f-43a3-9347-0128a5b9e1d9": Tituly,
    "27be9340-bd57-4856-b830-0d80dbf06bdd": States,
    "90f0bbbd-4743-4965-8cbb-9e66a72b9b67": Pojistovny
}

export const Item = ({item, children}) => {
    const typeid = item?.type?.id || ""
    const Component = itemregister[typeid]
    if (Component) {
        return <Component item={item} />
    } else {
        return (
            <Row>
                <Col>
                    {item?.name}
                </Col>
                <Col>
                    {item?.value}
                </Col>
            </Row>
        )
    }
    
}
