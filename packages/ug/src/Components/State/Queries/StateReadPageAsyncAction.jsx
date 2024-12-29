import { createAsyncGraphQLAction } from "@hrbolek/uoisfrontend-gql-shared";

const StateReadPageQuery =
`
query StateReadPageQuery($skip: Int, $limit: Int, $where: StateWhereFilter) {
  result: statePage(skip: $skip, limit: $limit, where: $where) {
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

export const StateReadPageAsyncAction = createAsyncGraphQLAction(StateReadPageQuery)