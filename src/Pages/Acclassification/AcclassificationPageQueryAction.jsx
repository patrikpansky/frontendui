import { 
    CreateAsyncActionFromQuery,
    CreateAsyncQueryValidator
} from "@hrbolek/uoisfrontend-shared/src"

let AcclassificationQuery = `
    query AcclassificationPageQuery($id: UUID!) { 
        result: acClassificationById(id: $id) { 
            __typename
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
        student { 
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
        semester { 
            __typename
            id
            created
            lastchange
            order
        }
        level { 
            __typename
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