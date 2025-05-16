import { useAsyncAction, createAsyncGraphQLAction, processVectorAttributeFromGraphQLResult } from "@hrbolek/uoisfrontend-gql-shared"
import { ErrorHandler, InfiniteScroll, LoadingSpinner } from "@hrbolek/uoisfrontend-shared"
import { use, useEffect } from "react";


/**
 * Inserts a LessonGQLModel item into a topic’s lessons array and dispatches an update.
 *
 * @param {Object} topic - The current topic object containing a `lessons` array.
 * @param {Object} lessonItem - The item to insert; must have `__typename === "LessonGQLModel"`.
 * @param {Function} dispatch - Redux dispatch function (or similar) to call the update action.
 */
const followUpTopicLessonItemInsert = (topic, lessonItem, dispatch) => {
    const { __typename } = lessonItem;
    if (__typename === "LessonGQLModel") {
        const { lessons, ...others } = topic;
        const newTopicLessonItems = [...lessons, lessonItem];
        const newTopic = { ...others, lessons: newTopicLessonItems };
        dispatch(ItemActions.item_update(newTopic));
    }
};

/**
 * Replaces an existing LessonGQLModel item in a topic’s lessons array and dispatches an update.
 *
 * @param {Object} topic - The current topic object containing a `lessons` array.
 * @param {Object} lessonItem - The updated item; must have `__typename === "LessonGQLModel"` and an `id` field matching an existing item.
 * @param {Function} dispatch - Redux dispatch function (or similar) to call the update action.
 */
const followUpTopicLessonItemUpdate = (topic, lessonItem, dispatch) => {
    const { __typename } = lessonItem;
    if (__typename === "LessonGQLModel") {
        const { lessons, ...others } = topic;
        const newTopicLessonItems = lessons.map(item =>
            item.id === lessonItem.id ? lessonItem : item
        );
        const newTopic = { ...others, lessons: newTopicLessonItems };
        dispatch(ItemActions.item_update(newTopic));
    }
};

/**
 * Removes a LessonGQLModel item from a topic’s lessons array by its `id` and dispatches an update.
 *
 * @param {Object} topic - The current topic object containing a `lessons` array.
 * @param {Object} lessonItem - The item to delete; must have `__typename === "LessonGQLModel"` and an `id` field.
 * @param {Function} dispatch - Redux dispatch function (or similar) to call the update action.
 */
const followUpTopicLessonItemDelete = (topic, lessonItem, dispatch) => {
    const { __typename } = lessonItem;
    if (__typename === "LessonGQLModel") {
        const { lessons, ...others } = topic;
        const newTopicLessonItems = lessons.filter(
            item => item.id !== lessonItem.id
        );
        const newTopic = { ...others, lessons: newTopicLessonItems };
        dispatch(ItemActions.item_update(newTopic));
    }
};

const TopicLessonsAttributeQuery = `
query TopicQueryRead($id: UUID!, $where: LessonInputFilter, $skip: Int, $limit: Int) {
    result: topicById(id: $id) {
        __typename
        id
        lessons(skip: $skip, limit: $limit, where: $where) {
            __typename
            id
            lastchange
            created
            createdbyId
            changedbyId
            rbacobjectId
            topicId
            typeId
        }
    }
}
`

const TopicLessonsAttributeAsyncAction = createAsyncGraphQLAction(
    TopicLessonsAttributeQuery,
    processVectorAttributeFromGraphQLResult("lessons")
)

/**
 * A component for displaying the `lessons` attribute of an topic entity.
 *
 * This component checks if the `lessons` attribute exists on the `topic` object. If `lessons` is undefined,
 * the component returns `null` and renders nothing. Otherwise, it maps over the `lessons` array and
 * displays a placeholder message and a JSON representation for each item in the `lessons`.
 *
 * @component
 * @param {Object} props - The props for the TopicLessonsAttribute component.
 * @param {Object} props.topic - The object representing the topic entity.
 * @param {Array} [props.topic.lessons] - An array of lessons items associated with the topic entity.
 * Each item is expected to have a unique `id` property.
 *
 * @returns {JSX.Element|null} A JSX element displaying the `lessons` items or `null` if the attribute is undefined.
 *
 * @example
 * // Example usage:
 * const topicEntity = { 
 *   lessons: [
 *     { id: 1, name: "Lesson Item 1" }, 
 *     { id: 2, name: "Lesson Item 2" }
 *   ] 
 * };
 *
 * <TopicLessonsAttribute topic={topicEntity} />
 */
export const TopicLessonsAttribute = ({topic, filter=Boolean}) => {
    const { lessons: unfiltered } = topic
    if (typeof unfiltered === 'undefined') return null
    const lessons = unfiltered.filter(filter)
    if (lessons.length === 0) return null
    return (
        <>
            {lessons.map(
                lesson => <div id={lesson.id} key={lesson.id}>
                    {/* <LessonMediumCard lesson={lesson} /> */}
                    {/* <LessonLink lesson={lesson} /> */}
                    Probably {'<LessonMediumCard lesson=\{lesson\} />'} <br />
                    <pre>{JSON.stringify(lesson, null, 4)}</pre>
                </div>
            )}
        </>
    )
}


export const TopicLessonsAttributeInfinite = ({topic}) => { 
    const {lessons} = topic

    return (
        <InfiniteScroll 
            Visualiser={'LessonMediumCard'} 
            actionParams={{skip: 0, limit: 10}}
            asyncAction={TopicLessonsAttributeAsyncAction}
        />
    )
}

/**
 * A lazy-loading component for displaying filtered `lessons` from a `topic` entity.
 *
 * This component uses the `TopicLessonsAttributeAsyncAction` to asynchronously fetch
 * the `topic.lessons` data. It shows a loading spinner while fetching, handles errors,
 * and filters the resulting list using a custom `filter` function (defaults to `Boolean` to remove falsy values).
 *
 * Each lesson item is rendered as a `<div>` with its `id` as both the `key` and the `id` attribute,
 * and displays a formatted JSON preview using `<pre>`.
 *
 * @component
 * @param {Object} props - The properties object.
 * @param {Object} props.topic - The topic entity or identifying query variables used to fetch it.
 * @param {Function} [props.filter=Boolean] - A filtering function applied to the `lessons` array before rendering.
 *
 * @returns {JSX.Element} A rendered list of filtered lessons or a loading/error placeholder.
 *
 * @example
 * <TopicLessonsAttributeLazy topic={{ id: "abc123" }} />
 *
 * 
 * @example
 * <TopicLessonsAttributeLazy
 *   topic={{ id: "abc123" }}
 *   filter={(v) => v.status === "active"}
 * />
 */
export const TopicLessonsAttributeLazy = ({topic, filter=Boolean}) => {
    const {loading, error, entity, fetch} = useAsyncAction(TopicLessonsAttributeAsyncAction, topic, {deferred: true})
    useEffect(() => {
        fetch(topic)
    }, [topic])

    if (loading) return <LoadingSpinner />
    if (error) return <ErrorHandler errors={error} />

    return <TopicLessonsAttribute topic={entity} filter={filter} />    
}