import { 
    CreateAsyncActionFromQuery,
    CreateAsyncQueryValidator
} from "@hrbolek/uoisfrontend-shared/src"

let AcprogramtitletypeQuery = `
    query AcprogramtitletypePageQuery($id: UUID!) { 
        result: acProgramTitleTypeById(id: $id) { 
            id
            name
            nameEn
            created
            lastchange
         ...AcprogramtitletypeScalarsFragment
         ...AcprogramtitletypeVectorsFragment    
        }
    }
`
const AcprogramtitletypeScalarsFragment = `
    fragment AcprogramtitletypeScalarsFragment on AcProgramTitleTypeGQLModel { 
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

const AcprogramtitletypeVectorsFragment = `
    fragment AcprogramtitletypeVectorsFragment on AcProgramTitleTypeGQLModel { 
        id
    }
`

AcprogramtitletypeQuery = AcprogramtitletypeQuery + AcprogramtitletypeScalarsFragment + AcprogramtitletypeVectorsFragment

export const AcprogramtitletypePageQueryAction = CreateAsyncActionFromQuery(AcprogramtitletypeQuery)
export const AcprogramtitletypePageQueryActionValidator = CreateAsyncQueryValidator({error: "Nepovedlo se načíst 'acprogramtitletype'", success: "Načtení 'acprogramtitletype' se povedlo"})