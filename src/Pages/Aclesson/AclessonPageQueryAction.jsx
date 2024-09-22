import { 
    CreateAsyncActionFromQuery,
    CreateAsyncQueryValidator
} from "@hrbolek/uoisfrontend-shared/src"

let AclessonQuery = `
    query AclessonPageQuery($id: UUID!) { 
        result: acLessonById(id: $id) { 
            id
            name
            nameEn
            created
            lastchange
            count
         ...AclessonScalarsFragment
         ...AclessonVectorsFragment    
        }
    }
`
const AclessonScalarsFragment = `
    fragment AclessonScalarsFragment on AcLessonGQLModel { 
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
        type { 
            id
            name
            nameEn
            created
            lastchange
        }
        topic { 
            id
            name
            nameEn
            created
            lastchange
            order
        }
    }
`

const AclessonVectorsFragment = `
    fragment AclessonVectorsFragment on AcLessonGQLModel { 
        id
    }
`

AclessonQuery = AclessonQuery + AclessonScalarsFragment + AclessonVectorsFragment

export const AclessonPageQueryAction = CreateAsyncActionFromQuery(AclessonQuery)
export const AclessonPageQueryActionValidator = CreateAsyncQueryValidator({error: "Nepovedlo se načíst 'aclesson'", success: "Načtení 'aclesson' se povedlo"})