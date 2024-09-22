import { 
    CreateAsyncActionFromQuery,
    CreateAsyncQueryValidator
} from "@hrbolek/uoisfrontend-shared/src"

let QuestiontypeQuery = `
    query QuestiontypePageQuery($id: UUID!) { 
        result: questionTypeById(id: $id) { 
            id
            name
            lastchange
            created
         ...QuestiontypeScalarsFragment
         ...QuestiontypeVectorsFragment    
        }
    }
`
const QuestiontypeScalarsFragment = `
    fragment QuestiontypeScalarsFragment on QuestionTypeGQLModel { 
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
    }
`

const QuestiontypeVectorsFragment = `
    fragment QuestiontypeVectorsFragment on QuestionTypeGQLModel { 
        id
    }
`

QuestiontypeQuery = QuestiontypeQuery + QuestiontypeScalarsFragment + QuestiontypeVectorsFragment

export const QuestiontypePageQueryAction = CreateAsyncActionFromQuery(QuestiontypeQuery)
export const QuestiontypePageQueryActionValidator = CreateAsyncQueryValidator({error: "Nepovedlo se načíst 'questiontype'", success: "Načtení 'questiontype' se povedlo"})