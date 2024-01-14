// import { useFreshItem } from "@hrbolek/uoisfrontend-shared/src"
import { useParams } from "react-router-dom"
import { useFreshItem, CreateAsyncQueryValidator, CreateAsyncActionFromQuery, useDispatch } from "@hrbolek/uoisfrontend-shared/src"
import { GroupLargeCard } from "../Components/Group/GroupLargeCard"

const query = `query ($id: UUID!) {
  result: groupById(id: $id) {
    __typename
    id
    name
    valid
    email
    lastchange
    
    grouptype {
      id
      name
    }
    
    mastergroup {
      __typename
      id
      name
      email
      lastchange
    }
    
    subgroups {
      __typename
      id
      name
      valid
      email
      lastchange
      
      grouptype {
        id
        name
      }
    }
    
    roles {
      id
      valid
      roletype {
        id
        name
      }
      user {
        id
        fullname
        email
      }
    }

    memberships {
      id
      valid
      user {
        id
        fullname
        email
      }
    }
    
  }
}`

const GroupAsyncAction = CreateAsyncActionFromQuery(query)
const validator = CreateAsyncQueryValidator({error: "Nepovedlo se načíst skupinu", success: "Načtení skupiny se povedlo"})
export const GroupPage = ()  => {
    const {id} = useParams()
    const [onResolve, onReject] = validator(useDispatch())
    const [group, groupPromise] = useFreshItem({id}, GroupAsyncAction)
    groupPromise.then(onResolve, onReject)
    
    // thenable je Promise, takze lze pouzit jeji metodu then; 
    // teto metode predame funkce pro zpracovani spravneho (uspesneho) a chyboveho cteni

    if (group) {
        return (
            <GroupLargeCard group={group} />
        )
    } else {
        return (
            <div>Loading...</div>
        )
    }
    
}