import { 
    CreateAsyncActionFromQuery,
    CreateAsyncQueryValidator
} from "@hrbolek/uoisfrontend-shared/src"

let FormitemtypeQuery = `
    query FormitemtypePageQuery($id: UUID!) { 
        result: formItemTypeById(id: $id) { 
            __typename
            id
            name
            lastchange
            created
            nameEn
         ...FormitemtypeScalarsFragment
         ...FormitemtypeVectorsFragment    
        }
    }
`
const FormitemtypeScalarsFragment = `
    fragment FormitemtypeScalarsFragment on FormItemTypeGQLModel { 
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
            lastchange
            created
            nameEn
        }
    }
`

const FormitemtypeVectorsFragment = `
    fragment FormitemtypeVectorsFragment on FormItemTypeGQLModel { 
        id
    }
`

FormitemtypeQuery = FormitemtypeQuery + FormitemtypeScalarsFragment + FormitemtypeVectorsFragment

export const FormitemtypePageQueryAction = CreateAsyncActionFromQuery(FormitemtypeQuery)
export const FormitemtypePageQueryActionValidator = CreateAsyncQueryValidator({error: "Nepovedlo se načíst 'formitemtype'", success: "Načtení 'formitemtype' se povedlo"})