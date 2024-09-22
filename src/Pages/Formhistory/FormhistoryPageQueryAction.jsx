import { 
    CreateAsyncActionFromQuery,
    CreateAsyncQueryValidator
} from "@hrbolek/uoisfrontend-shared/src"

let FormhistoryQuery = `
    query FormhistoryPageQuery($id: UUID!) { 
        result: formHistoryById(id: $id) { 
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
        rbacobject { 
            id
        }
        request { 
            id
            name
            lastchange
            created
            nameEn
            gdpr
        }
        form { 
            id
            name
            lastchange
            created
            nameEn
            valid
            status
        }
        state { 
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