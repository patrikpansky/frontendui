import { CreateAsyncActionFromQuery } from "@hrbolek/uoisfrontend-shared/src"

const query = `
query Search($pattern: String!, $skip: Int, $limit: Int) {
    users: userPage(skip: $skip, limit: $limit, where: {fullname: {_ilike: $pattern}}) {
      __typename
      id
      fullname
      email
    }
    
    groups: groupPage(skip: $skip, limit: $limit, where: {name: {_ilike: $pattern}}) {
      __typename
      id
      name
    }
    
    events: eventPage(skip: $skip, limit: $limit, where: {name: {_ilike: $pattern}}) {
      __typename
      id
      name
    }
    
    facilities: facilityPage(skip: $skip, limit: $limit, where: {name: {_ilike: $pattern}}) {
      __typename
      id
      name
    }
    
    projects: projectPage(skip: $skip, limit: $limit, where: {name: {_ilike: $pattern}}) {
      __typename
      id
      name
    }
    
    programs: acProgramPage(skip: $skip, limit: $limit, where: {name: {_ilike: $pattern}}) {
      __typename
      id
      name
    }
    
    subjects: acSubjectPage(skip: $skip, limit: $limit, where: {name: {_ilike: $pattern}}) {
      __typename
      id
      name
    }
    
    publications: publicationPage(skip: $skip, limit: $limit, where: {name: {_ilike: $pattern}}) {
      __typename
      id
      name
    }
  }`

export const FetchSearchAnyAsyncAction = CreateAsyncActionFromQuery(query)