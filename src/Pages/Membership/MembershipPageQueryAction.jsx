import { 
    CreateAsyncActionFromQuery,
    CreateAsyncQueryValidator
} from "@hrbolek/uoisfrontend-shared/src"

let MembershipQuery = `
    query MembershipPageQuery($id: UUID!) { 
        result: membershipById(id: $id) { 
            __typename
            id
            created
            lastchange
            valid
            startdate
            enddate
         ...MembershipScalarsFragment
         ...MembershipVectorsFragment    
        }
    }
`
const MembershipScalarsFragment = `
    fragment MembershipScalarsFragment on MembershipGQLModel { 
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
        user { 
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
        rbacobject { 
            __typename
            id
        }
    }
`

const MembershipVectorsFragment = `
    fragment MembershipVectorsFragment on MembershipGQLModel { 
        id
    }
`

MembershipQuery = MembershipQuery + MembershipScalarsFragment + MembershipVectorsFragment

export const MembershipPageQueryAction = CreateAsyncActionFromQuery(MembershipQuery)
export const MembershipPageQueryActionValidator = CreateAsyncQueryValidator({error: "Nepovedlo se načíst 'membership'", success: "Načtení 'membership' se povedlo"})