import { useAsyncAction, createAsyncGraphQLAction, processVectorAttributeFromGraphQLResult } from "@hrbolek/uoisfrontend-gql-shared"
import { ErrorHandler, InfiniteScroll, LoadingSpinner } from "@hrbolek/uoisfrontend-shared"
import { use, useEffect } from "react";


/**
 * Inserts a FacilitieGQLModel item into a studyplanlesson’s facilities array and dispatches an update.
 *
 * @param {Object} studyplanlesson - The current studyplanlesson object containing a `facilities` array.
 * @param {Object} facilitieItem - The item to insert; must have `__typename === "FacilitieGQLModel"`.
 * @param {Function} dispatch - Redux dispatch function (or similar) to call the update action.
 */
const followUpStudyPlanLessonFacilitieItemInsert = (studyplanlesson, facilitieItem, dispatch) => {
    const { __typename } = facilitieItem;
    if (__typename === "FacilitieGQLModel") {
        const { facilities, ...others } = studyplanlesson;
        const newStudyPlanLessonFacilitieItems = [...facilities, facilitieItem];
        const newStudyPlanLesson = { ...others, facilities: newStudyPlanLessonFacilitieItems };
        dispatch(ItemActions.item_update(newStudyPlanLesson));
    }
};

/**
 * Replaces an existing FacilitieGQLModel item in a studyplanlesson’s facilities array and dispatches an update.
 *
 * @param {Object} studyplanlesson - The current studyplanlesson object containing a `facilities` array.
 * @param {Object} facilitieItem - The updated item; must have `__typename === "FacilitieGQLModel"` and an `id` field matching an existing item.
 * @param {Function} dispatch - Redux dispatch function (or similar) to call the update action.
 */
const followUpStudyPlanLessonFacilitieItemUpdate = (studyplanlesson, facilitieItem, dispatch) => {
    const { __typename } = facilitieItem;
    if (__typename === "FacilitieGQLModel") {
        const { facilities, ...others } = studyplanlesson;
        const newStudyPlanLessonFacilitieItems = facilities.map(item =>
            item.id === facilitieItem.id ? facilitieItem : item
        );
        const newStudyPlanLesson = { ...others, facilities: newStudyPlanLessonFacilitieItems };
        dispatch(ItemActions.item_update(newStudyPlanLesson));
    }
};

/**
 * Removes a FacilitieGQLModel item from a studyplanlesson’s facilities array by its `id` and dispatches an update.
 *
 * @param {Object} studyplanlesson - The current studyplanlesson object containing a `facilities` array.
 * @param {Object} facilitieItem - The item to delete; must have `__typename === "FacilitieGQLModel"` and an `id` field.
 * @param {Function} dispatch - Redux dispatch function (or similar) to call the update action.
 */
const followUpStudyPlanLessonFacilitieItemDelete = (studyplanlesson, facilitieItem, dispatch) => {
    const { __typename } = facilitieItem;
    if (__typename === "FacilitieGQLModel") {
        const { facilities, ...others } = studyplanlesson;
        const newStudyPlanLessonFacilitieItems = facilities.filter(
            item => item.id !== facilitieItem.id
        );
        const newStudyPlanLesson = { ...others, facilities: newStudyPlanLessonFacilitieItems };
        dispatch(ItemActions.item_update(newStudyPlanLesson));
    }
};

const StudyPlanLessonFacilitiesAttributeQuery = `
query StudyPlanLessonQueryRead($id: UUID!, $where: FacilitieInputFilter, $skip: Int, $limit: Int) {
    result: studyplanlessonById(id: $id) {
        __typename
        id
        facilities(skip: $skip, limit: $limit, where: $where) {
            __typename
            id
            lastchange
            created
            createdbyId
            changedbyId
            rbacobjectId
            startdate
            enddate
            groupId
            facilitytypeId
            masterFacilityId
        }
    }
}
`

const StudyPlanLessonFacilitiesAttributeAsyncAction = createAsyncGraphQLAction(
    StudyPlanLessonFacilitiesAttributeQuery,
    processVectorAttributeFromGraphQLResult("facilities")
)

/**
 * A component for displaying the `facilities` attribute of an studyplanlesson entity.
 *
 * This component checks if the `facilities` attribute exists on the `studyplanlesson` object. If `facilities` is undefined,
 * the component returns `null` and renders nothing. Otherwise, it maps over the `facilities` array and
 * displays a placeholder message and a JSON representation for each item in the `facilities`.
 *
 * @component
 * @param {Object} props - The props for the StudyPlanLessonFacilitiesAttribute component.
 * @param {Object} props.studyplanlesson - The object representing the studyplanlesson entity.
 * @param {Array} [props.studyplanlesson.facilities] - An array of facilities items associated with the studyplanlesson entity.
 * Each item is expected to have a unique `id` property.
 *
 * @returns {JSX.Element|null} A JSX element displaying the `facilities` items or `null` if the attribute is undefined.
 *
 * @example
 * // Example usage:
 * const studyplanlessonEntity = { 
 *   facilities: [
 *     { id: 1, name: "Facilitie Item 1" }, 
 *     { id: 2, name: "Facilitie Item 2" }
 *   ] 
 * };
 *
 * <StudyPlanLessonFacilitiesAttribute studyplanlesson={studyplanlessonEntity} />
 */
export const StudyPlanLessonFacilitiesAttribute = ({studyplanlesson, filter=Boolean}) => {
    const { facilities: unfiltered } = studyplanlesson
    if (typeof unfiltered === 'undefined') return null
    const facilities = unfiltered.filter(filter)
    if (facilities.length === 0) return null
    return (
        <>
            {facilities.map(
                facilitie => <div id={facilitie.id} key={facilitie.id}>
                    {/* <FacilitieMediumCard facilitie={facilitie} /> */}
                    {/* <FacilitieLink facilitie={facilitie} /> */}
                    Probably {'<FacilitieMediumCard facilitie=\{facilitie\} />'} <br />
                    <pre>{JSON.stringify(facilitie, null, 4)}</pre>
                </div>
            )}
        </>
    )
}


export const StudyPlanLessonFacilitiesAttributeInfinite = ({studyplanlesson}) => { 
    const {facilities} = studyplanlesson

    return (
        <InfiniteScroll 
            Visualiser={'FacilitieMediumCard'} 
            actionParams={{skip: 0, limit: 10}}
            asyncAction={StudyPlanLessonFacilitiesAttributeAsyncAction}
        />
    )
}

/**
 * A lazy-loading component for displaying filtered `facilities` from a `studyplanlesson` entity.
 *
 * This component uses the `StudyPlanLessonFacilitiesAttributeAsyncAction` to asynchronously fetch
 * the `studyplanlesson.facilities` data. It shows a loading spinner while fetching, handles errors,
 * and filters the resulting list using a custom `filter` function (defaults to `Boolean` to remove falsy values).
 *
 * Each facilitie item is rendered as a `<div>` with its `id` as both the `key` and the `id` attribute,
 * and displays a formatted JSON preview using `<pre>`.
 *
 * @component
 * @param {Object} props - The properties object.
 * @param {Object} props.studyplanlesson - The studyplanlesson entity or identifying query variables used to fetch it.
 * @param {Function} [props.filter=Boolean] - A filtering function applied to the `facilities` array before rendering.
 *
 * @returns {JSX.Element} A rendered list of filtered facilities or a loading/error placeholder.
 *
 * @example
 * <StudyPlanLessonFacilitiesAttributeLazy studyplanlesson={{ id: "abc123" }} />
 *
 * 
 * @example
 * <StudyPlanLessonFacilitiesAttributeLazy
 *   studyplanlesson={{ id: "abc123" }}
 *   filter={(v) => v.status === "active"}
 * />
 */
export const StudyPlanLessonFacilitiesAttributeLazy = ({studyplanlesson, filter=Boolean}) => {
    const {loading, error, entity, fetch} = useAsyncAction(StudyPlanLessonFacilitiesAttributeAsyncAction, studyplanlesson, {deferred: true})
    useEffect(() => {
        fetch(studyplanlesson)
    }, [studyplanlesson])

    if (loading) return <LoadingSpinner />
    if (error) return <ErrorHandler errors={error} />

    return <StudyPlanLessonFacilitiesAttribute studyplanlesson={entity} filter={filter} />    
}