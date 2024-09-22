import { 
    CreateAsyncActionFromQuery,
    CreateAsyncQueryValidator
} from "@hrbolek/uoisfrontend-shared/src"

let FacilityQuery = `
    query FacilityPageQuery($id: UUID!) { 
        result: facilityById(id: $id) { 
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
         ...FacilityScalarsFragment
         ...FacilityVectorsFragment    
        }
    }
`
const FacilityScalarsFragment = `
    fragment FacilityScalarsFragment on FacilityGQLModel { 
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
        type { 
            __typename
            id
            name
            nameEn
            lastchange
            created
        }
        eventState { 
            __typename
            id
            name
            nameEn
            lastchange
            created
        }
        masterFacility { 
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
        group { 
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

const FacilityVectorsFragment = `
    fragment FacilityVectorsFragment on FacilityGQLModel { 
        id
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
        subFacilities { 
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
        plannedLessons { 
            __typename
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