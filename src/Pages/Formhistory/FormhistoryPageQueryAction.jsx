import { 
    CreateAsyncActionFromQuery,
    CreateAsyncQueryValidator
} from "@hrbolek/uoisfrontend-shared/src"

let FormhistoryQuery = `
    query FormhistoryPageQuery($id: UUID!) { 
        result: formHistoryById(id: $id) { 
            __typename
            id
            name
            lastchange
            created
            nameEn
         ...FormhistoryScalarsFragment
         ...FormhistoryVectorsFragment    
        }
    }
`
const FormhistoryScalarsFragment = `
    fragment FormhistoryScalarsFragment on RequestHistoryGQLModel { 
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
        rbacobject { 
            __typename
            id
        }
        request { 
            __typename
            id
            name
            lastchange
            created
            nameEn
            gdpr
        }
        form { 
            __typename
            id
            name
            lastchange
            created
            nameEn
            valid
            status
        }
        state { 
            __typename
            id
            created
            lastchange
            name
            nameEn
            order
        }
    }
`

const FormhistoryVectorsFragment = `
    fragment FormhistoryVectorsFragment on RequestHistoryGQLModel { 
        id
    }
`

FormhistoryQuery = FormhistoryQuery + FormhistoryScalarsFragment + FormhistoryVectorsFragment

export const FormhistoryPageQueryAction = CreateAsyncActionFromQuery(FormhistoryQuery)
export const FormhistoryPageQueryActionValidator = CreateAsyncQueryValidator({error: "Nepovedlo se načíst 'formhistory'", success: "Načtení 'formhistory' se povedlo"})