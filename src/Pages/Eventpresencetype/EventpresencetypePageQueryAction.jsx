import { 
    CreateAsyncActionFromQuery,
    CreateAsyncQueryValidator
} from "@hrbolek/uoisfrontend-shared/src"

let EventpresencetypeQuery = `
    query EventpresencetypePageQuery($id: UUID!) { 
        result: eventPresenceTypeById(id: $id) { 
            id
            name
            nameEn
            lastchange
            created
         ...EventpresencetypeScalarsFragment
         ...EventpresencetypeVectorsFragment    
        }
    }
`
const EventpresencetypeScalarsFragment = `
    fragment EventpresencetypeScalarsFragment on PresenceTypeGQLModel { 
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

const EventpresencetypeVectorsFragment = `
    fragment EventpresencetypeVectorsFragment on PresenceTypeGQLModel { 
        id
    }
`

EventpresencetypeQuery = EventpresencetypeQuery + EventpresencetypeScalarsFragment + EventpresencetypeVectorsFragment

export const EventpresencetypePageQueryAction = CreateAsyncActionFromQuery(EventpresencetypeQuery)
export const EventpresencetypePageQueryActionValidator = CreateAsyncQueryValidator({error: "Nepovedlo se načíst 'eventpresencetype'", success: "Načtení 'eventpresencetype' se povedlo"})