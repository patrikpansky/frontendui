import { 
    CreateAsyncActionFromQuery,
    CreateAsyncQueryValidator
} from "@hrbolek/uoisfrontend-shared/src"

let StatementofworkQuery = `
    query StatementofworkPageQuery($id: UUID!) { 
        result: statementOfWorkById(id: $id) { 
            __typename
            id
            lastchange
            startdate
            enddate
            created
            valid
         ...StatementofworkScalarsFragment
         ...StatementofworkVectorsFragment    
        }
    }
`
const StatementofworkScalarsFragment = `
    fragment StatementofworkScalarsFragment on StatementOfWorkGQLModel { 
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
        event { 
            __typename
            id
            name
            nameEn
            lastchange
            created
            duration
            description
            place
            placeId
            startdate
            enddate
        }
    }
`

const StatementofworkVectorsFragment = `
    fragment StatementofworkVectorsFragment on StatementOfWorkGQLModel { 
        id
    }
`

StatementofworkQuery = StatementofworkQuery + StatementofworkScalarsFragment + StatementofworkVectorsFragment

export const StatementofworkPageQueryAction = CreateAsyncActionFromQuery(StatementofworkQuery)
export const StatementofworkPageQueryActionValidator = CreateAsyncQueryValidator({error: "Nepovedlo se načíst 'statementofwork'", success: "Načtení 'statementofwork' se povedlo"})