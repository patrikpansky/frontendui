import { 
    CreateAsyncActionFromQuery,
    CreateAsyncQueryValidator
} from "@hrbolek/uoisfrontend-shared/src"

let AcprogramleveltypeQuery = `
    query AcprogramleveltypePageQuery($id: UUID!) { 
        result: acProgramLevelTypeById(id: $id) { 
            id
            name
            nameEn
            created
            lastchange
         ...AcprogramleveltypeScalarsFragment
         ...AcprogramleveltypeVectorsFragment    
        }
    }
`
const AcprogramleveltypeScalarsFragment = `
    fragment AcprogramleveltypeScalarsFragment on AcProgramLevelTypeGQLModel { 
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

const AcprogramleveltypeVectorsFragment = `
    fragment AcprogramleveltypeVectorsFragment on AcProgramLevelTypeGQLModel { 
        id
    }
`

AcprogramleveltypeQuery = AcprogramleveltypeQuery + AcprogramleveltypeScalarsFragment + AcprogramleveltypeVectorsFragment

export const AcprogramleveltypePageQueryAction = CreateAsyncActionFromQuery(AcprogramleveltypeQuery)
export const AcprogramleveltypePageQueryActionValidator = CreateAsyncQueryValidator({error: "Nepovedlo se načíst 'acprogramleveltype'", success: "Načtení 'acprogramleveltype' se povedlo"})