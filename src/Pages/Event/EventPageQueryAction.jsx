import { 
    CreateAsyncActionFromQuery,
    CreateAsyncQueryValidator
} from "@hrbolek/uoisfrontend-shared/src"

let EventQuery = `
    query EventPageQuery($id: UUID!) { 
        result: eventById(id: $id) { 
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
        rbac { 
            id
        }
        eventType { 
            id
            name
            nameEn
            lastchange
            created
        }
        masterEvent { 
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
            id
            lastchange
            created
        }
        subEvents { 
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