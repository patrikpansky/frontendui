import { createAsyncGraphQLAction } from "@hrbolek/uoisfrontend-gql-shared";

const StateReadQuery =
`
query StateReadQuery($id: UUID!) {
  result: stateById(id: $id) {
    ...StateLarge
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

export const StateReadAsyncAction = createAsyncGraphQLAction(StateReadQuery)