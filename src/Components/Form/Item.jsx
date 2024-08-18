import { Col, Row } from 'react-bootstrap'
import { StudentItem } from './ItemCatalog/9bdb916a-afb6-11ed-9bd8-0242ac110002'
import { Tituly } from './ItemCatalog/36b53c34-a34f-43a3-9347-0128a5b9e1d9'
import { States } from './ItemCatalog/27be9340-bd57-4856-b830-0d80dbf06bdd'
import { Pojistovny } from './ItemCatalog/90f0bbbd-4743-4965-8cbb-9e66a72b9b67'

import { Obsah } from './ItemCatalog/9bdb9426-afb6-11ed-9bd8-0242ac110002'
import { Doporuceni } from "./ItemCatalog/9bdb9476-afb6-11ed-9bd8-0242ac110002"

const itemViewRegister = {
    "9bdb916a-afb6-11ed-9bd8-0242ac110002": StudentItem,
    "36b53c34-a34f-43a3-9347-0128a5b9e1d9": Tituly,
    "27be9340-bd57-4856-b830-0d80dbf06bdd": States,
    "90f0bbbd-4743-4965-8cbb-9e66a72b9b67": Pojistovny,
    "9bdb9426-afb6-11ed-9bd8-0242ac110002": Obsah,
    "9bdb9476-afb6-11ed-9bd8-0242ac110002": Doporuceni,
}

const itemEditRegister = {
    "9bdb916a-afb6-11ed-9bd8-0242ac110002": StudentItem,
    "36b53c34-a34f-43a3-9347-0128a5b9e1d9": Tituly,
    "27be9340-bd57-4856-b830-0d80dbf06bdd": States,
    "90f0bbbd-4743-4965-8cbb-9e66a72b9b67": Pojistovny,
    "9bdb9426-afb6-11ed-9bd8-0242ac110002": Obsah,
    "9bdb9476-afb6-11ed-9bd8-0242ac110002": Doporuceni,
}

export const Item = ({item, children, mode="view"}) => {
    const typeid = item?.type?.id || ""
    let Component = itemEditRegister[typeid]
    if (mode === "view") {
        Component = itemViewRegister[typeid]
    }
    if (Component) {
        return <Component item={item} mode={mode}/>
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
