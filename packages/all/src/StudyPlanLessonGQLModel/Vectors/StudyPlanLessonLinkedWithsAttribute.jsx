import { useAsyncAction, createAsyncGraphQLAction, processVectorAttributeFromGraphQLResult } from "@hrbolek/uoisfrontend-gql-shared"
import { ErrorHandler, InfiniteScroll, LoadingSpinner } from "@hrbolek/uoisfrontend-shared"
import { use, useEffect } from "react";


/**
 * Inserts a LinkedwithGQLModel item into a studyplanlesson’s linkedwiths array and dispatches an update.
 *
 * @param {Object} studyplanlesson - The current studyplanlesson object containing a `linkedwiths` array.
 * @param {Object} linkedwithItem - The item to insert; must have `__typename === "LinkedwithGQLModel"`.
 * @param {Function} dispatch - Redux dispatch function (or similar) to call the update action.
 */
const followUpStudyPlanLessonLinkedwithItemInsert = (studyplanlesson, linkedwithItem, dispatch) => {
    const { __typename } = linkedwithItem;
    if (__typename === "LinkedwithGQLModel") {
        const { linkedwiths, ...others } = studyplanlesson;
        const newStudyPlanLessonLinkedwithItems = [...linkedwiths, linkedwithItem];
        const newStudyPlanLesson = { ...others, linkedwiths: newStudyPlanLessonLinkedwithItems };
        dispatch(ItemActions.item_update(newStudyPlanLesson));
    }
};

/**
 * Replaces an existing LinkedwithGQLModel item in a studyplanlesson’s linkedwiths array and dispatches an update.
 *
 * @param {Object} studyplanlesson - The current studyplanlesson object containing a `linkedwiths` array.
 * @param {Object} linkedwithItem - The updated item; must have `__typename === "LinkedwithGQLModel"` and an `id` field matching an existing item.
 * @param {Function} dispatch - Redux dispatch function (or similar) to call the update action.
 */
const followUpStudyPlanLessonLinkedwithItemUpdate = (studyplanlesson, linkedwithItem, dispatch) => {
    const { __typename } = linkedwithItem;
    if (__typename === "LinkedwithGQLModel") {
        const { linkedwiths, ...others } = studyplanlesson;
        const newStudyPlanLessonLinkedwithItems = linkedwiths.map(item =>
            item.id === linkedwithItem.id ? linkedwithItem : item
        );
        const newStudyPlanLesson = { ...others, linkedwiths: newStudyPlanLessonLinkedwithItems };
        dispatch(ItemActions.item_update(newStudyPlanLesson));
    }
};

/**
 * Removes a LinkedwithGQLModel item from a studyplanlesson’s linkedwiths array by its `id` and dispatches an update.
 *
 * @param {Object} studyplanlesson - The current studyplanlesson object containing a `linkedwiths` array.
 * @param {Object} linkedwithItem - The item to delete; must have `__typename === "LinkedwithGQLModel"` and an `id` field.
 * @param {Function} dispatch - Redux dispatch function (or similar) to call the update action.
 */
const followUpStudyPlanLessonLinkedwithItemDelete = (studyplanlesson, linkedwithItem, dispatch) => {
    const { __typename } = linkedwithItem;
    if (__typename === "LinkedwithGQLModel") {
        const { linkedwiths, ...others } = studyplanlesson;
        const newStudyPlanLessonLinkedwithItems = linkedwiths.filter(
            item => item.id !== linkedwithItem.id
        );
        const newStudyPlanLesson = { ...others, linkedwiths: newStudyPlanLessonLinkedwithItems };
        dispatch(ItemActions.item_update(newStudyPlanLesson));
    }
};

const StudyPlanLessonLinkedwithsAttributeQuery = `
query StudyPlanLessonQueryRead($id: UUID!, $where: LinkedwithInputFilter, $skip: Int, $limit: Int) {
    result: studyplanlessonById(id: $id) {
        __typename
        id
        linkedwiths(skip: $skip, limit: $limit, where: $where) {
            __typename
            id
            lastchange
            created
            createdbyId
            changedbyId
            rbacobjectId
            eventId
            topicId
            lessontypeId
            linkedWithId
            planId
        }
    }
}
`

const StudyPlanLessonLinkedwithsAttributeAsyncAction = createAsyncGraphQLAction(
    StudyPlanLessonLinkedwithsAttributeQuery,
    processVectorAttributeFromGraphQLResult("linkedwiths")
)

/**
 * A component for displaying the `linkedwiths` attribute of an studyplanlesson entity.
 *
 * This component checks if the `linkedwiths` attribute exists on the `studyplanlesson` object. If `linkedwiths` is undefined,
 * the component returns `null` and renders nothing. Otherwise, it maps over the `linkedwiths` array and
 * displays a placeholder message and a JSON representation for each item in the `linkedwiths`.
 *
 * @component
 * @param {Object} props - The props for the StudyPlanLessonLinkedwithsAttribute component.
 * @param {Object} props.studyplanlesson - The object representing the studyplanlesson entity.
 * @param {Array} [props.studyplanlesson.linkedwiths] - An array of linkedwiths items associated with the studyplanlesson entity.
 * Each item is expected to have a unique `id` property.
 *
 * @returns {JSX.Element|null} A JSX element displaying the `linkedwiths` items or `null` if the attribute is undefined.
 *
 * @example
 * // Example usage:
 * const studyplanlessonEntity = { 
 *   linkedwiths: [
 *     { id: 1, name: "Linkedwith Item 1" }, 
 *     { id: 2, name: "Linkedwith Item 2" }
 *   ] 
 * };
 *
 * <StudyPlanLessonLinkedwithsAttribute studyplanlesson={studyplanlessonEntity} />
 */
export const StudyPlanLessonLinkedwithsAttribute = ({studyplanlesson, filter=Boolean}) => {
    const { linkedwiths: unfiltered } = studyplanlesson
    if (typeof unfiltered === 'undefined') return null
    const linkedwiths = unfiltered.filter(filter)
    if (linkedwiths.length === 0) return null
    return (
        <>
            {linkedwiths.map(
                linkedwith => <div id={linkedwith.id} key={linkedwith.id}>
                    {/* <LinkedwithMediumCard linkedwith={linkedwith} /> */}
                    {/* <LinkedwithLink linkedwith={linkedwith} /> */}
                    Probably {'<LinkedwithMediumCard linkedwith=\{linkedwith\} />'} <br />
                    <pre>{JSON.stringify(linkedwith, null, 4)}</pre>
                </div>
            )}
        </>
    )
}


export const StudyPlanLessonLinkedwithsAttributeInfinite = ({studyplanlesson}) => { 
    const {linkedwiths} = studyplanlesson

    return (
        <InfiniteScroll 
            Visualiser={'LinkedwithMediumCard'} 
            actionParams={{skip: 0, limit: 10}}
            asyncAction={StudyPlanLessonLinkedwithsAttributeAsyncAction}
        />
    )
}

/**
 * A lazy-loading component for displaying filtered `linkedwiths` from a `studyplanlesson` entity.
 *
 * This component uses the `StudyPlanLessonLinkedwithsAttributeAsyncAction` to asynchronously fetch
 * the `studyplanlesson.linkedwiths` data. It shows a loading spinner while fetching, handles errors,
 * and filters the resulting list using a custom `filter` function (defaults to `Boolean` to remove falsy values).
 *
 * Each linkedwith item is rendered as a `<div>` with its `id` as both the `key` and the `id` attribute,
 * and displays a formatted JSON preview using `<pre>`.
 *
 * @component
 * @param {Object} props - The properties object.
 * @param {Object} props.studyplanlesson - The studyplanlesson entity or identifying query variables used to fetch it.
 * @param {Function} [props.filter=Boolean] - A filtering function applied to the `linkedwiths` array before rendering.
 *
 * @returns {JSX.Element} A rendered list of filtered linkedwiths or a loading/error placeholder.
 *
 * @example
 * <StudyPlanLessonLinkedwithsAttributeLazy studyplanlesson={{ id: "abc123" }} />
 *
 * 
 * @example
 * <StudyPlanLessonLinkedwithsAttributeLazy
 *   studyplanlesson={{ id: "abc123" }}
 *   filter={(v) => v.status === "active"}
 * />
 */
export const StudyPlanLessonLinkedwithsAttributeLazy = ({studyplanlesson, filter=Boolean}) => {
    const {loading, error, entity, fetch} = useAsyncAction(StudyPlanLessonLinkedwithsAttributeAsyncAction, studyplanlesson, {deferred: true})
    useEffect(() => {
        fetch(studyplanlesson)
    }, [studyplanlesson])

    if (loading) return <LoadingSpinner />
    if (error) return <ErrorHandler errors={error} />

    return <StudyPlanLessonLinkedwithsAttribute studyplanlesson={entity} filter={filter} />    
}