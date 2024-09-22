import { 
    CreateAsyncActionFromQuery,
    CreateAsyncQueryValidator
} from "@hrbolek/uoisfrontend-shared/src"

let RoletypelistQuery = `
    query RoletypelistPageQuery($id: UUID!) { 
        result: roleTypeListById(id: $id) { 
            id
            created
            lastchange
         ...RoletypelistScalarsFragment
         ...RoletypelistVectorsFragment    
        }
    }
`
const RoletypelistScalarsFragment = `
    fragment RoletypelistScalarsFragment on RoleTypeListGQLModel { 
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
    }
`

const RoletypelistVectorsFragment = `
    fragment RoletypelistVectorsFragment on RoleTypeListGQLModel { 
        id
        roletypes { 
            id
            created
            lastchange
            name
            nameEn
        }
    }
`

RoletypelistQuery = RoletypelistQuery + RoletypelistScalarsFragment + RoletypelistVectorsFragment

export const RoletypelistPageQueryAction = CreateAsyncActionFromQuery(RoletypelistQuery)
export const RoletypelistPageQueryActionValidator = CreateAsyncQueryValidator({error: "Nepovedlo se načíst 'roletypelist'", success: "Načtení 'roletypelist' se povedlo"})