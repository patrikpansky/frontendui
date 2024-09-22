import { 
    CreateAsyncActionFromQuery,
    CreateAsyncQueryValidator
} from "@hrbolek/uoisfrontend-shared/src"

let AcprogramtypeQuery = `
    query AcprogramtypePageQuery($id: UUID!) { 
        result: acProgramTypeById(id: $id) { 
            id
            name
            nameEn
            created
            lastchange
         ...AcprogramtypeScalarsFragment
         ...AcprogramtypeVectorsFragment    
        }
    }
`
const AcprogramtypeScalarsFragment = `
    fragment AcprogramtypeScalarsFragment on AcProgramTypeGQLModel { 
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
        level { 
            id
            name
            nameEn
            created
            lastchange
        }
        form { 
            id
            name
            nameEn
            created
            lastchange
        }
        language { 
            id
            name
            nameEn
            created
            lastchange
        }
        title { 
            id
            name
            nameEn
            created
            lastchange
        }
    }
`

const AcprogramtypeVectorsFragment = `
    fragment AcprogramtypeVectorsFragment on AcProgramTypeGQLModel { 
        id
    }
`

AcprogramtypeQuery = AcprogramtypeQuery + AcprogramtypeScalarsFragment + AcprogramtypeVectorsFragment

export const AcprogramtypePageQueryAction = CreateAsyncActionFromQuery(AcprogramtypeQuery)
export const AcprogramtypePageQueryActionValidator = CreateAsyncQueryValidator({error: "Nepovedlo se načíst 'acprogramtype'", success: "Načtení 'acprogramtype' se povedlo"})