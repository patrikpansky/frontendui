import { createAsyncGraphQLAction } from "@hrbolek/uoisfrontend-gql-shared";

const StateTransitionDeleteMutation =
`
mutation StateTransitionDeleteMutation($id: UUID!, $lastchange: DateTime!) {
  result: statetransitionDelete(
    statetransition: {id: $id, lastchange: $lastchange}
  ) {
    ... on StateTransitionGQLModelDeleteError {
      failed
      msg
      input
      Entity {
        ...StateTransitionLarge
      }
    }
  }
}


fragment StateTransitionLarge on StateTransitionGQLModel {
  ...StateTransition
  statemachine {
    ...StateMachineLink
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

export const StateTransitionDeleteAsyncAction = createAsyncGraphQLAction(StateTransitionDeleteMutation)