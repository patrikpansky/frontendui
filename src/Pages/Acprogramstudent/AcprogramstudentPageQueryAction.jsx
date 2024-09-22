import { 
    CreateAsyncActionFromQuery,
    CreateAsyncQueryValidator
} from "@hrbolek/uoisfrontend-shared/src"

let AcprogramstudentQuery = `
    query AcprogramstudentPageQuery($id: UUID!) { 
        result: acProgramStudentById(id: $id) { 
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
        state { 
            id
            name
            nameEn
            created
            lastchange
        }
        program { 
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