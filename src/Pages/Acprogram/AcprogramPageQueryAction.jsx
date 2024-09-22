import { 
    CreateAsyncActionFromQuery,
    CreateAsyncQueryValidator
} from "@hrbolek/uoisfrontend-shared/src"

let AcprogramQuery = `
    query AcprogramPageQuery($id: UUID!) { 
        result: acProgramById(id: $id) { 
            __typename
            id
            name
            nameEn
            created
            lastchange
         ...AcprogramScalarsFragment
         ...AcprogramVectorsFragment    
        }
    }
`
const AcprogramScalarsFragment = `
    fragment AcprogramScalarsFragment on AcProgramGQLModel { 
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
        rbacobject { 
            __typename
            id
        }
        type { 
            __typename
            id
            name
            nameEn
            created
            lastchange
        }
        grantsGroup { 
            __typename
            id
            created
            lastchange
            name
            nameEn
            email
            abbreviation
            valid
            typeId
        }
        licencedGroup { 
            __typename
            id
            created
            lastchange
            name
            nameEn
            email
            abbreviation
            valid
            typeId
        }
    }
`

const AcprogramVectorsFragment = `
    fragment AcprogramVectorsFragment on AcProgramGQLModel { 
        id
        subjects { 
            __typename
            id
            name
            nameEn
            created
            lastchange
        }
        students { 
            __typename
            id
            created
            lastchange
            semester
        }
    }
`

AcprogramQuery = AcprogramQuery + AcprogramScalarsFragment + AcprogramVectorsFragment

export const AcprogramPageQueryAction = CreateAsyncActionFromQuery(AcprogramQuery)
export const AcprogramPageQueryActionValidator = CreateAsyncQueryValidator({error: "Nepovedlo se načíst 'acprogram'", success: "Načtení 'acprogram' se povedlo"})