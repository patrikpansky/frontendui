import { 
    CreateAsyncActionFromQuery,
    CreateAsyncQueryValidator
} from "@hrbolek/uoisfrontend-shared/src"

let AcsemesterQuery = `
    query AcsemesterPageQuery($id: UUID!) { 
        result: acSemesterById(id: $id) { 
            __typename
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
        subject { 
            __typename
            id
            name
            nameEn
            created
            lastchange
        }
        classificationType { 
            __typename
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
            __typename
            id
            created
            lastchange
            date
            order
        }
        topics { 
            __typename
            id
            name
            nameEn
            created
            lastchange
            order
        }
        plans { 
            __typename
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