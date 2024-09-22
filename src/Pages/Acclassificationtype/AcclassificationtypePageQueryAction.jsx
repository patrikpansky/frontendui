import { 
    CreateAsyncActionFromQuery,
    CreateAsyncQueryValidator
} from "@hrbolek/uoisfrontend-shared/src"

let AcclassificationtypeQuery = `
    query AcclassificationtypePageQuery($id: UUID!) { 
        result: acClassificationTypeById(id: $id) { 
            id
            name
            nameEn
            created
            lastchange
         ...AcclassificationtypeScalarsFragment
         ...AcclassificationtypeVectorsFragment    
        }
    }
`
const AcclassificationtypeScalarsFragment = `
    fragment AcclassificationtypeScalarsFragment on AcClassificationTypeGQLModel { 
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
    }
`

const AcclassificationtypeVectorsFragment = `
    fragment AcclassificationtypeVectorsFragment on AcClassificationTypeGQLModel { 
        id
    }
`

AcclassificationtypeQuery = AcclassificationtypeQuery + AcclassificationtypeScalarsFragment + AcclassificationtypeVectorsFragment

export const AcclassificationtypePageQueryAction = CreateAsyncActionFromQuery(AcclassificationtypeQuery)
export const AcclassificationtypePageQueryActionValidator = CreateAsyncQueryValidator({error: "Nepovedlo se načíst 'acclassificationtype'", success: "Načtení 'acclassificationtype' se povedlo"})