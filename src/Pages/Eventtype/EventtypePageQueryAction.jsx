import { 
    CreateAsyncActionFromQuery,
    CreateAsyncQueryValidator
} from "@hrbolek/uoisfrontend-shared/src"

let EventtypeQuery = `
    query EventtypePageQuery($id: UUID!) { 
        result: eventTypeById(id: $id) { 
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