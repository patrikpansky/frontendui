import { 
    CreateAsyncActionFromQuery,
    CreateAsyncQueryValidator
} from "@hrbolek/uoisfrontend-shared/src"

let EventpresenceQuery = `
    query EventpresencePageQuery($id: UUID!) { 
        result: eventPresenceById(id: $id) { 
            __typename
            id
            lastchange
            created
         ...EventpresenceScalarsFragment
         ...EventpresenceVectorsFragment    
        }
    }
`
const EventpresenceScalarsFragment = `
    fragment EventpresenceScalarsFragment on PresenceGQLModel { 
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
        presenceType { 
            __typename
            id
            name
            nameEn
            lastchange
            created
        }
        invitationType { 
            __typename
            id
            name
            nameEn
            lastchange
            created
        }
        user { 
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
        event { 
            __typename
            id
            name
            nameEn
            lastchange
            created
            duration
            description
            place
            placeId
            startdate
            enddate
        }
    }
`

const EventpresenceVectorsFragment = `
    fragment EventpresenceVectorsFragment on PresenceGQLModel { 
        id
    }
`

EventpresenceQuery = EventpresenceQuery + EventpresenceScalarsFragment + EventpresenceVectorsFragment

export const EventpresencePageQueryAction = CreateAsyncActionFromQuery(EventpresenceQuery)
export const EventpresencePageQueryActionValidator = CreateAsyncQueryValidator({error: "Nepovedlo se načíst 'eventpresence'", success: "Načtení 'eventpresence' se povedlo"})