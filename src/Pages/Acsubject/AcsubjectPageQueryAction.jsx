import { 
    CreateAsyncActionFromQuery,
    CreateAsyncQueryValidator
} from "@hrbolek/uoisfrontend-shared/src"

let AcsubjectQuery = `
    query AcsubjectPageQuery($id: UUID!) { 
        result: acSubjectById(id: $id) { 
            id
            name
            nameEn
            created
            lastchange
         ...AcsubjectScalarsFragment
         ...AcsubjectVectorsFragment    
        }
    }
`
const AcsubjectScalarsFragment = `
    fragment AcsubjectScalarsFragment on AcSubjectGQLModel { 
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
        program { 
            id
            name
            nameEn
            created
            lastchange
        }
        grants { 
            id
            created
            lastchange
            name
            nameEn
            email
            abbreviation
            valid
            typeId
        }
    }
`

const AcsubjectVectorsFragment = `
    fragment AcsubjectVectorsFragment on AcSubjectGQLModel { 
        id
        semesters { 
            id
            created
            lastchange
            order
        }
        publication { 
            id
            name
            created
            lastchange
            publishedDate
            place
            reference
            valid
        }
    }
`

AcsubjectQuery = AcsubjectQuery + AcsubjectScalarsFragment + AcsubjectVectorsFragment

export const AcsubjectPageQueryAction = CreateAsyncActionFromQuery(AcsubjectQuery)
export const AcsubjectPageQueryActionValidator = CreateAsyncQueryValidator({error: "Nepovedlo se načíst 'acsubject'", success: "Načtení 'acsubject' se povedlo"})