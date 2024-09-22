import { 
    CreateAsyncActionFromQuery,
    CreateAsyncQueryValidator
} from "@hrbolek/uoisfrontend-shared/src"

let EventinvitationtypeQuery = `
    query EventinvitationtypePageQuery($id: UUID!) { 
        result: eventInvitationTypeById(id: $id) { 
            __typename
            id
            name
            nameEn
            lastchange
            created
         ...EventinvitationtypeScalarsFragment
         ...EventinvitationtypeVectorsFragment    
        }
    }
`
const EventinvitationtypeScalarsFragment = `
    fragment EventinvitationtypeScalarsFragment on InvitationTypeGQLModel { 
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

const EventinvitationtypeVectorsFragment = `
    fragment EventinvitationtypeVectorsFragment on InvitationTypeGQLModel { 
        id
    }
`

EventinvitationtypeQuery = EventinvitationtypeQuery + EventinvitationtypeScalarsFragment + EventinvitationtypeVectorsFragment

export const EventinvitationtypePageQueryAction = CreateAsyncActionFromQuery(EventinvitationtypeQuery)
export const EventinvitationtypePageQueryActionValidator = CreateAsyncQueryValidator({error: "Nepovedlo se načíst 'eventinvitationtype'", success: "Načtení 'eventinvitationtype' se povedlo"})