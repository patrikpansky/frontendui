import { 
    CreateAsyncActionFromQuery,
    CreateAsyncQueryValidator
} from "@hrbolek/uoisfrontend-shared/src"

let UserQuery = `
    query UserPageQuery($id: UUID!) { 
        result: userById(id: $id) { 
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
         ...UserScalarsFragment
         ...UserVectorsFragment    
        }
    }
`
const UserScalarsFragment = `
    fragment UserScalarsFragment on UserGQLModel { 
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
        rbacobject { 
            __typename
            id
        }
    }
`

const UserVectorsFragment = `
    fragment UserVectorsFragment on UserGQLModel { 
        id
        events { 
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
        presences { 
            __typename
            id
            lastchange
            created
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
        requests { 
            __typename
            id
            name
            lastchange
            created
            nameEn
            gdpr
        }
        studies { 
            __typename
            id
            created
            lastchange
            semester
        }
        classifications { 
            __typename
            id
            created
            lastchange
            date
            order
        }
        plannedLessons { 
            __typename
            id
            name
            lastchange
            created
            order
            length
        }
        authorPublications { 
            __typename
            id
            name
            lastchange
            order
            share
            valid
        }
        answers { 
            __typename
            id
            lastchange
            created
            value
            aswered
            expired
        }
        rolesOn { 
            __typename
            id
            created
            lastchange
            valid
            startdate
            enddate
        }
        memberships { 
            __typename
            id
            created
            lastchange
            valid
            startdate
            enddate
        }
        membership { 
            __typename
            id
            created
            lastchange
            valid
            startdate
            enddate
            group { id name grouptype { name }}
        }
        roles { 
            __typename
            id
            created
            lastchange
            valid
            startdate
            enddate
        }
        memberOf { 
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
    }
`

UserQuery = UserQuery + UserScalarsFragment + UserVectorsFragment

export const UserPageQueryAction = CreateAsyncActionFromQuery(UserQuery)
export const UserPageQueryActionValidator = CreateAsyncQueryValidator({error: "Nepovedlo se načíst 'user'", success: "Načtení 'user' se povedlo"})