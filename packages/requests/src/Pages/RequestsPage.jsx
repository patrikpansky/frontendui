import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { useState } from "react"
import { createAsyncGraphQLAction, updateItemsFromGraphQLResult } from "@hrbolek/uoisfrontend-gql-shared"
import { createLazyComponent, InfiniteScroll } from "@hrbolek/uoisfrontend-shared"
import { RequestMediumCard } from "../Components"
import { RequestPageNavbar } from './RequestPageNavbar'

const RequestsReadQuery = 
`
query RequestsReadQuery($skip: Int, $limit: Int, $where: RequestInputFilter, $orderby: String)
{
  result: requestPage(skip: $skip, limit: $limit, where: $where, orderby: $orderby) {
    ...RequestLarge
  }
}

fragment RequestLarge on RequestGQLModel {
  __typename
  id
  name
  lastchange
  histories {
    __typename
    id
    request { ...RequestLink }
    form { ...FormLink }
    name
    changedby { ...UserLink }
    createdby { ...UserLink }
    created
    lastchange

  }
  state { id name }
  createdby { ...UserLink }
  changedby { ...UserLink }  
}

fragment UserLink on UserGQLModel {
  __typename
  id
  fullname
}

fragment RequestLink on RequestGQLModel {
  __typename
  id
  name
}

fragment FormLink on FormGQLModel {
  __typename
  id
  name
}
`

export const RequestsReadAsyncAction = createAsyncGraphQLAction(
    RequestsReadQuery,
    updateItemsFromGraphQLResult,
    (jsonResult) => (dispatch, getState, next) => {
        const requests = jsonResult?.data?.result || []
        return requests
    }
)

const RequestsVisualiser = ({items}) => {
    return (
        <>{items.map( 
                request => <Col key={request.id}>
                    <RequestMediumCard request={request} />
                </Col>
           )}
        </>
    )
}

export const RequestsPageContent = ({requests, ...props}) => {
    const [settings, setSettings] = useState({mode: "cards"})
    return (<>
        
        {/* {JSON.stringify(props)}<br /> */}
        <Row>
            <InfiniteScroll 
                Visualiser={RequestsVisualiser}
                preloadedItems={requests} 
                actionParams={{skip: 0, limit: 10}} 
                asyncAction={RequestsReadAsyncAction} />
        </Row>
    </>)    
}

export const RequestsPageContentLazy = createLazyComponent(RequestsPageContent, "requests", RequestsReadAsyncAction)
export const RequestsPage = () => {
    const requests = {}
    return <RequestsPageContentLazy requests={requests}/>
}