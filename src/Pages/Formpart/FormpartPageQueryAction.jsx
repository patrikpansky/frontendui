import { 
    CreateAsyncActionFromQuery,
    CreateAsyncQueryValidator
} from "@hrbolek/uoisfrontend-shared/src"

let FormpartQuery = `
    query FormpartPageQuery($id: UUID!) { 
        result: formPartById(id: $id) { 
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
        section { 
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