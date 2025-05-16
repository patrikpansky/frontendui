import { useAsyncAction, createAsyncGraphQLAction, processVectorAttributeFromGraphQLResult } from "@hrbolek/uoisfrontend-gql-shared"
import { ErrorHandler, InfiniteScroll, LoadingSpinner } from "@hrbolek/uoisfrontend-shared"
import { use, useEffect } from "react";


/**
 * Inserts a StudygroupGQLModel item into a studyplanlesson’s studygroups array and dispatches an update.
 *
 * @param {Object} studyplanlesson - The current studyplanlesson object containing a `studygroups` array.
 * @param {Object} studygroupItem - The item to insert; must have `__typename === "StudygroupGQLModel"`.
 * @param {Function} dispatch - Redux dispatch function (or similar) to call the update action.
 */
const followUpStudyPlanLessonStudygroupItemInsert = (studyplanlesson, studygroupItem, dispatch) => {
    const { __typename } = studygroupItem;
    if (__typename === "StudygroupGQLModel") {
        const { studygroups, ...others } = studyplanlesson;
        const newStudyPlanLessonStudygroupItems = [...studygroups, studygroupItem];
        const newStudyPlanLesson = { ...others, studygroups: newStudyPlanLessonStudygroupItems };
        dispatch(ItemActions.item_update(newStudyPlanLesson));
    }
};

/**
 * Replaces an existing StudygroupGQLModel item in a studyplanlesson’s studygroups array and dispatches an update.
 *
 * @param {Object} studyplanlesson - The current studyplanlesson object containing a `studygroups` array.
 * @param {Object} studygroupItem - The updated item; must have `__typename === "StudygroupGQLModel"` and an `id` field matching an existing item.
 * @param {Function} dispatch - Redux dispatch function (or similar) to call the update action.
 */
const followUpStudyPlanLessonStudygroupItemUpdate = (studyplanlesson, studygroupItem, dispatch) => {
    const { __typename } = studygroupItem;
    if (__typename === "StudygroupGQLModel") {
        const { studygroups, ...others } = studyplanlesson;
        const newStudyPlanLessonStudygroupItems = studygroups.map(item =>
            item.id === studygroupItem.id ? studygroupItem : item
        );
        const newStudyPlanLesson = { ...others, studygroups: newStudyPlanLessonStudygroupItems };
        dispatch(ItemActions.item_update(newStudyPlanLesson));
    }
};

/**
 * Removes a StudygroupGQLModel item from a studyplanlesson’s studygroups array by its `id` and dispatches an update.
 *
 * @param {Object} studyplanlesson - The current studyplanlesson object containing a `studygroups` array.
 * @param {Object} studygroupItem - The item to delete; must have `__typename === "StudygroupGQLModel"` and an `id` field.
 * @param {Function} dispatch - Redux dispatch function (or similar) to call the update action.
 */
const followUpStudyPlanLessonStudygroupItemDelete = (studyplanlesson, studygroupItem, dispatch) => {
    const { __typename } = studygroupItem;
    if (__typename === "StudygroupGQLModel") {
        const { studygroups, ...others } = studyplanlesson;
        const newStudyPlanLessonStudygroupItems = studygroups.filter(
            item => item.id !== studygroupItem.id
        );
        const newStudyPlanLesson = { ...others, studygroups: newStudyPlanLessonStudygroupItems };
        dispatch(ItemActions.item_update(newStudyPlanLesson));
    }
};

const StudyPlanLessonStudygroupsAttributeQuery = `
query StudyPlanLessonQueryRead($id: UUID!, $where: StudygroupInputFilter, $skip: Int, $limit: Int) {
    result: studyplanlessonById(id: $id) {
        __typename
        id
        studygroups(skip: $skip, limit: $limit, where: $where) {
            __typename
            id
            lastchange
            created
            createdbyId
            changedbyId
            rbacobjectId
            startdate
            enddate
            grouptypeId
            mastergroupId
        }
    }
}
`

const StudyPlanLessonStudygroupsAttributeAsyncAction = createAsyncGraphQLAction(
    StudyPlanLessonStudygroupsAttributeQuery,
    processVectorAttributeFromGraphQLResult("studygroups")
)

/**
 * A component for displaying the `studygroups` attribute of an studyplanlesson entity.
 *
 * This component checks if the `studygroups` attribute exists on the `studyplanlesson` object. If `studygroups` is undefined,
 * the component returns `null` and renders nothing. Otherwise, it maps over the `studygroups` array and
 * displays a placeholder message and a JSON representation for each item in the `studygroups`.
 *
 * @component
 * @param {Object} props - The props for the StudyPlanLessonStudygroupsAttribute component.
 * @param {Object} props.studyplanlesson - The object representing the studyplanlesson entity.
 * @param {Array} [props.studyplanlesson.studygroups] - An array of studygroups items associated with the studyplanlesson entity.
 * Each item is expected to have a unique `id` property.
 *
 * @returns {JSX.Element|null} A JSX element displaying the `studygroups` items or `null` if the attribute is undefined.
 *
 * @example
 * // Example usage:
 * const studyplanlessonEntity = { 
 *   studygroups: [
 *     { id: 1, name: "Studygroup Item 1" }, 
 *     { id: 2, name: "Studygroup Item 2" }
 *   ] 
 * };
 *
 * <StudyPlanLessonStudygroupsAttribute studyplanlesson={studyplanlessonEntity} />
 */
export const StudyPlanLessonStudygroupsAttribute = ({studyplanlesson, filter=Boolean}) => {
    const { studygroups: unfiltered } = studyplanlesson
    if (typeof unfiltered === 'undefined') return null
    const studygroups = unfiltered.filter(filter)
    if (studygroups.length === 0) return null
    return (
        <>
            {studygroups.map(
                studygroup => <div id={studygroup.id} key={studygroup.id}>
                    {/* <StudygroupMediumCard studygroup={studygroup} /> */}
                    {/* <StudygroupLink studygroup={studygroup} /> */}
                    Probably {'<StudygroupMediumCard studygroup=\{studygroup\} />'} <br />
                    <pre>{JSON.stringify(studygroup, null, 4)}</pre>
                </div>
            )}
        </>
    )
}


export const StudyPlanLessonStudygroupsAttributeInfinite = ({studyplanlesson}) => { 
    const {studygroups} = studyplanlesson

    return (
        <InfiniteScroll 
            Visualiser={'StudygroupMediumCard'} 
            actionParams={{skip: 0, limit: 10}}
            asyncAction={StudyPlanLessonStudygroupsAttributeAsyncAction}
        />
    )
}

/**
 * A lazy-loading component for displaying filtered `studygroups` from a `studyplanlesson` entity.
 *
 * This component uses the `StudyPlanLessonStudygroupsAttributeAsyncAction` to asynchronously fetch
 * the `studyplanlesson.studygroups` data. It shows a loading spinner while fetching, handles errors,
 * and filters the resulting list using a custom `filter` function (defaults to `Boolean` to remove falsy values).
 *
 * Each studygroup item is rendered as a `<div>` with its `id` as both the `key` and the `id` attribute,
 * and displays a formatted JSON preview using `<pre>`.
 *
 * @component
 * @param {Object} props - The properties object.
 * @param {Object} props.studyplanlesson - The studyplanlesson entity or identifying query variables used to fetch it.
 * @param {Function} [props.filter=Boolean] - A filtering function applied to the `studygroups` array before rendering.
 *
 * @returns {JSX.Element} A rendered list of filtered studygroups or a loading/error placeholder.
 *
 * @example
 * <StudyPlanLessonStudygroupsAttributeLazy studyplanlesson={{ id: "abc123" }} />
 *
 * 
 * @example
 * <StudyPlanLessonStudygroupsAttributeLazy
 *   studyplanlesson={{ id: "abc123" }}
 *   filter={(v) => v.status === "active"}
 * />
 */
export const StudyPlanLessonStudygroupsAttributeLazy = ({studyplanlesson, filter=Boolean}) => {
    const {loading, error, entity, fetch} = useAsyncAction(StudyPlanLessonStudygroupsAttributeAsyncAction, studyplanlesson, {deferred: true})
    useEffect(() => {
        fetch(studyplanlesson)
    }, [studyplanlesson])

    if (loading) return <LoadingSpinner />
    if (error) return <ErrorHandler errors={error} />

    return <StudyPlanLessonStudygroupsAttribute studyplanlesson={entity} filter={filter} />    
}