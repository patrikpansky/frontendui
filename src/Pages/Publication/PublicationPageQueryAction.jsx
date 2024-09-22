import { 
    CreateAsyncActionFromQuery,
    CreateAsyncQueryValidator
} from "@hrbolek/uoisfrontend-shared/src"

let PublicationQuery = `
    query PublicationPageQuery($id: UUID!) { 
        result: publicationById(id: $id) { 
            __typename
            id
            name
            created
            lastchange
            publishedDate
            place
            reference
            valid
         ...PublicationScalarsFragment
         ...PublicationVectorsFragment    
        }
    }
`
const PublicationScalarsFragment = `
    fragment PublicationScalarsFragment on PublicationGQLModel { 
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
        publicationtype { 
            __typename
            id
            name
            created
            lastchange
        }
    }
`

const PublicationVectorsFragment = `
    fragment PublicationVectorsFragment on PublicationGQLModel { 
        id
        authors { 
            __typename
            id
            name
            lastchange
            order
            share
            valid
        }
        subjects { 
            __typename
            id
            name
            nameEn
            created
            lastchange
        }
    }
`

PublicationQuery = PublicationQuery + PublicationScalarsFragment + PublicationVectorsFragment

export const PublicationPageQueryAction = CreateAsyncActionFromQuery(PublicationQuery)
export const PublicationPageQueryActionValidator = CreateAsyncQueryValidator({error: "Nepovedlo se načíst 'publication'", success: "Načtení 'publication' se povedlo"})