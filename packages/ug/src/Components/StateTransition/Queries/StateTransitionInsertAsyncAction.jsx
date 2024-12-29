import { createAsyncGraphQLAction } from "@hrbolek/uoisfrontend-gql-shared";

const StateTransitionInsertMutation =
`
mutation StateTransitionInsertMutation($id: UUID, $name: String, $name_en: String) {
  result: statetransitionInsert(
    statetransition: {id: $id, name: $name, nameEn: $name_en}
  ) {
    ... on InsertError {
      failed
      msg
      input
    }
    ...StateTransitionLarge
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

export const StateTransitionInsertAsyncAction = createAsyncGraphQLAction(StateTransitionInsertMutation)