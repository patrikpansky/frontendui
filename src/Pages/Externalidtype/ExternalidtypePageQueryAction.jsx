import { 
    CreateAsyncActionFromQuery,
    CreateAsyncQueryValidator
} from "@hrbolek/uoisfrontend-shared/src"

let ExternalidtypeQuery = `
    query ExternalidtypePageQuery($id: UUID!) { 
        result: externalidtypeById(id: $id) { 
            id
            name
            nameEn
            lastchange
            created
         ...ExternalidtypeScalarsFragment
         ...ExternalidtypeVectorsFragment    
        }
    }
`
const ExternalidtypeScalarsFragment = `
    fragment ExternalidtypeScalarsFragment on ExternalIdTypeGQLModel { 
        id
        changedBy { 
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
        createdBy { 
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
        category { 
            id
            name
            nameEn
            lastchange
            created
        }
    }
`

const ExternalidtypeVectorsFragment = `
    fragment ExternalidtypeVectorsFragment on ExternalIdTypeGQLModel { 
        id
    }
`

ExternalidtypeQuery = ExternalidtypeQuery + ExternalidtypeScalarsFragment + ExternalidtypeVectorsFragment

export const ExternalidtypePageQueryAction = CreateAsyncActionFromQuery(ExternalidtypeQuery)
export const ExternalidtypePageQueryActionValidator = CreateAsyncQueryValidator({error: "Nepovedlo se načíst 'externalidtype'", success: "Načtení 'externalidtype' se povedlo"})