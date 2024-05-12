import { CreateAsyncActionFromQuery } from "@hrbolek/uoisfrontend-shared/src"

const query = `
query Search($pattern: String!) {
    users: userPage(where: {fullname: {_ilike: $pattern}}) {
      __typename
      id
      fullname
      email
    }
    
    groups: groupPage(where: {name: {_ilike: $pattern}}) {
      __typename
      id
      name
    }
    
    events: eventPage(where: {name: {_ilike: $pattern}}) {
      __typename
      id
      name
    }
    
    facilities: facilityPage(where: {name: {_ilike: $pattern}}) {
      __typename
      id
      name
    }
    
    projects: projectPage(where: {name: {_ilike: $pattern}}) {
      __typename
      id
      name
    }
    
    programs: acProgramPage(where: {name: {_ilike: $pattern}}) {
      __typename
      id
      name
    }
    
    subjects: acSubjectPage(where: {name: {_ilike: $pattern}}) {
      __typename
      id
      name
    }
    
    publications: publicationPage(where: {name: {_ilike: $pattern}}) {
      __typename
      id
      name
    }
  }`

export const FetchSearchAnyAsyncAction = CreateAsyncActionFromQuery(query)