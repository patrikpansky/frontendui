import { 
    CreateAsyncActionFromQuery,
    CreateAsyncQueryValidator
} from "@hrbolek/uoisfrontend-shared/src"

let PlanQuery = `
    query PlanPageQuery($id: UUID!) { 
        result: planById(id: $id) { 
            id
            name
            lastchange
            created
         ...PlanScalarsFragment
         ...PlanVectorsFragment    
        }
    }
`
const PlanScalarsFragment = `
    fragment PlanScalarsFragment on PlanGQLModel { 
        id
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
        rbacObject { 
            id
        }
        semester { 
            id
            created
            lastchange
            order
        }
    }
`

const PlanVectorsFragment = `
    fragment PlanVectorsFragment on PlanGQLModel { 
        id
        lessons { 
            id
            name
            lastchange
            created
            order
            length
        }
    }
`

PlanQuery = PlanQuery + PlanScalarsFragment + PlanVectorsFragment

export const PlanPageQueryAction = CreateAsyncActionFromQuery(PlanQuery)
export const PlanPageQueryActionValidator = CreateAsyncQueryValidator({error: "Nepovedlo se načíst 'plan'", success: "Načtení 'plan' se povedlo"})