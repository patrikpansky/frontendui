import { 
    CreateAsyncActionFromQuery,
    CreateAsyncQueryValidator
} from "@hrbolek/uoisfrontend-shared/src"

let FacilityQuery = `
    query FacilityPageQuery($id: UUID!) { 
        result: facilityById(id: $id) { 
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
         ...FacilityScalarsFragment
         ...FacilityVectorsFragment    
        }
    }
`
const FacilityScalarsFragment = `
    fragment FacilityScalarsFragment on FacilityGQLModel { 
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
        type { 
            id
            name
            nameEn
            lastchange
            created
        }
        eventState { 
            id
            name
            nameEn
            lastchange
            created
        }
        masterFacility { 
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
        group { 
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

const FacilityVectorsFragment = `
    fragment FacilityVectorsFragment on FacilityGQLModel { 
        id
        externalIds { 
            id
            lastchange
            created
            innerId
            outerId
            typeName
            link
        }
        subFacilities { 
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
        plannedLessons { 
            id
            name
            lastchange
            created
            order
            length
        }
    }
`

FacilityQuery = FacilityQuery + FacilityScalarsFragment + FacilityVectorsFragment

export const FacilityPageQueryAction = CreateAsyncActionFromQuery(FacilityQuery)
export const FacilityPageQueryActionValidator = CreateAsyncQueryValidator({error: "Nepovedlo se načíst 'facility'", success: "Načtení 'facility' se povedlo"})