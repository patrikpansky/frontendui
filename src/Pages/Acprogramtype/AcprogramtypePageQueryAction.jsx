import { 
    CreateAsyncActionFromQuery,
    CreateAsyncQueryValidator
} from "@hrbolek/uoisfrontend-shared/src"

let AcprogramtypeQuery = `
    query AcprogramtypePageQuery($id: UUID!) { 
        result: acProgramTypeById(id: $id) { 
            __typename
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
        level { 
            __typename
            id
            name
            nameEn
            created
            lastchange
        }
        form { 
            __typename
            id
            name
            nameEn
            created
            lastchange
        }
        language { 
            __typename
            id
            name
            nameEn
            created
            lastchange
        }
        title { 
            __typename
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