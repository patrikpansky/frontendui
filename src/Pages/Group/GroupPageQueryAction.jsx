import { 
    CreateAsyncActionFromQuery,
    CreateAsyncQueryValidator
} from "@hrbolek/uoisfrontend-shared/src"

let GroupQuery = `
    query GroupPageQuery($id: UUID!) { 
        result: groupById(id: $id) { 
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
         ...GroupScalarsFragment
         ...GroupVectorsFragment    
        }
    }
`
const GroupScalarsFragment = `
    fragment GroupScalarsFragment on GroupGQLModel { 
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
        grouptype { 
            __typename
            id
            created
            lastchange
            name
            nameEn
        }
        type { 
            __typename
            id
            created
            lastchange
            name
            nameEn
        }
        mastergroup { 
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
        rbacobject { 
            __typename
            id
        }
    }
`

const GroupVectorsFragment = `
    fragment GroupVectorsFragment on GroupGQLModel { 
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
        plannedLessons { 
            __typename
            id
            name
            lastchange
            created
            order
            length
        }
        subgroups { 
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
            roles { 
                __typename
                id
                created
                lastchange
                valid
                startdate
                enddate
                roletype { id name }
                user { id fullname }
            }
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
        roles { 
            __typename
            id
            created
            lastchange
            valid
            startdate
            enddate
            roletype { id name }
            user { id fullname }
        }
    }
`

GroupQuery = GroupQuery + GroupScalarsFragment + GroupVectorsFragment

export const GroupPageQueryAction = CreateAsyncActionFromQuery(GroupQuery)
export const GroupPageQueryActionValidator = CreateAsyncQueryValidator({error: "Nepovedlo se načíst 'group'", success: "Načtení 'group' se povedlo"})