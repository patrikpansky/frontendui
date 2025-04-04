import { AppCanvas, createAsyncGraphQLAction, useAsyncAction } from "@hrbolek/uoisfrontend-gql-shared";

const Value = ({ value }) => {
    return <span>{value}</span>;
};

const Name = ({ name }) => {
    return <span>{name}</span>;
};

const readUserUpdateAsyncAction = createAsyncGraphQLAction(`{
    UserPage {
        __typename
        id
        name
        surname
    }
}`);

export const firstEntity = () => {
    const { loading, error, entity, dispatchResult } = useAsyncAction(readUserUpdateAsyncAction, {});

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    return (
        <div>
            <p>User:</p>
            <pre>{JSON.stringify(dispatchResult, null, 2)}</pre>
        </div>
    );
};