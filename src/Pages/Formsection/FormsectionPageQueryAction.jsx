import { 
    CreateAsyncActionFromQuery,
    CreateAsyncQueryValidator
} from "@hrbolek/uoisfrontend-shared/src"

let FormsectionQuery = `
    query FormsectionPageQuery($id: UUID!) { 
        result: formSectionById(id: $id) { 
            __typename
            id
            name
            lastchange
            created
            nameEn
            order
         ...FormsectionScalarsFragment
         ...FormsectionVectorsFragment    
        }
    }
`
const FormsectionScalarsFragment = `
    fragment FormsectionScalarsFragment on FormSectionGQLModel { 
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
    }
`

const FormsectionVectorsFragment = `
    fragment FormsectionVectorsFragment on FormSectionGQLModel { 
        id
        parts { 
            __typename
            id
            name
            lastchange
            created
            nameEn
            order
        }
    }
`

FormsectionQuery = FormsectionQuery + FormsectionScalarsFragment + FormsectionVectorsFragment

export const FormsectionPageQueryAction = CreateAsyncActionFromQuery(FormsectionQuery)
export const FormsectionPageQueryActionValidator = CreateAsyncQueryValidator({error: "Nepovedlo se načíst 'formsection'", success: "Načtení 'formsection' se povedlo"})