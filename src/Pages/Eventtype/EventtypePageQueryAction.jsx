import { 
    CreateAsyncActionFromQuery,
    CreateAsyncQueryValidator
} from "@hrbolek/uoisfrontend-shared/src"

let EventtypeQuery = `
    query EventtypePageQuery($id: UUID!) { 
        result: eventTypeById(id: $id) { 
            __typename
            id
            name
            nameEn
            lastchange
            created
         ...EventtypeScalarsFragment
         ...EventtypeVectorsFragment    
        }
    }
`
const EventtypeScalarsFragment = `
    fragment EventtypeScalarsFragment on EventTypeGQLModel { 
        id
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
    }
`

const EventtypeVectorsFragment = `
    fragment EventtypeVectorsFragment on EventTypeGQLModel { 
        id
    }
`

EventtypeQuery = EventtypeQuery + EventtypeScalarsFragment + EventtypeVectorsFragment

export const EventtypePageQueryAction = CreateAsyncActionFromQuery(EventtypeQuery)
export const EventtypePageQueryActionValidator = CreateAsyncQueryValidator({error: "Nepovedlo se načíst 'eventtype'", success: "Načtení 'eventtype' se povedlo"})