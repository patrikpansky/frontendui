import { 
    CreateAsyncActionFromQuery,
    CreateAsyncQueryValidator
} from "@hrbolek/uoisfrontend-shared/src"

let FormcategoryQuery = `
    query FormcategoryPageQuery($id: UUID!) { 
        result: formCategoryById(id: $id) { 
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
    }
`

const FormcategoryVectorsFragment = `
    fragment FormcategoryVectorsFragment on FormCategoryGQLModel { 
        id
        formTypes { 
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