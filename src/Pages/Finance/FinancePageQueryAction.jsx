import { 
    CreateAsyncActionFromQuery,
    CreateAsyncQueryValidator
} from "@hrbolek/uoisfrontend-shared/src"

let FinanceQuery = `
    query FinancePageQuery($id: UUID!) { 
        result: financeById(id: $id) { 
            id
            name
            amount
            lastchange
            created
            valid
         ...FinanceScalarsFragment
         ...FinanceVectorsFragment    
        }
    }
`
const FinanceScalarsFragment = `
    fragment FinanceScalarsFragment on FinanceGQLModel { 
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
        rbacobject { 
            id
        }
        project { 
            id
            name
            startdate
            enddate
            created
            lastchange
            valid
        }
    }
`

const FinanceVectorsFragment = `
    fragment FinanceVectorsFragment on FinanceGQLModel { 
        id
        financeType { 
            id
            name
            nameEn
            lastchange
            created
            valid
        }
    }
`

FinanceQuery = FinanceQuery + FinanceScalarsFragment + FinanceVectorsFragment

export const FinancePageQueryAction = CreateAsyncActionFromQuery(FinanceQuery)
export const FinancePageQueryActionValidator = CreateAsyncQueryValidator({error: "Nepovedlo se načíst 'finance'", success: "Načtení 'finance' se povedlo"})