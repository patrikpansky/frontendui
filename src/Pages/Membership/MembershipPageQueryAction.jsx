import { 
    CreateAsyncActionFromQuery,
    CreateAsyncQueryValidator
} from "@hrbolek/uoisfrontend-shared/src"

let MembershipQuery = `
    query MembershipPageQuery($id: UUID!) { 
        result: membershipById(id: $id) { 
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
        user { 
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

const MembershipVectorsFragment = `
    fragment MembershipVectorsFragment on MembershipGQLModel { 
        id
    }
`

MembershipQuery = MembershipQuery + MembershipScalarsFragment + MembershipVectorsFragment

export const MembershipPageQueryAction = CreateAsyncActionFromQuery(MembershipQuery)
export const MembershipPageQueryActionValidator = CreateAsyncQueryValidator({error: "Nepovedlo se načíst 'membership'", success: "Načtení 'membership' se povedlo"})