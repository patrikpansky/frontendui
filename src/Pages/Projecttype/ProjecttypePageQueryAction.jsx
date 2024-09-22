import { 
    CreateAsyncActionFromQuery,
    CreateAsyncQueryValidator
} from "@hrbolek/uoisfrontend-shared/src"

let ProjecttypeQuery = `
    query ProjecttypePageQuery($id: UUID!) { 
        result: projectTypeById(id: $id) { 
            __typename
            id
            name
            nameEn
            created
            lastchange
            valid
         ...ProjecttypeScalarsFragment
         ...ProjecttypeVectorsFragment    
        }
    }
`
const ProjecttypeScalarsFragment = `
    fragment ProjecttypeScalarsFragment on ProjectTypeGQLModel { 
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
        category { 
            __typename
            id
            name
            nameEn
            lastchange
            created
        }
    }
`

const ProjecttypeVectorsFragment = `
    fragment ProjecttypeVectorsFragment on ProjectTypeGQLModel { 
        id
        projects { 
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

ProjecttypeQuery = ProjecttypeQuery + ProjecttypeScalarsFragment + ProjecttypeVectorsFragment

export const ProjecttypePageQueryAction = CreateAsyncActionFromQuery(ProjecttypeQuery)
export const ProjecttypePageQueryActionValidator = CreateAsyncQueryValidator({error: "Nepovedlo se načíst 'projecttype'", success: "Načtení 'projecttype' se povedlo"})