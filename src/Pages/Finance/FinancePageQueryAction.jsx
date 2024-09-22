import { 
    CreateAsyncActionFromQuery,
    CreateAsyncQueryValidator
} from "@hrbolek/uoisfrontend-shared/src"

let FinanceQuery = `
    query FinancePageQuery($id: UUID!) { 
        result: financeById(id: $id) { 
            __typename
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
        rbacobject { 
            __typename
            id
        }
        project { 
            __typename
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
            __typename
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