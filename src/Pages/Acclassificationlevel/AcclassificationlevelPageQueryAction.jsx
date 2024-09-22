import { 
    CreateAsyncActionFromQuery,
    CreateAsyncQueryValidator
} from "@hrbolek/uoisfrontend-shared/src"

let AcclassificationlevelQuery = `
    query AcclassificationlevelPageQuery($id: UUID!) { 
        result: acClassificationLevelById(id: $id) { 
            id
            name
            nameEn
            created
            lastchange
         ...AcclassificationlevelScalarsFragment
         ...AcclassificationlevelVectorsFragment    
        }
    }
`
const AcclassificationlevelScalarsFragment = `
    fragment AcclassificationlevelScalarsFragment on AcClassificationLevelGQLModel { 
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

const AcclassificationlevelVectorsFragment = `
    fragment AcclassificationlevelVectorsFragment on AcClassificationLevelGQLModel { 
        id
    }
`

AcclassificationlevelQuery = AcclassificationlevelQuery + AcclassificationlevelScalarsFragment + AcclassificationlevelVectorsFragment

export const AcclassificationlevelPageQueryAction = CreateAsyncActionFromQuery(AcclassificationlevelQuery)
export const AcclassificationlevelPageQueryActionValidator = CreateAsyncQueryValidator({error: "Nepovedlo se načíst 'acclassificationlevel'", success: "Načtení 'acclassificationlevel' se povedlo"})