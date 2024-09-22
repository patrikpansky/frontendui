import { 
    CreateAsyncActionFromQuery,
    CreateAsyncQueryValidator
} from "@hrbolek/uoisfrontend-shared/src"

let ProjecttypeQuery = `
    query ProjecttypePageQuery($id: UUID!) { 
        result: projectTypeById(id: $id) { 
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
        rbacobject { 
            id
        }
        category { 
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