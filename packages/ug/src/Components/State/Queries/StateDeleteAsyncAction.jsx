import { createAsyncGraphQLAction } from "@hrbolek/uoisfrontend-gql-shared";

const StateDeleteMutation =
`
mutation StateDeleteMutation($id: UUID!, $lastchange: DateTime!) {
  result: stateDelete(
    state: {id: $id, lastchange: $lastchange}
  ) {
    ... on StateGQLModelDeleteError {
      failed
      msg
      input
      Entity {
        ...StateLarge
      }
    }
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
  statemachine {
    ...StateMachineLink
  }
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

export const StateDeleteAsyncAction = createAsyncGraphQLAction(StateDeleteMutation)