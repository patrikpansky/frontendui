import { 
    CreateAsyncActionFromQuery,
    CreateAsyncQueryValidator
} from "@hrbolek/uoisfrontend-shared/src"

let FormtypeQuery = `
    query FormtypePageQuery($id: UUID!) { 
        result: formTypeById(id: $id) { 
            __typename
            id
            name
            lastchange
            created
            nameEn
         ...FormtypeScalarsFragment
         ...FormtypeVectorsFragment    
        }
    }
`
const FormtypeScalarsFragment = `
    fragment FormtypeScalarsFragment on FormTypeGQLModel { 
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

const FormtypeVectorsFragment = `
    fragment FormtypeVectorsFragment on FormTypeGQLModel { 
        id
        forms { 
            __typename
            id
            name
            lastchange
            created
            nameEn
            valid
            status
        }
    }
`

FormtypeQuery = FormtypeQuery + FormtypeScalarsFragment + FormtypeVectorsFragment

export const FormtypePageQueryAction = CreateAsyncActionFromQuery(FormtypeQuery)
export const FormtypePageQueryActionValidator = CreateAsyncQueryValidator({error: "Nepovedlo se načíst 'formtype'", success: "Načtení 'formtype' se povedlo"})