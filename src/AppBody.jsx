import { useState } from 'react';
import { useFreshItem } from './Hooks'
import { CreateAsyncActionFromQuery } from './Queries'
import { CreateAsyncQueryValidator } from './Store';
import { useDispatch, useSelector } from 'react-redux';

// realizovany dotaz
const UserPageQuery = `query ($skip: Int, $limit: Int, $where: UserInputWhereFilter, $orderby: String) {
    result: userPage(skip: $skip, limit: $limit, where: $where, orderby: $orderby) {
      __typename
      id
      name
      surname
      fullname
      email
    }
  }`

//pokud bezime "mimo deployment", musime se autorizovat, token lze vzit z cookies v systsemu a pouzit zde
const token = `eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiQmVhcmVyIiwiYWNjZXNzX3Rva2VuIjoiQUNDVC0xTTVQTkFiRmpHazIzVUtRcjkzYTZjRDBudnhPcG1ndCIsImV4cGlyZXNfaW4iOjM2MDAsInJlZnJlc2hfdG9rZW4iOiJSRUZULWp3aVJiWVFKajViYjRPOUFLU3ZCSGVNbkxKWWt4QmRhIiwidXNlcl9pZCI6IjJkOWRjNWNhLWE0YTItMTFlZC1iOWRmLTAyNDJhYzEyMDAwMyJ9.sCksLLkUPLDdN-04UVZjMiS7u9Isw44P8lYXhxM6evj9Z2I9QzXE4sSgEqzDO9QFJ9gowxsHnJWaGkicBXYozq-0O12wOaz4q8LWYnBufA6kSB299LnIndrgWse6q26vmMJcXAKaRNTL7aGy344pKc_2AqLzYhRFl4cT4Pg6a32MKTOgwZ188Y4-JKoLOYnDuyrayKbf9QhON_PjWDH9IRqXrI8dGYVCitvjlJ9Un2sUoRnBuqMouAFn_xAAVzudPVT1Ud1fTytSKuls4D3M2ZuINypG3gU4KnvsXUt3lDCYKnviR2Hn2D2NiqSwoyrSMsq28XFo8Wio4PnRoB7jeA`
const headers = {authorization: `Bearer ${token}`}

// ze stringu specifikujiciho query vytvori asynchronni action (dispatchable action)
const UserPageQueryAsyncAction = CreateAsyncActionFromQuery(UserPageQuery, {headers})

// validator je prostredek pro osetreni chyb, je konstruovan tak, aby se nemusel cely vytvaret pri kazdem renderingu
const validator = CreateAsyncQueryValidator({error: "Nepovedlo se načíst uživatele", success: "Načtení uživatelů se povedlo"})

const UsersTableHeader = ({where={}, onChange}) => {
    const [where_, setWhere] = useState({})
    const changeWhere = (attributename, value) => {

    }

    return (
        <thead>
            <tr>
                <th>#</th>
                <th>Jméno</th>
                <th>Příjmení</th>
                <th>Email</th>
            </tr>
            <tr>
                <th>#</th>
                <th>Jméno</th>
                <th>Příjmení</th>
                <th>Email</th>
            </tr>
        </thead>
    )
}

const UserTableRow = ({user, index}) => {
    return (
        <tr>
            <td>{index}</td>
            <td>{user.name}</td>
            <td>{user.surname}</td>
            <td>{user.email}</td>
        </tr>
    )
}

const UsersTable = ({users}) => {
    const [skip, setSkip] = useState(0)
    const [showButton, setShowButton] = useState(true)
    const limit = 10
    const dispatch = useDispatch()
    const [onResolve, onReject] = validator(useDispatch())
    const onReadmore = () => {
        setSkip(skip + limit)
        const result = dispatch(UserPageQueryAsyncAction({skip: skip+limit}))
        result.then(onResolve, onReject)
        .then(json => {
            console.log(json)
            const response = json?.data?.result || []
            if (response.length == 0) {
                setShowButton(false)
            }
        })
        
    }
    const footer = !showButton?"": (
        <tfoot>
                <tr>
                    <th colSpan={5}> 
                        <button className='btn btn-outline-primary' onClick={onReadmore}>Načíst další</button>
                    </th>
                </tr>
            </tfoot>
    )
    return (
        <table className='table table-striped table-bordered'>
            <UsersTableHeader />
            <tbody>
                {users.map(
                    (u, i) => <UserTableRow key={u.id} user={u} index={i} />
                )}
            </tbody>

            {footer}
        </table>
    )
}



// vlastni komponenta predstavujici stranku, v tomto pripade bez parametricka
export const AppBody = () => {
    // ziskame aktualizovana data ze serveru, pokud by se jednalo o jediny prvek (query by id), id by se uvedlo
    // protoze se jedna o "page", nebere se id v uvahu, proto "idonotcare"
    const [data_, thenable] = useFreshItem({id: "idontcare"}, UserPageQueryAsyncAction)
    // funkce, ktere se pouziji pro pripad uspesneho nacteni a pro pripad chybz
    const [onResolve, onReject] = validator(useDispatch())
    
    // thenable je Promise, takze lze pouzit jeji metodu then; 
    // teto metode predame funkce pro zpracovani spravneho (uspesneho) a chyboveho cteni
    thenable.then(onResolve, onReject)

    // protoze cteme celou page, vybereme data primo ze store
    const items = useSelector(state => state.items)
    // identifikujeme ty polozky, jejichz typ je "UserGQLModel", pozor na ten je potreba se v dotazech ptat
    // pokud by byl dotaz na jediny prvek, bylo by mozne vzit z promenne "data_"
    const data = Object.values(items).filter(i => i?.__typename === "UserGQLModel")
    if (data) {
        return (
            <div>
                <UsersTable users={data} />
            </div>
        )
    } else {
        return (
          <div className='card'>{JSON.stringify(items)}<br />Loading ...</div>
        )
    }
}
