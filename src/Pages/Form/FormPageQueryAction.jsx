import { 
    CreateAsyncActionFromQuery,
    CreateAsyncQueryValidator
} from "@hrbolek/uoisfrontend-shared/src"

let FormQuery = `
    query FormPageQuery($id: UUID!) { 
        result: formById(id: $id) { 
            id
            name
            lastchange
            created
            nameEn
            valid
            status
         ...FormScalarsFragment
         ...FormVectorsFragment    
        }
    }
`
const FormScalarsFragment = `
    fragment FormScalarsFragment on FormGQLModel { 
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
        state { 
            id
            created
            lastchange
            name
            nameEn
            order
        }
        type { 
            id
            name
            lastchange
            created
            nameEn
        }
        request { 
            id
            name
            lastchange
            created
            nameEn
            gdpr
        }
    }
`

const FormVectorsFragment = `
    fragment FormVectorsFragment on FormGQLModel { 
        id
        sections { 
            id
            name
            lastchange
            created
            nameEn
            order
        }
    }
`

FormQuery = FormQuery + FormScalarsFragment + FormVectorsFragment

export const FormPageQueryAction = CreateAsyncActionFromQuery(FormQuery)
export const FormPageQueryActionValidator = CreateAsyncQueryValidator({error: "Nepovedlo se načíst 'form'", success: "Načtení 'form' se povedlo"})