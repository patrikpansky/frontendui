import { 
    CreateAsyncActionFromQuery,
    CreateAsyncQueryValidator
} from "@hrbolek/uoisfrontend-shared/src"

let ProjectcategoryQuery = `
    query ProjectcategoryPageQuery($id: UUID!) { 
        result: projectCategoryById(id: $id) { 
            __typename
            id
            name
            nameEn
            lastchange
            created
         ...ProjectcategoryScalarsFragment
         ...ProjectcategoryVectorsFragment    
        }
    }
`
const ProjectcategoryScalarsFragment = `
    fragment ProjectcategoryScalarsFragment on ProjectCategoryGQLModel { 
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

const ProjectcategoryVectorsFragment = `
    fragment ProjectcategoryVectorsFragment on ProjectCategoryGQLModel { 
        id
    }
`

ProjectcategoryQuery = ProjectcategoryQuery + ProjectcategoryScalarsFragment + ProjectcategoryVectorsFragment

export const ProjectcategoryPageQueryAction = CreateAsyncActionFromQuery(ProjectcategoryQuery)
export const ProjectcategoryPageQueryActionValidator = CreateAsyncQueryValidator({error: "Nepovedlo se načíst 'projectcategory'", success: "Načtení 'projectcategory' se povedlo"})