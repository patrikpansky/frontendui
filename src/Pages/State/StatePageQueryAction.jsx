import { 
    CreateAsyncActionFromQuery,
    CreateAsyncQueryValidator
} from "@hrbolek/uoisfrontend-shared/src"

let StateQuery = `
    query StatePageQuery($id: UUID!) { 
        result: stateById(id: $id) { 
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
        statemachine { 
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
            id
            name
            lastchange
            created
            nameEn
            gdpr
        }
        sources { 
            id
            created
            lastchange
            name
            nameEn
        }
        targets { 
            id
            created
            lastchange
            name
            nameEn
        }
        roletypes { 
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