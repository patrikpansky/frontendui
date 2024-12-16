import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import { createAsyncGraphQLAction, processVectorAttributeFromGraphQLResult, updateItemsFromGraphQLResult, useFreshItem } from "@hrbolek/uoisfrontend-gql-shared"
import { LazyRender } from "@hrbolek/uoisfrontend-shared"
import { GroupMediumCard } from "../GroupMediumCard"

const GroupSubgroupsQueryRead =
`
query GroupQueryRead($id: UUID!) {
  result: groupById(id: $id) {
    __typename
    id
    subgroups(limit: 100, where: {valid: {_eq: true}}) {
        __typename
        id
        name
        type {
          id
          name
        }
    }
  }
}
`

const GroupSubgroupsQueryAsyncAction = createAsyncGraphQLAction(
    GroupSubgroupsQueryRead,
    processVectorAttributeFromGraphQLResult("subgroups"),
    updateItemsFromGraphQLResult
)

export const GroupSubgroupsContent = ({group, Visualiser}) => {
    const [updatedGroup] = useFreshItem(group, GroupSubgroupsQueryAsyncAction)
    const subgroups = updatedGroup?.subgroups || []
    return (
        <Row>
            {subgroups.map(
                group => <Col key={group?.id}>
                    <Visualiser group={group} />
                </Col>
            )}
        </Row>
    )
}

export const GroupSubgroups = ({group, Visualiser=GroupMediumCard}) => {
    return (
        <LazyRender>
            <GroupSubgroupsContent group={group} Visualiser={Visualiser} />
        </LazyRender>
    )
}