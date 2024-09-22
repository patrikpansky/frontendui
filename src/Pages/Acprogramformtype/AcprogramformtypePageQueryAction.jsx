import { 
    CreateAsyncActionFromQuery,
    CreateAsyncQueryValidator
} from "@hrbolek/uoisfrontend-shared/src"

let AcprogramformtypeQuery = `
    query AcprogramformtypePageQuery($id: UUID!) { 
        result: acProgramFormTypeById(id: $id) { 
            id
            name
            nameEn
            created
            lastchange
         ...AcprogramformtypeScalarsFragment
         ...AcprogramformtypeVectorsFragment    
        }
    }
`
const AcprogramformtypeScalarsFragment = `
    fragment AcprogramformtypeScalarsFragment on AcProgramFormTypeGQLModel { 
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

const AcprogramformtypeVectorsFragment = `
    fragment AcprogramformtypeVectorsFragment on AcProgramFormTypeGQLModel { 
        id
    }
`

AcprogramformtypeQuery = AcprogramformtypeQuery + AcprogramformtypeScalarsFragment + AcprogramformtypeVectorsFragment

export const AcprogramformtypePageQueryAction = CreateAsyncActionFromQuery(AcprogramformtypeQuery)
export const AcprogramformtypePageQueryActionValidator = CreateAsyncQueryValidator({error: "Nepovedlo se načíst 'acprogramformtype'", success: "Načtení 'acprogramformtype' se povedlo"})