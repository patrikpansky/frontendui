import { 
    CreateAsyncActionFromQuery,
    CreateAsyncQueryValidator
} from "@hrbolek/uoisfrontend-shared/src"

let RoletypeQuery = `
    query RoletypePageQuery($id: UUID!) { 
        result: roleTypeById(id: $id) { 
            __typename
            id
            created
            lastchange
            name
            nameEn
         ...RoletypeScalarsFragment
         ...RoletypeVectorsFragment    
        }
    }
`
const RoletypeScalarsFragment = `
    fragment RoletypeScalarsFragment on RoleTypeGQLModel { 
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
        category { 
            __typename
            id
            created
            lastchange
            name
            nameEn
        }
        rbacobject { 
            __typename
            id
        }
    }
`

const RoletypeVectorsFragment = `
    fragment RoletypeVectorsFragment on RoleTypeGQLModel { 
        id
    }
`

RoletypeQuery = RoletypeQuery + RoletypeScalarsFragment + RoletypeVectorsFragment

export const RoletypePageQueryAction = CreateAsyncActionFromQuery(RoletypeQuery)
export const RoletypePageQueryActionValidator = CreateAsyncQueryValidator({error: "Nepovedlo se načíst 'roletype'", success: "Načtení 'roletype' se povedlo"})