import { 
    CreateAsyncActionFromQuery,
    CreateAsyncQueryValidator
} from "@hrbolek/uoisfrontend-shared/src"

let EventQuery = `
    query EventPageQuery($id: UUID!) { 
        result: eventById(id: $id) { 
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
         ...EventScalarsFragment
         ...EventVectorsFragment    
        }
    }
`
const EventScalarsFragment = `
    fragment EventScalarsFragment on EventGQLModel { 
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
        rbac { 
            __typename
            id
        }
        eventType { 
            __typename
            id
            name
            nameEn
            lastchange
            created
        }
        masterEvent { 
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

const EventVectorsFragment = `
    fragment EventVectorsFragment on EventGQLModel { 
        id
        groups { 
            __typename
            id
            created
            lastchange
            name
            nameEn
            email
            abbreviation
            valid
            typeId
        }
        users { 
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
        presences { 
            __typename
            id
            lastchange
            created
        }
        subEvents { 
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
        externalIds { 
            __typename
            id
            lastchange
            created
            innerId
            outerId
            typeName
            link
        }
    }
`

EventQuery = EventQuery + EventScalarsFragment + EventVectorsFragment

export const EventPageQueryAction = CreateAsyncActionFromQuery(EventQuery)
export const EventPageQueryActionValidator = CreateAsyncQueryValidator({error: "Nepovedlo se načíst 'event'", success: "Načtení 'event' se povedlo"})