import { 
    CreateAsyncActionFromQuery,
    CreateAsyncQueryValidator
} from "@hrbolek/uoisfrontend-shared/src"

let StatetransitionQuery = `
    query StatetransitionPageQuery($id: UUID!) { 
        result: statetransitionById(id: $id) { 
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
            id
        }
        source { 
            id
            created
            lastchange
            name
            nameEn
            order
        }
        target { 
            id
            created
            lastchange
            name
            nameEn
            order
        }
        statemachine { 
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