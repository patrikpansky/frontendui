import { 
    CreateAsyncActionFromQuery,
    CreateAsyncQueryValidator
} from "@hrbolek/uoisfrontend-shared/src"

let FinancetypeQuery = `
    query FinancetypePageQuery($id: UUID!) { 
        result: financeTypeById(id: $id) { 
            __typename
            id
            name
            nameEn
            lastchange
            created
            valid
         ...FinancetypeScalarsFragment
         ...FinancetypeVectorsFragment    
        }
    }
`
const FinancetypeScalarsFragment = `
    fragment FinancetypeScalarsFragment on FinanceTypeGQLModel { 
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
        category { 
            __typename
            id
            name
            nameEn
            lastchange
            created
        }
    }
`

const FinancetypeVectorsFragment = `
    fragment FinancetypeVectorsFragment on FinanceTypeGQLModel { 
        id
        finances { 
            __typename
            id
            name
            amount
            lastchange
            created
            valid
        }
    }
`

FinancetypeQuery = FinancetypeQuery + FinancetypeScalarsFragment + FinancetypeVectorsFragment

export const FinancetypePageQueryAction = CreateAsyncActionFromQuery(FinancetypeQuery)
export const FinancetypePageQueryActionValidator = CreateAsyncQueryValidator({error: "Nepovedlo se načíst 'financetype'", success: "Načtení 'financetype' se povedlo"})