import { createQueryStrLazy } from "@hrbolek/uoisfrontend-gql-shared";

export const StateLinkFragment = createQueryStrLazy(`
fragment StateLinkFragment on StateGQLModel {
  __typename
  id
  lastchange
  created
  createdbyId
  changedbyId
  rbacobjectId
  name
  nameEn
  statemachineId
  writerslistId
  readerslistId
  order
  userCan
}
`);

export const StateMediumFragment = createQueryStrLazy(`
fragment StateMediumFragment on StateGQLModel {
  ...StateLinkFragment
  createdby {
    __typename
    id
    lastchange
    created
    createdbyId
    changedbyId
    rbacobjectId
    name
    givenname
    middlename
    email
    firstname
    surname
    valid
    startdate
    enddate
    typeId
    isThisMe
    gdpr
    fullname
  }
  changedby {
    __typename
    id
    lastchange
    created
    createdbyId
    changedbyId
    rbacobjectId
    name
    givenname
    middlename
    email
    firstname
    surname
    valid
    startdate
    enddate
    typeId
    isThisMe
    gdpr
    fullname
  }
  rbacobject {
    __typename
    id
    userCanWithState
    userCanWithoutState
  }
  statemachine {
    __typename
    id
    lastchange
    created
    createdbyId
    changedbyId
    rbacobjectId
    name
    nameEn
    typeId
  }
}
`, StateLinkFragment);

export const StateLargeFragment = createQueryStrLazy(`
fragment StateLargeFragment on StateGQLModel {
  ...StateMediumFragment
  sources {
    __typename
    id
    lastchange
    created
    createdbyId
    changedbyId
    rbacobjectId
    name
    nameEn
    sourceId
    targetId
    statemachineId
  }
  targets {
    __typename
    id
    lastchange
    created
    createdbyId
    changedbyId
    rbacobjectId
    name
    nameEn
    sourceId
    targetId
    statemachineId
  }
  roletypes {
    __typename
    id
    lastchange
    created
    createdbyId
    changedbyId
    rbacobjectId
    name
    nameEn
    categoryId
  }
}
`, StateMediumFragment);
