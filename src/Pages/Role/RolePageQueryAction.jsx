import { 
    CreateAsyncActionFromQuery,
    CreateAsyncQueryValidator
} from "@hrbolek/uoisfrontend-shared/src"

let RoleQuery = `
    query RolePageQuery($id: UUID!) { 
        result: roleById(id: $id) { 
            __typename
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
        roletype { 
            __typename
            id
            created
            lastchange
            name
            nameEn
        }
        user { 
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
        group { 
            __typename
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
            __typename
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