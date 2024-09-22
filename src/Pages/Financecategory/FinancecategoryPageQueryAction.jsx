import { 
    CreateAsyncActionFromQuery,
    CreateAsyncQueryValidator
} from "@hrbolek/uoisfrontend-shared/src"

let FinancecategoryQuery = `
    query FinancecategoryPageQuery($id: UUID!) { 
        result: financeCategoryById(id: $id) { 
            id
            name
            nameEn
            lastchange
            created
         ...FinancecategoryScalarsFragment
         ...FinancecategoryVectorsFragment    
        }
    }
`
const FinancecategoryScalarsFragment = `
    fragment FinancecategoryScalarsFragment on FinanceCategoryGQLModel { 
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
        userId { 
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
    }
`

const FinancecategoryVectorsFragment = `
    fragment FinancecategoryVectorsFragment on FinanceCategoryGQLModel { 
        id
    }
`

FinancecategoryQuery = FinancecategoryQuery + FinancecategoryScalarsFragment + FinancecategoryVectorsFragment

export const FinancecategoryPageQueryAction = CreateAsyncActionFromQuery(FinancecategoryQuery)
export const FinancecategoryPageQueryActionValidator = CreateAsyncQueryValidator({error: "Nepovedlo se načíst 'financecategory'", success: "Načtení 'financecategory' se povedlo"})