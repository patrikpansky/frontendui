import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { createAsyncGraphQLAction, updateItemsFromGraphQLResult, useFreshItem } from "@hrbolek/uoisfrontend-gql-shared"
import { CreateDelayer, createLazyComponent, LazyRender } from "@hrbolek/uoisfrontend-shared"
import { UserLink, UserMediumCard, UserMediumContent } from "@hrbolek/uoisfrontend-ug"

const RequestReadQuery = `
query RequestReadQuery($id: UUID!) {
    result: requestById(id: $id) {
     __typename
    id
    name
    histories {
      __typename
      id
      name
      form {
        ...Form
      }
      request {
        __typename
        id
        name
      }
      createdby { id fullname }
      state {
        id
        name
      }
    }
    form {
      __typename
      ...Form
    }
  }
}

fragment Form on FormGQLModel {
        __typename
      id
      name
      state {
        __typename
        id
        name
        readerslistId
      }
      sections {
        __typename
        id
        name
        order
        parts {
          __typename
          id
          name
          order
          items {
            __typename
            lastchange
            id
            name
            value
            order
            type {
              id
              name
            }
          }
        }
      }

}
`

const RequestReadAsyncAction = createAsyncGraphQLAction(RequestReadQuery)

const ItemReadQuery = 
`
`

const ItemUpdateQuery = 
`
mutation ItemUpdateQuery($id: UUID!, $lastchange: DateTime!, $value: String) {
    result: formItemUpdate(item: {id: $id, lastchange: $lastchange, value: $value}) {
        __typename
        id
        item {
          __typename
          id
          lastchange
          name
          value
          part {
                id
                section {
                id
                form {
                    id
                    request { 
                    id
                    }
                }
                }
          }
        }
    }
}
`

const ItemUpdateAsyncAction = createAsyncGraphQLAction(ItemUpdateQuery,
    (jsonResult) => (dispatch, getState, next) => {
        const result = jsonResult?.data?.result
        const item = result?.item
        console.log("ItemUpdateAsyncAction", item)
        const request = item?.part?.section?.form?.request
        if (item) return next(request)
    },
    RequestReadAsyncAction
)
// const StudentWithRead = createLazyComponent(UserMediumCard, "user", StudentReadAsyncAction)
// const StudentWithRead = createLazyComponent(ItemUpdateQuery, "user", StudentReadAsyncAction)

export const LargeText = ({item, value}) => {
    const [_value, setValue] = useState(value)
    const [delayUpdate] = useState(()=>CreateDelayer())
    const dispatch = useDispatch()
    const onChange = (e) => {
        const value = e.target.value
        delayUpdate(() => dispatch(ItemUpdateAsyncAction({...item, value: value})))
        setValue(value)
    }
    return (
        <textarea 
            className="form-control" 
            value={_value} 
            onChange={onChange} // Handle changes in the textarea
        />
    )
}