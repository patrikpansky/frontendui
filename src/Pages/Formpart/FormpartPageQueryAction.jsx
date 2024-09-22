import { 
    CreateAsyncActionFromQuery,
    CreateAsyncQueryValidator
} from "@hrbolek/uoisfrontend-shared/src"

let FormpartQuery = `
    query FormpartPageQuery($id: UUID!) { 
        result: formPartById(id: $id) { 
            __typename
            id
            name
            lastchange
            created
            nameEn
            order
         ...FormpartScalarsFragment
         ...FormpartVectorsFragment    
        }
    }
`
const FormpartScalarsFragment = `
    fragment FormpartScalarsFragment on FormPartGQLModel { 
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
        section { 
            __typename
            id
            name
            lastchange
            created
            nameEn
            order
        }
    }
`

const FormpartVectorsFragment = `
    fragment FormpartVectorsFragment on FormPartGQLModel { 
        id
        items { 
            __typename
            id
            name
            lastchange
            created
            nameEn
            order
            value
        }
    }
`

FormpartQuery = FormpartQuery + FormpartScalarsFragment + FormpartVectorsFragment

export const FormpartPageQueryAction = CreateAsyncActionFromQuery(FormpartQuery)
export const FormpartPageQueryActionValidator = CreateAsyncQueryValidator({error: "Nepovedlo se načíst 'formpart'", success: "Načtení 'formpart' se povedlo"})