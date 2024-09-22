import { 
    CreateAsyncActionFromQuery,
    CreateAsyncQueryValidator
} from "@hrbolek/uoisfrontend-shared/src"

let QuestionQuery = `
    query QuestionPageQuery($id: UUID!) { 
        result: questionById(id: $id) { 
            __typename
            id
            name
            lastchange
            created
            order
         ...QuestionScalarsFragment
         ...QuestionVectorsFragment    
        }
    }
`
const QuestionScalarsFragment = `
    fragment QuestionScalarsFragment on QuestionGQLModel { 
        id
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
        survey { 
            __typename
            id
            name
            lastchange
            created
        }
        type { 
            __typename
            id
            name
            lastchange
            created
        }
    }
`

const QuestionVectorsFragment = `
    fragment QuestionVectorsFragment on QuestionGQLModel { 
        id
        answers { 
            __typename
            id
            lastchange
            created
            value
            aswered
            expired
        }
        values { 
            __typename
            id
            name
            lastchange
            created
            order
        }
    }
`

QuestionQuery = QuestionQuery + QuestionScalarsFragment + QuestionVectorsFragment

export const QuestionPageQueryAction = CreateAsyncActionFromQuery(QuestionQuery)
export const QuestionPageQueryActionValidator = CreateAsyncQueryValidator({error: "Nepovedlo se načíst 'question'", success: "Načtení 'question' se povedlo"})