import { 
    CreateAsyncActionFromQuery,
    CreateAsyncQueryValidator
} from "@hrbolek/uoisfrontend-shared/src"

let FormcategoryQuery = `
    query FormcategoryPageQuery($id: UUID!) { 
        result: formCategoryById(id: $id) { 
            __typename
            id
            name
            lastchange
            created
            nameEn
         ...FormcategoryScalarsFragment
         ...FormcategoryVectorsFragment    
        }
    }
`
const FormcategoryScalarsFragment = `
    fragment FormcategoryScalarsFragment on FormCategoryGQLModel { 
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
    }
`

const FormcategoryVectorsFragment = `
    fragment FormcategoryVectorsFragment on FormCategoryGQLModel { 
        id
        formTypes { 
            __typename
            id
            name
            lastchange
            created
            nameEn
        }
    }
`

FormcategoryQuery = FormcategoryQuery + FormcategoryScalarsFragment + FormcategoryVectorsFragment

export const FormcategoryPageQueryAction = CreateAsyncActionFromQuery(FormcategoryQuery)
export const FormcategoryPageQueryActionValidator = CreateAsyncQueryValidator({error: "Nepovedlo se načíst 'formcategory'", success: "Načtení 'formcategory' se povedlo"})