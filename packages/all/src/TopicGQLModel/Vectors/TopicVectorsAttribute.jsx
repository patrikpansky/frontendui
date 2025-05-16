import { useAsyncAction, createAsyncGraphQLAction, processVectorAttributeFromGraphQLResult } from "@hrbolek/uoisfrontend-gql-shared"
import { ErrorHandler, InfiniteScroll, LoadingSpinner } from "@hrbolek/uoisfrontend-shared"
import { use, useEffect } from "react";


/**
 * Inserts a VectorGQLModel item into a topic’s vectors array and dispatches an update.
 *
 * @param {Object} topic - The current topic object containing a `vectors` array.
 * @param {Object} vectorItem - The item to insert; must have `__typename === "VectorGQLModel"`.
 * @param {Function} dispatch - Redux dispatch function (or similar) to call the update action.
 */
const followUpTopicVectorItemInsert = (topic, vectorItem, dispatch) => {
    const { __typename } = vectorItem;
    if (__typename === "VectorGQLModel") {
        const { vectors, ...others } = topic;
        const newTopicVectorItems = [...vectors, vectorItem];
        const newTopic = { ...others, vectors: newTopicVectorItems };
        dispatch(ItemActions.item_update(newTopic));
    }
};

/**
 * Replaces an existing VectorGQLModel item in a topic’s vectors array and dispatches an update.
 *
 * @param {Object} topic - The current topic object containing a `vectors` array.
 * @param {Object} vectorItem - The updated item; must have `__typename === "VectorGQLModel"` and an `id` field matching an existing item.
 * @param {Function} dispatch - Redux dispatch function (or similar) to call the update action.
 */
const followUpTopicVectorItemUpdate = (topic, vectorItem, dispatch) => {
    const { __typename } = vectorItem;
    if (__typename === "VectorGQLModel") {
        const { vectors, ...others } = topic;
        const newTopicVectorItems = vectors.map(item =>
            item.id === vectorItem.id ? vectorItem : item
        );
        const newTopic = { ...others, vectors: newTopicVectorItems };
        dispatch(ItemActions.item_update(newTopic));
    }
};

/**
 * Removes a VectorGQLModel item from a topic’s vectors array by its `id` and dispatches an update.
 *
 * @param {Object} topic - The current topic object containing a `vectors` array.
 * @param {Object} vectorItem - The item to delete; must have `__typename === "VectorGQLModel"` and an `id` field.
 * @param {Function} dispatch - Redux dispatch function (or similar) to call the update action.
 */
const followUpTopicVectorItemDelete = (topic, vectorItem, dispatch) => {
    const { __typename } = vectorItem;
    if (__typename === "VectorGQLModel") {
        const { vectors, ...others } = topic;
        const newTopicVectorItems = vectors.filter(
            item => item.id !== vectorItem.id
        );
        const newTopic = { ...others, vectors: newTopicVectorItems };
        dispatch(ItemActions.item_update(newTopic));
    }
};

const TopicVectorsAttributeQuery = `
query TopicQueryRead($id: UUID!, $where: VectorInputFilter, $skip: Int, $limit: Int) {
    result: topicById(id: $id) {
        __typename
        id
        vectors(skip: $skip, limit: $limit, where: $where) {
            __typename
            id
        }
    }
}
`

const TopicVectorsAttributeAsyncAction = createAsyncGraphQLAction(
    TopicVectorsAttributeQuery,
    processVectorAttributeFromGraphQLResult("vectors")
)

/**
 * A component for displaying the `vectors` attribute of an topic entity.
 *
 * This component checks if the `vectors` attribute exists on the `topic` object. If `vectors` is undefined,
 * the component returns `null` and renders nothing. Otherwise, it maps over the `vectors` array and
 * displays a placeholder message and a JSON representation for each item in the `vectors`.
 *
 * @component
 * @param {Object} props - The props for the TopicVectorsAttribute component.
 * @param {Object} props.topic - The object representing the topic entity.
 * @param {Array} [props.topic.vectors] - An array of vectors items associated with the topic entity.
 * Each item is expected to have a unique `id` property.
 *
 * @returns {JSX.Element|null} A JSX element displaying the `vectors` items or `null` if the attribute is undefined.
 *
 * @example
 * // Example usage:
 * const topicEntity = { 
 *   vectors: [
 *     { id: 1, name: "Vector Item 1" }, 
 *     { id: 2, name: "Vector Item 2" }
 *   ] 
 * };
 *
 * <TopicVectorsAttribute topic={topicEntity} />
 */
export const TopicVectorsAttribute = ({topic, filter=Boolean}) => {
    const { vectors: unfiltered } = topic
    if (typeof unfiltered === 'undefined') return null
    const vectors = unfiltered.filter(filter)
    if (vectors.length === 0) return null
    return (
        <>
            {vectors.map(
                vector => <div id={vector.id} key={vector.id}>
                    {/* <VectorMediumCard vector={vector} /> */}
                    {/* <VectorLink vector={vector} /> */}
                    Probably {'<VectorMediumCard vector=\{vector\} />'} <br />
                    <pre>{JSON.stringify(vector, null, 4)}</pre>
                </div>
            )}
        </>
    )
}


export const TopicVectorsAttributeInfinite = ({topic}) => { 
    const {vectors} = topic

    return (
        <InfiniteScroll 
            Visualiser={'VectorMediumCard'} 
            actionParams={{skip: 0, limit: 10}}
            asyncAction={TopicVectorsAttributeAsyncAction}
        />
    )
}

/**
 * A lazy-loading component for displaying filtered `vectors` from a `topic` entity.
 *
 * This component uses the `TopicVectorsAttributeAsyncAction` to asynchronously fetch
 * the `topic.vectors` data. It shows a loading spinner while fetching, handles errors,
 * and filters the resulting list using a custom `filter` function (defaults to `Boolean` to remove falsy values).
 *
 * Each vector item is rendered as a `<div>` with its `id` as both the `key` and the `id` attribute,
 * and displays a formatted JSON preview using `<pre>`.
 *
 * @component
 * @param {Object} props - The properties object.
 * @param {Object} props.topic - The topic entity or identifying query variables used to fetch it.
 * @param {Function} [props.filter=Boolean] - A filtering function applied to the `vectors` array before rendering.
 *
 * @returns {JSX.Element} A rendered list of filtered vectors or a loading/error placeholder.
 *
 * @example
 * <TopicVectorsAttributeLazy topic={{ id: "abc123" }} />
 *
 * 
 * @example
 * <TopicVectorsAttributeLazy
 *   topic={{ id: "abc123" }}
 *   filter={(v) => v.status === "active"}
 * />
 */
export const TopicVectorsAttributeLazy = ({topic, filter=Boolean}) => {
    const {loading, error, entity, fetch} = useAsyncAction(TopicVectorsAttributeAsyncAction, topic, {deferred: true})
    useEffect(() => {
        fetch(topic)
    }, [topic])

    if (loading) return <LoadingSpinner />
    if (error) return <ErrorHandler errors={error} />

    return <TopicVectorsAttribute topic={entity} filter={filter} />    
}