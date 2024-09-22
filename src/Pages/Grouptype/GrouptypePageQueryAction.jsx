import { 
    CreateAsyncActionFromQuery,
    CreateAsyncQueryValidator
} from "@hrbolek/uoisfrontend-shared/src"

let GrouptypeQuery = `
    query GrouptypePageQuery($id: UUID!) { 
        result: groupTypeById(id: $id) { 
            __typename
            id
            created
            lastchange
            name
            nameEn
         ...GrouptypeScalarsFragment
         ...GrouptypeVectorsFragment    
        }
    }
`
const GrouptypeScalarsFragment = `
    fragment GrouptypeScalarsFragment on GroupTypeGQLModel { 
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

const GrouptypeVectorsFragment = `
    fragment GrouptypeVectorsFragment on GroupTypeGQLModel { 
        id
    }
`

GrouptypeQuery = GrouptypeQuery + GrouptypeScalarsFragment + GrouptypeVectorsFragment

export const GrouptypePageQueryAction = CreateAsyncActionFromQuery(GrouptypeQuery)
export const GrouptypePageQueryActionValidator = CreateAsyncQueryValidator({error: "Nepovedlo se načíst 'grouptype'", success: "Načtení 'grouptype' se povedlo"})