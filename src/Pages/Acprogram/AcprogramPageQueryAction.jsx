import { 
    CreateAsyncActionFromQuery,
    CreateAsyncQueryValidator
} from "@hrbolek/uoisfrontend-shared/src"

let AcprogramQuery = `
    query AcprogramPageQuery($id: UUID!) { 
        result: acProgramById(id: $id) { 
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
        rbacobject { 
            id
        }
        type { 
            id
            name
            nameEn
            created
            lastchange
        }
        grantsGroup { 
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
            id
            name
            nameEn
            created
            lastchange
        }
        students { 
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