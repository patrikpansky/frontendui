import { 
    CreateAsyncActionFromQuery,
    CreateAsyncQueryValidator
} from "@hrbolek/uoisfrontend-shared/src"

let QuestionQuery = `
    query QuestionPageQuery($id: UUID!) { 
        result: questionById(id: $id) { 
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
            id
            name
            lastchange
            created
        }
        type { 
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
            id
            lastchange
            created
            value
            aswered
            expired
        }
        values { 
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