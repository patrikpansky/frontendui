import { 
    CreateAsyncActionFromQuery,
    CreateAsyncQueryValidator
} from "@hrbolek/uoisfrontend-shared/src"

let RequestQuery = `
    query RequestPageQuery($id: UUID!) { 
        result: requestById(id: $id) { 
            id
            name
            lastchange
            created
            nameEn
            gdpr
         ...RequestScalarsFragment
         ...RequestVectorsFragment    
        }
    }
`
const RequestScalarsFragment = `
    fragment RequestScalarsFragment on RequestGQLModel { 
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
        creator { 
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
        state { 
            id
            created
            lastchange
            name
            nameEn
            order
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
    }
`

const RequestVectorsFragment = `
    fragment RequestVectorsFragment on RequestGQLModel { 
        id
        histories { 
            id
            name
            lastchange
            created
            nameEn
        }
    }
`

RequestQuery = RequestQuery + RequestScalarsFragment + RequestVectorsFragment

export const RequestPageQueryAction = CreateAsyncActionFromQuery(RequestQuery)
export const RequestPageQueryActionValidator = CreateAsyncQueryValidator({error: "Nepovedlo se načíst 'request'", success: "Načtení 'request' se povedlo"})