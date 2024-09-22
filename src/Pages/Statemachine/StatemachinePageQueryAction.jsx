import { 
    CreateAsyncActionFromQuery,
    CreateAsyncQueryValidator
} from "@hrbolek/uoisfrontend-shared/src"

let StatemachineQuery = `
    query StatemachinePageQuery($id: UUID!) { 
        result: statemachineById(id: $id) { 
            id
            created
            lastchange
            name
            nameEn
         ...StatemachineScalarsFragment
         ...StatemachineVectorsFragment    
        }
    }
`
const StatemachineScalarsFragment = `
    fragment StatemachineScalarsFragment on StateMachineGQLModel { 
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
    }
`

const StatemachineVectorsFragment = `
    fragment StatemachineVectorsFragment on StateMachineGQLModel { 
        id
        states { 
            id
            created
            lastchange
            name
            nameEn
            order
        }
        transitions { 
            id
            created
            lastchange
            name
            nameEn
        }
    }
`

StatemachineQuery = StatemachineQuery + StatemachineScalarsFragment + StatemachineVectorsFragment

export const StatemachinePageQueryAction = CreateAsyncActionFromQuery(StatemachineQuery)
export const StatemachinePageQueryActionValidator = CreateAsyncQueryValidator({error: "Nepovedlo se načíst 'statemachine'", success: "Načtení 'statemachine' se povedlo"})