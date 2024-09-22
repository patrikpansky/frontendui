import { 
    CreateAsyncActionFromQuery,
    CreateAsyncQueryValidator
} from "@hrbolek/uoisfrontend-shared/src"

let AclessontypeQuery = `
    query AclessontypePageQuery($id: UUID!) { 
        result: acLessonTypeById(id: $id) { 
            id
            name
            nameEn
            created
            lastchange
         ...AclessontypeScalarsFragment
         ...AclessontypeVectorsFragment    
        }
    }
`
const AclessontypeScalarsFragment = `
    fragment AclessontypeScalarsFragment on AcLessonTypeGQLModel { 
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

const AclessontypeVectorsFragment = `
    fragment AclessontypeVectorsFragment on AcLessonTypeGQLModel { 
        id
    }
`

AclessontypeQuery = AclessontypeQuery + AclessontypeScalarsFragment + AclessontypeVectorsFragment

export const AclessontypePageQueryAction = CreateAsyncActionFromQuery(AclessontypeQuery)
export const AclessontypePageQueryActionValidator = CreateAsyncQueryValidator({error: "Nepovedlo se načíst 'aclessontype'", success: "Načtení 'aclessontype' se povedlo"})