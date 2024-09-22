import { 
    CreateAsyncActionFromQuery,
    CreateAsyncQueryValidator
} from "@hrbolek/uoisfrontend-shared/src"

let AcprogramstudentstateQuery = `
    query AcprogramstudentstatePageQuery($id: UUID!) { 
        result: acProgramStudentStateById(id: $id) { 
            __typename
            id
            name
            nameEn
            created
            lastchange
         ...AcprogramstudentstateScalarsFragment
         ...AcprogramstudentstateVectorsFragment    
        }
    }
`
const AcprogramstudentstateScalarsFragment = `
    fragment AcprogramstudentstateScalarsFragment on AcProgramStudentStateGQLModel { 
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
    }
`

const AcprogramstudentstateVectorsFragment = `
    fragment AcprogramstudentstateVectorsFragment on AcProgramStudentStateGQLModel { 
        id
    }
`

AcprogramstudentstateQuery = AcprogramstudentstateQuery + AcprogramstudentstateScalarsFragment + AcprogramstudentstateVectorsFragment

export const AcprogramstudentstatePageQueryAction = CreateAsyncActionFromQuery(AcprogramstudentstateQuery)
export const AcprogramstudentstatePageQueryActionValidator = CreateAsyncQueryValidator({error: "Nepovedlo se načíst 'acprogramstudentstate'", success: "Načtení 'acprogramstudentstate' se povedlo"})