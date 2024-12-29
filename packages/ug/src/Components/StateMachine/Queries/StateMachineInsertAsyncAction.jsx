import { createAsyncGraphQLAction } from "@hrbolek/uoisfrontend-gql-shared";

const StateMachineInsertMutation =
`
mutation StateMachineInsertMutation($id: UUID, $name: String, $name_en: String) {
  result: statemachineInsert(
    statemachine: {id: $id, name: $name, nameEn: $name_en}
  ) {
    ... on InsertError {
      failed
      msg
      input
    }
    ...StateMachineLarge
  }
}

fragment StateMachineLarge on StateMachineGQLModel {
  ...StateMachineLink
  states {
    ...StateLarge
  }
  transitions {
    ...StateTransition
  }
}

fragment StateMachineLink on StateMachineGQLModel {
  __typename
  id
  lastchange
  name
  nameEn  
}

fragment StateLarge  on StateGQLModel {
  ...StateLink
  targets {
    ...StateTransition
  }
  sources {
    ...StateTransition
  }
}

fragment StateLink on StateGQLModel {
    __typename
  id
  lastchange
  name
  nameEn
}

fragment StateTransition on StateTransitionGQLModel {
    __typename
  id
  lastchange
  name
  nameEn
	source { ...StateLink}
  target { ...StateLink}
}

`

export const StateMachineInsertAsyncAction = createAsyncGraphQLAction(StateMachineInsertMutation)