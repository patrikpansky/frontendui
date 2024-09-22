import { 
    CreateAsyncActionFromQuery,
    CreateAsyncQueryValidator
} from "@hrbolek/uoisfrontend-shared/src"

let FormitemQuery = `
    query FormitemPageQuery($id: UUID!) { 
        result: formItemById(id: $id) { 
            __typename
            id
            name
            lastchange
            created
            nameEn
            order
            value
         ...FormitemScalarsFragment
         ...FormitemVectorsFragment    
        }
    }
`
const FormitemScalarsFragment = `
    fragment FormitemScalarsFragment on FormItemGQLModel { 
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
        part { 
            __typename
            id
            name
            lastchange
            created
            nameEn
            order
        }
        type { 
            __typename
            id
            name
            lastchange
            created
            nameEn
        }
    }
`

const FormitemVectorsFragment = `
    fragment FormitemVectorsFragment on FormItemGQLModel { 
        id
    }
`

FormitemQuery = FormitemQuery + FormitemScalarsFragment + FormitemVectorsFragment

export const FormitemPageQueryAction = CreateAsyncActionFromQuery(FormitemQuery)
export const FormitemPageQueryActionValidator = CreateAsyncQueryValidator({error: "Nepovedlo se načíst 'formitem'", success: "Načtení 'formitem' se povedlo"})