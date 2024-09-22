import { 
    CreateAsyncActionFromQuery,
    CreateAsyncQueryValidator
} from "@hrbolek/uoisfrontend-shared/src"

let MilestoneQuery = `
    query MilestonePageQuery($id: UUID!) { 
        result: milestoneById(id: $id) { 
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
        rbacobject { 
            id
        }
        project { 
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
            id
            name
            startdate
            enddate
            lastchange
            created
            valid
        }
        nexts { 
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