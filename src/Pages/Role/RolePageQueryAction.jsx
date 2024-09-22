import { 
    CreateAsyncActionFromQuery,
    CreateAsyncQueryValidator
} from "@hrbolek/uoisfrontend-shared/src"

let RoleQuery = `
    query RolePageQuery($id: UUID!) { 
        result: roleById(id: $id) { 
            id
            created
            lastchange
            valid
            startdate
            enddate
         ...RoleScalarsFragment
         ...RoleVectorsFragment    
        }
    }
`
const RoleScalarsFragment = `
    fragment RoleScalarsFragment on RoleGQLModel { 
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
        roletype { 
            id
            created
            lastchange
            name
            nameEn
        }
        user { 
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
        group { 
            id
            created
            lastchange
            name
            nameEn
            email
            abbreviation
            valid
            typeId
        }
        rbacobject { 
            id
        }
    }
`

const RoleVectorsFragment = `
    fragment RoleVectorsFragment on RoleGQLModel { 
        id
    }
`

RoleQuery = RoleQuery + RoleScalarsFragment + RoleVectorsFragment

export const RolePageQueryAction = CreateAsyncActionFromQuery(RoleQuery)
export const RolePageQueryActionValidator = CreateAsyncQueryValidator({error: "Nepovedlo se načíst 'role'", success: "Načtení 'role' se povedlo"})