import { 
    CreateAsyncActionFromQuery,
    CreateAsyncQueryValidator
} from "@hrbolek/uoisfrontend-shared/src"

let AuthorQuery = `
    query AuthorPageQuery($id: UUID!) { 
        result: authorById(id: $id) { 
            id
            name
            lastchange
            order
            share
            valid
         ...AuthorScalarsFragment
         ...AuthorVectorsFragment    
        }
    }
`
const AuthorScalarsFragment = `
    fragment AuthorScalarsFragment on PublicationAuthorGQLModel { 
        id
        user { 
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
        publication { 
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

const AuthorVectorsFragment = `
    fragment AuthorVectorsFragment on PublicationAuthorGQLModel { 
        id
    }
`

AuthorQuery = AuthorQuery + AuthorScalarsFragment + AuthorVectorsFragment

export const AuthorPageQueryAction = CreateAsyncActionFromQuery(AuthorQuery)
export const AuthorPageQueryActionValidator = CreateAsyncQueryValidator({error: "Nepovedlo se načíst 'author'", success: "Načtení 'author' se povedlo"})