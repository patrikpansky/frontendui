import { 
    CreateAsyncActionFromQuery,
    CreateAsyncQueryValidator
} from "@hrbolek/uoisfrontend-shared/src"

let RbacQuery = `
    query RbacPageQuery($id: UUID!) { 
        result: rbacById(id: $id) { 
            __typename
            id
         ...RbacScalarsFragment
         ...RbacVectorsFragment    
        }
    }
`
const RbacScalarsFragment = `
    fragment RbacScalarsFragment on RBACObjectGQLModel { 
        id
    }
`

const RbacVectorsFragment = `
    fragment RbacVectorsFragment on RBACObjectGQLModel { 
        id
        roles { 
            __typename
            id
            created
            lastchange
            valid
            startdate
            enddate
        }
    }
`

RbacQuery = RbacQuery + RbacScalarsFragment + RbacVectorsFragment

export const RbacPageQueryAction = CreateAsyncActionFromQuery(RbacQuery)
export const RbacPageQueryActionValidator = CreateAsyncQueryValidator({error: "Nepovedlo se načíst 'rbac'", success: "Načtení 'rbac' se povedlo"})