import { 
    CreateAsyncActionFromQuery,
    CreateAsyncQueryValidator
} from "@hrbolek/uoisfrontend-shared/src"

let GroupQuery = `
    query GroupPageQuery($id: UUID!) { 
        result: groupById(id: $id) { 
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
        grouptype { 
            id
            created
            lastchange
            name
            nameEn
        }
        type { 
            id
            created
            lastchange
            name
            nameEn
        }
        mastergroup { 
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
            id
        }
    }
`

const GroupVectorsFragment = `
    fragment GroupVectorsFragment on GroupGQLModel { 
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
        externalIds { 
            id
            lastchange
            created
            innerId
            outerId
            typeName
            link
        }
        plannedLessons { 
            id
            name
            lastchange
            created
            order
            length
        }
        subgroups { 
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
        memberships { 
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
    }
`

GroupQuery = GroupQuery + GroupScalarsFragment + GroupVectorsFragment

export const GroupPageQueryAction = CreateAsyncActionFromQuery(GroupQuery)
export const GroupPageQueryActionValidator = CreateAsyncQueryValidator({error: "Nepovedlo se načíst 'group'", success: "Načtení 'group' se povedlo"})