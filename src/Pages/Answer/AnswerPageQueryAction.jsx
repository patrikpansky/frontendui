import { 
    CreateAsyncActionFromQuery,
    CreateAsyncQueryValidator
} from "@hrbolek/uoisfrontend-shared/src"

let AnswerQuery = `
    query AnswerPageQuery($id: UUID!) { 
        result: answerById(id: $id) { 
            id
            lastchange
            created
            value
            aswered
            expired
         ...AnswerScalarsFragment
         ...AnswerVectorsFragment    
        }
    }
`
const AnswerScalarsFragment = `
    fragment AnswerScalarsFragment on AnswerGQLModel { 
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
        question { 
            id
            name
            lastchange
            created
            order
        }
    }
`

const AnswerVectorsFragment = `
    fragment AnswerVectorsFragment on AnswerGQLModel { 
        id
    }
`

AnswerQuery = AnswerQuery + AnswerScalarsFragment + AnswerVectorsFragment

export const AnswerPageQueryAction = CreateAsyncActionFromQuery(AnswerQuery)
export const AnswerPageQueryActionValidator = CreateAsyncQueryValidator({error: "Nepovedlo se načíst 'answer'", success: "Načtení 'answer' se povedlo"})