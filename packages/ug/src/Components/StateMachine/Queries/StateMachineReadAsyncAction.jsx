import { createAsyncGraphQLAction } from "@hrbolek/uoisfrontend-gql-shared";

const StateMachineReadQuery =
`
query StateMachineReadQuery($id: UUID!) {
  result: statemachineById(id: $id) {
    ...StateMachineLarge
  }
}

fragment StateMachineLarge on StateMachineGQLModel {
  __typename
  id
  lastchange
  name
  nameEn
  states {
    ...StateLarge
  }
  transitions {
    ...StateTransition
  }
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

export const StateMachineReadAsyncAction = createAsyncGraphQLAction(StateMachineReadQuery)