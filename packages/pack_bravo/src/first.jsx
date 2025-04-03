import { AppCanvas, createAsyncGraphQLAction, useAsyncAction } from "@hrbolek/uoisfrontend-gql-shared";

const Value = ( { value } ) => {
    return <span>{value}</span>;
}
const Name = ( { name } ) => {
    return <span>{name}</span>;
}

const readUserUpdateAsyncAction = createAsyncGraphQLAction(` {
    UserPage {
        __typename
        id
        name
        surname
    }
}` )

export const firstEntity = () => {
    const { loading, error, enitity, dispatchResult } = useAsyncAction( readUserUpdateAsyncAction, { });

    if ( loading ) return <p>Loading...</p>;
    return <div>User: </div>{JSON.stringify(dispatchResult)}</div></div>;