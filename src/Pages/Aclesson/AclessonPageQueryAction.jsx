import { 
    CreateAsyncActionFromQuery,
    CreateAsyncQueryValidator
} from "@hrbolek/uoisfrontend-shared/src"

let AclessonQuery = `
    query AclessonPageQuery($id: UUID!) { 
        result: acLessonById(id: $id) { 
            __typename
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
        type { 
            __typename
            id
            name
            nameEn
            created
            lastchange
        }
        topic { 
            __typename
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