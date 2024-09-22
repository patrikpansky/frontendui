import { 
    CreateAsyncActionFromQuery,
    CreateAsyncQueryValidator
} from "@hrbolek/uoisfrontend-shared/src"

let AcprogrammessageQuery = `
    query AcprogrammessagePageQuery($id: UUID!) { 
        result: acProgramMessageById(id: $id) { 
            id
            created
            lastchange
            name
            description
            date
         ...AcprogrammessageScalarsFragment
         ...AcprogrammessageVectorsFragment    
        }
    }
`
const AcprogrammessageScalarsFragment = `
    fragment AcprogrammessageScalarsFragment on AcProgramMessageGQLModel { 
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
        program { 
            id
            name
            nameEn
            created
            lastchange
        }
    }
`

const AcprogrammessageVectorsFragment = `
    fragment AcprogrammessageVectorsFragment on AcProgramMessageGQLModel { 
        id
    }
`

AcprogrammessageQuery = AcprogrammessageQuery + AcprogrammessageScalarsFragment + AcprogrammessageVectorsFragment

export const AcprogrammessagePageQueryAction = CreateAsyncActionFromQuery(AcprogrammessageQuery)
export const AcprogrammessagePageQueryActionValidator = CreateAsyncQueryValidator({error: "Nepovedlo se načíst 'acprogrammessage'", success: "Načtení 'acprogrammessage' se povedlo"})