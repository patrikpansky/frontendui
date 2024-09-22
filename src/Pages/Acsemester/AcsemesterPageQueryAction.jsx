import { 
    CreateAsyncActionFromQuery,
    CreateAsyncQueryValidator
} from "@hrbolek/uoisfrontend-shared/src"

let AcsemesterQuery = `
    query AcsemesterPageQuery($id: UUID!) { 
        result: acSemesterById(id: $id) { 
            id
            created
            lastchange
            order
         ...AcsemesterScalarsFragment
         ...AcsemesterVectorsFragment    
        }
    }
`
const AcsemesterScalarsFragment = `
    fragment AcsemesterScalarsFragment on AcSemesterGQLModel { 
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
        subject { 
            id
            name
            nameEn
            created
            lastchange
        }
        classificationType { 
            id
            name
            nameEn
            created
            lastchange
        }
    }
`

const AcsemesterVectorsFragment = `
    fragment AcsemesterVectorsFragment on AcSemesterGQLModel { 
        id
        classifications { 
            id
            created
            lastchange
            date
            order
        }
        topics { 
            id
            name
            nameEn
            created
            lastchange
            order
        }
        plans { 
            id
            name
            lastchange
            created
        }
    }
`

AcsemesterQuery = AcsemesterQuery + AcsemesterScalarsFragment + AcsemesterVectorsFragment

export const AcsemesterPageQueryAction = CreateAsyncActionFromQuery(AcsemesterQuery)
export const AcsemesterPageQueryActionValidator = CreateAsyncQueryValidator({error: "Nepovedlo se načíst 'acsemester'", success: "Načtení 'acsemester' se povedlo"})