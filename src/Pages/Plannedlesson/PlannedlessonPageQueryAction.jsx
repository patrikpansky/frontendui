import { 
    CreateAsyncActionFromQuery,
    CreateAsyncQueryValidator
} from "@hrbolek/uoisfrontend-shared/src"

let PlannedlessonQuery = `
    query PlannedlessonPageQuery($id: UUID!) { 
        result: plannedLessonById(id: $id) { 
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
            id
        }
        type { 
            id
            name
            nameEn
            created
            lastchange
        }
        linkedTo { 
            id
            name
            lastchange
            created
            order
            length
        }
        event { 
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
            id
            name
            nameEn
            created
            lastchange
            order
        }
        semester { 
            id
            created
            lastchange
            order
        }
        plan { 
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
            id
            name
            lastchange
            created
            order
            length
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
        facilities { 
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