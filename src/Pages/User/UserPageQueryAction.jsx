import { 
    CreateAsyncActionFromQuery,
    CreateAsyncQueryValidator
} from "@hrbolek/uoisfrontend-shared/src"

let UserQuery = `
    query UserPageQuery($id: UUID!) { 
        result: userById(id: $id) { 
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
        rbacobject { 
            id
        }
    }
`

const UserVectorsFragment = `
    fragment UserVectorsFragment on UserGQLModel { 
        id
        events { 
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
            id
            lastchange
            created
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
        requests { 
            id
            name
            lastchange
            created
            nameEn
            gdpr
        }
        studies { 
            id
            created
            lastchange
            semester
        }
        classifications { 
            id
            created
            lastchange
            date
            order
        }
        plannedLessons { 
            id
            name
            lastchange
            created
            order
            length
        }
        authorPublications { 
            id
            name
            lastchange
            order
            share
            valid
        }
        answers { 
            id
            lastchange
            created
            value
            aswered
            expired
        }
        rolesOn { 
            id
            created
            lastchange
            valid
            startdate
            enddate
        }
        memberships { 
            id
            created
            lastchange
            valid
            startdate
            enddate
        }
        membership { 
            id
            created
            lastchange
            valid
            startdate
            enddate
        }
        roles { 
            id
            created
            lastchange
            valid
            startdate
            enddate
        }
        memberOf { 
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