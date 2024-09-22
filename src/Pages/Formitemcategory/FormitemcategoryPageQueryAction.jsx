import { 
    CreateAsyncActionFromQuery,
    CreateAsyncQueryValidator
} from "@hrbolek/uoisfrontend-shared/src"

let FormitemcategoryQuery = `
    query FormitemcategoryPageQuery($id: UUID!) { 
        result: formItemCategoryById(id: $id) { 
            id
            name
            lastchange
            created
            nameEn
         ...FormitemcategoryScalarsFragment
         ...FormitemcategoryVectorsFragment    
        }
    }
`
const FormitemcategoryScalarsFragment = `
    fragment FormitemcategoryScalarsFragment on FormItemCategoryGQLModel { 
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

const FormitemcategoryVectorsFragment = `
    fragment FormitemcategoryVectorsFragment on FormItemCategoryGQLModel { 
        id
        types { 
            id
            name
            lastchange
            created
            nameEn
        }
    }
`

FormitemcategoryQuery = FormitemcategoryQuery + FormitemcategoryScalarsFragment + FormitemcategoryVectorsFragment

export const FormitemcategoryPageQueryAction = CreateAsyncActionFromQuery(FormitemcategoryQuery)
export const FormitemcategoryPageQueryActionValidator = CreateAsyncQueryValidator({error: "Nepovedlo se načíst 'formitemcategory'", success: "Načtení 'formitemcategory' se povedlo"})