import { 
    CreateAsyncActionFromQuery,
    CreateAsyncQueryValidator
} from "@hrbolek/uoisfrontend-shared/src"

let ProjectQuery = `
    query ProjectPageQuery($id: UUID!) { 
        result: projectById(id: $id) { 
            __typename
            id
            name
            startdate
            enddate
            created
            lastchange
            valid
         ...ProjectScalarsFragment
         ...ProjectVectorsFragment    
        }
    }
`
const ProjectScalarsFragment = `
    fragment ProjectScalarsFragment on ProjectGQLModel { 
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
        rbacobject { 
            __typename
            id
        }
        projectType { 
            __typename
            id
            name
            nameEn
            created
            lastchange
            valid
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
        team { 
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

const ProjectVectorsFragment = `
    fragment ProjectVectorsFragment on ProjectGQLModel { 
        id
        finances { 
            __typename
            id
            name
            amount
            lastchange
            created
            valid
        }
        milestones { 
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

ProjectQuery = ProjectQuery + ProjectScalarsFragment + ProjectVectorsFragment

export const ProjectPageQueryAction = CreateAsyncActionFromQuery(ProjectQuery)
export const ProjectPageQueryActionValidator = CreateAsyncQueryValidator({error: "Nepovedlo se načíst 'project'", success: "Načtení 'project' se povedlo"})