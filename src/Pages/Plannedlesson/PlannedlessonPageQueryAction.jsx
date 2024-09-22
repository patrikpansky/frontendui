import { 
    CreateAsyncActionFromQuery,
    CreateAsyncQueryValidator
} from "@hrbolek/uoisfrontend-shared/src"

let PlannedlessonQuery = `
    query PlannedlessonPageQuery($id: UUID!) { 
        result: plannedLessonById(id: $id) { 
            __typename
            id
            name
            lastchange
            created
            order
            length
         ...PlannedlessonScalarsFragment
         ...PlannedlessonVectorsFragment    
        }
    }
`
const PlannedlessonScalarsFragment = `
    fragment PlannedlessonScalarsFragment on PlannedLessonGQLModel { 
        id
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
        rbacObject { 
            __typename
            id
        }
        type { 
            __typename
            id
            name
            nameEn
            created
            lastchange
        }
        linkedTo { 
            __typename
            id
            name
            lastchange
            created
            order
            length
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
        topic { 
            __typename
            id
            name
            nameEn
            created
            lastchange
            order
        }
        semester { 
            __typename
            id
            created
            lastchange
            order
        }
        plan { 
            __typename
            id
            name
            lastchange
            created
        }
    }
`

const PlannedlessonVectorsFragment = `
    fragment PlannedlessonVectorsFragment on PlannedLessonGQLModel { 
        id
        linkedWith { 
            __typename
            id
            name
            lastchange
            created
            order
            length
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
        facilities { 
            __typename
            id
            name
            nameEn
            lastchange
            created
            label
            address
            valid
            capacity
            geometry
            geolocation
        }
    }
`

PlannedlessonQuery = PlannedlessonQuery + PlannedlessonScalarsFragment + PlannedlessonVectorsFragment

export const PlannedlessonPageQueryAction = CreateAsyncActionFromQuery(PlannedlessonQuery)
export const PlannedlessonPageQueryActionValidator = CreateAsyncQueryValidator({error: "Nepovedlo se načíst 'plannedlesson'", success: "Načtení 'plannedlesson' se povedlo"})