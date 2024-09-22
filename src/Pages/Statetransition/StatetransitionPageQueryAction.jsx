import { 
    CreateAsyncActionFromQuery,
    CreateAsyncQueryValidator
} from "@hrbolek/uoisfrontend-shared/src"

let StatetransitionQuery = `
    query StatetransitionPageQuery($id: UUID!) { 
        result: statetransitionById(id: $id) { 
            __typename
            id
            created
            lastchange
            name
            nameEn
         ...StatetransitionScalarsFragment
         ...StatetransitionVectorsFragment    
        }
    }
`
const StatetransitionScalarsFragment = `
    fragment StatetransitionScalarsFragment on StateTransitionGQLModel { 
        id
        createdby { 
            __typename
            id
            created
            lastchange
            name
            firstname
            surname
            fullname
            email
            valid
            isThisMe
            gdpr
        }
        changedby { 
            __typename
            id
            created
            lastchange
            name
            firstname
            surname
            fullname
            email
            valid
            isThisMe
            gdpr
        }
        rbacobject { 
            __typename
            id
        }
        source { 
            __typename
            id
            created
            lastchange
            name
            nameEn
            order
        }
        target { 
            __typename
            id
            created
            lastchange
            name
            nameEn
            order
        }
        statemachine { 
            __typename
            id
            created
            lastchange
            name
            nameEn
        }
    }
`

const StatetransitionVectorsFragment = `
    fragment StatetransitionVectorsFragment on StateTransitionGQLModel { 
        id
    }
`

StatetransitionQuery = StatetransitionQuery + StatetransitionScalarsFragment + StatetransitionVectorsFragment

export const StatetransitionPageQueryAction = CreateAsyncActionFromQuery(StatetransitionQuery)
export const StatetransitionPageQueryActionValidator = CreateAsyncQueryValidator({error: "Nepovedlo se načíst 'statetransition'", success: "Načtení 'statetransition' se povedlo"})