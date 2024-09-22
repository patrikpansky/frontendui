import { 
    CreateAsyncActionFromQuery,
    CreateAsyncQueryValidator
} from "@hrbolek/uoisfrontend-shared/src"

let PublicationtypeQuery = `
    query PublicationtypePageQuery($id: UUID!) { 
        result: publicationTypeById(id: $id) { 
            id
            name
            created
            lastchange
         ...PublicationtypeScalarsFragment
         ...PublicationtypeVectorsFragment    
        }
    }
`
const PublicationtypeScalarsFragment = `
    fragment PublicationtypeScalarsFragment on PublicationTypeGQLModel { 
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

const PublicationtypeVectorsFragment = `
    fragment PublicationtypeVectorsFragment on PublicationTypeGQLModel { 
        id
        publications { 
            id
            name
            created
            lastchange
            publishedDate
            place
            reference
            valid
        }
    }
`

PublicationtypeQuery = PublicationtypeQuery + PublicationtypeScalarsFragment + PublicationtypeVectorsFragment

export const PublicationtypePageQueryAction = CreateAsyncActionFromQuery(PublicationtypeQuery)
export const PublicationtypePageQueryActionValidator = CreateAsyncQueryValidator({error: "Nepovedlo se načíst 'publicationtype'", success: "Načtení 'publicationtype' se povedlo"})