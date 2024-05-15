import { CreateAsyncActionFromQuery } from "@hrbolek/uoisfrontend-shared/src"


const query = `query($pattern: String!, $limit: Int) {
  result: facilityPage(limit: $limit, where: {name: {_ilike: $pattern}}) {
    __typename
    id
    name
  }
}`

export const FetchSearchFacilityAsyncAction = CreateAsyncActionFromQuery(query)