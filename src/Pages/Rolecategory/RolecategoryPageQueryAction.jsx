import { 
    CreateAsyncActionFromQuery,
    CreateAsyncQueryValidator
} from "@hrbolek/uoisfrontend-shared/src"

let RolecategoryQuery = `
    query RolecategoryPageQuery($id: UUID!) { 
        result: roleCategoryById(id: $id) { 
            id
            created
            lastchange
            name
            nameEn
         ...RolecategoryScalarsFragment
         ...RolecategoryVectorsFragment    
        }
    }
`
const RolecategoryScalarsFragment = `
    fragment RolecategoryScalarsFragment on RoleCategoryGQLModel { 
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

const RolecategoryVectorsFragment = `
    fragment RolecategoryVectorsFragment on RoleCategoryGQLModel { 
        id
        roleTypes { 
            id
            created
            lastchange
            name
            nameEn
        }
    }
`

RolecategoryQuery = RolecategoryQuery + RolecategoryScalarsFragment + RolecategoryVectorsFragment

export const RolecategoryPageQueryAction = CreateAsyncActionFromQuery(RolecategoryQuery)
export const RolecategoryPageQueryActionValidator = CreateAsyncQueryValidator({error: "Nepovedlo se načíst 'rolecategory'", success: "Načtení 'rolecategory' se povedlo"})