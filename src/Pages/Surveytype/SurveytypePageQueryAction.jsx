import { 
    CreateAsyncActionFromQuery,
    CreateAsyncQueryValidator
} from "@hrbolek/uoisfrontend-shared/src"

let SurveytypeQuery = `
    query SurveytypePageQuery($id: UUID!) { 
        result: surveyTypeById(id: $id) { 
            __typename
            id
            name
            lastchange
            created
         ...SurveytypeScalarsFragment
         ...SurveytypeVectorsFragment    
        }
    }
`
const SurveytypeScalarsFragment = `
    fragment SurveytypeScalarsFragment on SurveyTypeGQLModel { 
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

const SurveytypeVectorsFragment = `
    fragment SurveytypeVectorsFragment on SurveyTypeGQLModel { 
        id
    }
`

SurveytypeQuery = SurveytypeQuery + SurveytypeScalarsFragment + SurveytypeVectorsFragment

export const SurveytypePageQueryAction = CreateAsyncActionFromQuery(SurveytypeQuery)
export const SurveytypePageQueryActionValidator = CreateAsyncQueryValidator({error: "Nepovedlo se načíst 'surveytype'", success: "Načtení 'surveytype' se povedlo"})