import { 
    CreateAsyncActionFromQuery,
    CreateAsyncQueryValidator
} from "@hrbolek/uoisfrontend-shared/src"

let StateQuery = `
    query StatePageQuery($id: UUID!) { 
        result: stateById(id: $id) { 
            __typename
            id
            created
            lastchange
            name
            nameEn
            order
         ...StateScalarsFragment
         ...StateVectorsFragment    
        }
    }
`
const StateScalarsFragment = `
    fragment StateScalarsFragment on StateGQLModel { 
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

const StateVectorsFragment = `
    fragment StateVectorsFragment on StateGQLModel { 
        id
        requests { 
            __typename
            id
            name
            lastchange
            created
            nameEn
            gdpr
        }
        sources { 
            __typename
            id
            created
            lastchange
            name
            nameEn
        }
        targets { 
            __typename
            id
            created
            lastchange
            name
            nameEn
        }
        roletypes { 
            __typename
            id
            created
            lastchange
            name
            nameEn
        }
    }
`

StateQuery = StateQuery + StateScalarsFragment + StateVectorsFragment

export const StatePageQueryAction = CreateAsyncActionFromQuery(StateQuery)
export const StatePageQueryActionValidator = CreateAsyncQueryValidator({error: "Nepovedlo se načíst 'state'", success: "Načtení 'state' se povedlo"})