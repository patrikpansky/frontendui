import { 
    CreateAsyncActionFromQuery,
    CreateAsyncQueryValidator
} from "@hrbolek/uoisfrontend-shared/src"

let SurveyQuery = `
    query SurveyPageQuery($id: UUID!) { 
        result: surveyById(id: $id) { 
            __typename
            id
            name
            lastchange
            created
         ...SurveyScalarsFragment
         ...SurveyVectorsFragment    
        }
    }
`
const SurveyScalarsFragment = `
    fragment SurveyScalarsFragment on SurveyGQLModel { 
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
    }
`

const SurveyVectorsFragment = `
    fragment SurveyVectorsFragment on SurveyGQLModel { 
        id
        questions { 
            __typename
            id
            name
            lastchange
            created
            order
        }
    }
`

SurveyQuery = SurveyQuery + SurveyScalarsFragment + SurveyVectorsFragment

export const SurveyPageQueryAction = CreateAsyncActionFromQuery(SurveyQuery)
export const SurveyPageQueryActionValidator = CreateAsyncQueryValidator({error: "Nepovedlo se načíst 'survey'", success: "Načtení 'survey' se povedlo"})