import { 
    CreateAsyncActionFromQuery,
    CreateAsyncQueryValidator
} from "@hrbolek/uoisfrontend-shared/src"

let AcprogramlanguagetypeQuery = `
    query AcprogramlanguagetypePageQuery($id: UUID!) { 
        result: acProgramLanguageTypeById(id: $id) { 
            id
            name
            nameEn
            created
            lastchange
         ...AcprogramlanguagetypeScalarsFragment
         ...AcprogramlanguagetypeVectorsFragment    
        }
    }
`
const AcprogramlanguagetypeScalarsFragment = `
    fragment AcprogramlanguagetypeScalarsFragment on AcProgramLanguageTypeGQLModel { 
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

const AcprogramlanguagetypeVectorsFragment = `
    fragment AcprogramlanguagetypeVectorsFragment on AcProgramLanguageTypeGQLModel { 
        id
    }
`

AcprogramlanguagetypeQuery = AcprogramlanguagetypeQuery + AcprogramlanguagetypeScalarsFragment + AcprogramlanguagetypeVectorsFragment

export const AcprogramlanguagetypePageQueryAction = CreateAsyncActionFromQuery(AcprogramlanguagetypeQuery)
export const AcprogramlanguagetypePageQueryActionValidator = CreateAsyncQueryValidator({error: "Nepovedlo se načíst 'acprogramlanguagetype'", success: "Načtení 'acprogramlanguagetype' se povedlo"})