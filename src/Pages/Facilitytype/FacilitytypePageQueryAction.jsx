import { 
    CreateAsyncActionFromQuery,
    CreateAsyncQueryValidator
} from "@hrbolek/uoisfrontend-shared/src"

let FacilitytypeQuery = `
    query FacilitytypePageQuery($id: UUID!) { 
        result: facilityTypeById(id: $id) { 
            __typename
            id
            name
            nameEn
            lastchange
            created
         ...FacilitytypeScalarsFragment
         ...FacilitytypeVectorsFragment    
        }
    }
`
const FacilitytypeScalarsFragment = `
    fragment FacilitytypeScalarsFragment on FacilityTypeGQLModel { 
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

const FacilitytypeVectorsFragment = `
    fragment FacilitytypeVectorsFragment on FacilityTypeGQLModel { 
        id
    }
`

FacilitytypeQuery = FacilitytypeQuery + FacilitytypeScalarsFragment + FacilitytypeVectorsFragment

export const FacilitytypePageQueryAction = CreateAsyncActionFromQuery(FacilitytypeQuery)
export const FacilitytypePageQueryActionValidator = CreateAsyncQueryValidator({error: "Nepovedlo se načíst 'facilitytype'", success: "Načtení 'facilitytype' se povedlo"})