import { 
    CreateAsyncActionFromQuery,
    CreateAsyncQueryValidator
} from "@hrbolek/uoisfrontend-shared/src"

let AcprogramstudentQuery = `
    query AcprogramstudentPageQuery($id: UUID!) { 
        result: acProgramStudentById(id: $id) { 
            __typename
            id
            created
            lastchange
            semester
         ...AcprogramstudentScalarsFragment
         ...AcprogramstudentVectorsFragment    
        }
    }
`
const AcprogramstudentScalarsFragment = `
    fragment AcprogramstudentScalarsFragment on AcProgramStudentGQLModel { 
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
        state { 
            __typename
            id
            name
            nameEn
            created
            lastchange
        }
        program { 
            __typename
            id
            name
            nameEn
            created
            lastchange
        }
    }
`

const AcprogramstudentVectorsFragment = `
    fragment AcprogramstudentVectorsFragment on AcProgramStudentGQLModel { 
        id
        messages { 
            __typename
            id
            created
            lastchange
            name
            description
            date
        }
    }
`

AcprogramstudentQuery = AcprogramstudentQuery + AcprogramstudentScalarsFragment + AcprogramstudentVectorsFragment

export const AcprogramstudentPageQueryAction = CreateAsyncActionFromQuery(AcprogramstudentQuery)
export const AcprogramstudentPageQueryActionValidator = CreateAsyncQueryValidator({error: "Nepovedlo se načíst 'acprogramstudent'", success: "Načtení 'acprogramstudent' se povedlo"})