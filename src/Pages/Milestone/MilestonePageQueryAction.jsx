import { 
    CreateAsyncActionFromQuery,
    CreateAsyncQueryValidator
} from "@hrbolek/uoisfrontend-shared/src"

let MilestoneQuery = `
    query MilestonePageQuery($id: UUID!) { 
        result: milestoneById(id: $id) { 
            __typename
            id
            name
            startdate
            enddate
            lastchange
            created
            valid
         ...MilestoneScalarsFragment
         ...MilestoneVectorsFragment    
        }
    }
`
const MilestoneScalarsFragment = `
    fragment MilestoneScalarsFragment on MilestoneGQLModel { 
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
        rbacobject { 
            __typename
            id
        }
        project { 
            __typename
            id
            name
            startdate
            enddate
            created
            lastchange
            valid
        }
    }
`

const MilestoneVectorsFragment = `
    fragment MilestoneVectorsFragment on MilestoneGQLModel { 
        id
        previous { 
            __typename
            id
            name
            startdate
            enddate
            lastchange
            created
            valid
        }
        nexts { 
            __typename
            id
            name
            startdate
            enddate
            lastchange
            created
            valid
        }
    }
`

MilestoneQuery = MilestoneQuery + MilestoneScalarsFragment + MilestoneVectorsFragment

export const MilestonePageQueryAction = CreateAsyncActionFromQuery(MilestoneQuery)
export const MilestonePageQueryActionValidator = CreateAsyncQueryValidator({error: "Nepovedlo se načíst 'milestone'", success: "Načtení 'milestone' se povedlo"})