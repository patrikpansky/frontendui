import { 
    CreateAsyncActionFromQuery,
    CreateAsyncQueryValidator
} from "@hrbolek/uoisfrontend-shared/src"

let GrouptypeQuery = `
    query GrouptypePageQuery($id: UUID!) { 
        result: groupTypeById(id: $id) { 
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
        category { 
            id
            created
            lastchange
            name
            nameEn
        }
        rbacobject { 
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