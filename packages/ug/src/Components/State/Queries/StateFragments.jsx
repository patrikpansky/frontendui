import { createQueryStrLazy } from "@hrbolek/uoisfrontend-gql-shared"
import { StateLargeFragment } from "../../StateMachine"

export * from "../../StateMachine"


export const StateReadQuery = createQueryStrLazy(
`
query StateReadQuery($id: UUID!) {
  result: stateById(id: $id) {
    ...StateLarge
  }
}
  `, StateLargeFragment)
