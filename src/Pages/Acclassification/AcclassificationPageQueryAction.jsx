import { 
    CreateAsyncActionFromQuery,
    CreateAsyncQueryValidator
} from "@hrbolek/uoisfrontend-shared/src"

let AcclassificationQuery = `
    query AcclassificationPageQuery($id: UUID!) { 
        result: acClassificationById(id: $id) { 
            id
            created
            lastchange
            date
            order
         ...AcclassificationScalarsFragment
         ...AcclassificationVectorsFragment    
        }
    }
`
const AcclassificationScalarsFragment = `
    fragment AcclassificationScalarsFragment on AcClassificationGQLModel { 
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
        student { 
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
        semester { 
            id
            created
            lastchange
            order
        }
        level { 
            id
            name
            nameEn
            created
            lastchange
        }
    }
`

const AcclassificationVectorsFragment = `
    fragment AcclassificationVectorsFragment on AcClassificationGQLModel { 
        id
    }
`

AcclassificationQuery = AcclassificationQuery + AcclassificationScalarsFragment + AcclassificationVectorsFragment

export const AcclassificationPageQueryAction = CreateAsyncActionFromQuery(AcclassificationQuery)
export const AcclassificationPageQueryActionValidator = CreateAsyncQueryValidator({error: "Nepovedlo se načíst 'acclassification'", success: "Načtení 'acclassification' se povedlo"})