import { 
    CreateAsyncActionFromQuery,
    CreateAsyncQueryValidator
} from "@hrbolek/uoisfrontend-shared/src"

let ActopicQuery = `
    query ActopicPageQuery($id: UUID!) { 
        result: acTopicById(id: $id) { 
            id
            name
            nameEn
            created
            lastchange
            order
         ...ActopicScalarsFragment
         ...ActopicVectorsFragment    
        }
    }
`
const ActopicScalarsFragment = `
    fragment ActopicScalarsFragment on AcTopicGQLModel { 
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
        semester { 
            id
            created
            lastchange
            order
        }
    }
`

const ActopicVectorsFragment = `
    fragment ActopicVectorsFragment on AcTopicGQLModel { 
        id
        lessons { 
            id
            name
            nameEn
            created
            lastchange
            count
        }
    }
`

ActopicQuery = ActopicQuery + ActopicScalarsFragment + ActopicVectorsFragment

export const ActopicPageQueryAction = CreateAsyncActionFromQuery(ActopicQuery)
export const ActopicPageQueryActionValidator = CreateAsyncQueryValidator({error: "Nepovedlo se načíst 'actopic'", success: "Načtení 'actopic' se povedlo"})