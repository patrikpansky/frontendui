import { 
    CreateAsyncActionFromQuery,
    CreateAsyncQueryValidator
} from "@hrbolek/uoisfrontend-shared/src"

let ExternalidtypeQuery = `
    query ExternalidtypePageQuery($id: UUID!) { 
        result: externalidtypeById(id: $id) { 
            __typename
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
        createdBy { 
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
        category { 
            __typename
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