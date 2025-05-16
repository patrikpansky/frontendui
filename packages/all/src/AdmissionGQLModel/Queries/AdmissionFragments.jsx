import { createQueryStrLazy } from "@hrbolek/uoisfrontend-gql-shared";

export const AdmissionLinkFragment = createQueryStrLazy(`
fragment AdmissionLinkFragment on AdmissionGQLModel {
  __typename
  id
  lastchange
  created
  createdbyId
  changedbyId
  rbacobjectId
  name
  nameEn
  stateId
  programId
  paymentInfoId
  applicationStartDate
  applicationLastDate
  endDate
  conditionDate
  paymentDate
  conditionExtendedDate
  requestConditionExtendDate
  requestExtraConditionsDate
  requestExtraDateDate
  examStartDate
  examLastDate
  studentEntryDate
}
`);

export const AdmissionMediumFragment = createQueryStrLazy(`
fragment AdmissionMediumFragment on AdmissionGQLModel {
  ...AdmissionLinkFragment
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
  }
  program {
    __typename
    id
    lastchange
    created
    createdbyId
    changedbyId
    rbacobjectId
    name
    nameEn
    groupId
    licencedGroupId
    typeId
  }
  paymentInfo {
    __typename
    id
    lastchange
    created
    createdbyId
    changedbyId
    rbacobjectId
    accountNumber
    specificSymbol
    constantSymbol
    IBAN
    SWIFT
    amount
  }
  state {
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
    
  }
}
`, AdmissionLinkFragment);

export const AdmissionLargeFragment = createQueryStrLazy(`
fragment AdmissionLargeFragment on AdmissionGQLModel {
  ...AdmissionMediumFragment
}
`, AdmissionMediumFragment);
