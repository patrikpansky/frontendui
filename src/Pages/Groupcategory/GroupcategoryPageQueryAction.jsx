import { 
    CreateAsyncActionFromQuery,
    CreateAsyncQueryValidator
} from "@hrbolek/uoisfrontend-shared/src"

let GroupcategoryQuery = `
    query GroupcategoryPageQuery($id: UUID!) { 
        result: groupCategoryById(id: $id) { 
            id
            created
            lastchange
            name
            nameEn
         ...GroupcategoryScalarsFragment
         ...GroupcategoryVectorsFragment    
        }
    }
`
const GroupcategoryScalarsFragment = `
    fragment GroupcategoryScalarsFragment on GroupCategoryGQLModel { 
        id
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
        rbacobject { 
            id
        }
    }
`

const GroupcategoryVectorsFragment = `
    fragment GroupcategoryVectorsFragment on GroupCategoryGQLModel { 
        id
        types { 
            id
            created
            lastchange
            name
            nameEn
        }
    }
`

GroupcategoryQuery = GroupcategoryQuery + GroupcategoryScalarsFragment + GroupcategoryVectorsFragment

export const GroupcategoryPageQueryAction = CreateAsyncActionFromQuery(GroupcategoryQuery)
export const GroupcategoryPageQueryActionValidator = CreateAsyncQueryValidator({error: "Nepovedlo se načíst 'groupcategory'", success: "Načtení 'groupcategory' se povedlo"})