import { useAsyncAction, createAsyncGraphQLAction, processVectorAttributeFromGraphQLResult } from "@hrbolek/uoisfrontend-gql-shared"
import { ErrorHandler, InfiniteScroll, LoadingSpinner } from "@hrbolek/uoisfrontend-shared"
import { use, useEffect } from "react";


/**
 * Inserts a PlanGQLModel item into a semester’s plans array and dispatches an update.
 *
 * @param {Object} semester - The current semester object containing a `plans` array.
 * @param {Object} planItem - The item to insert; must have `__typename === "PlanGQLModel"`.
 * @param {Function} dispatch - Redux dispatch function (or similar) to call the update action.
 */
const followUpSemesterPlanItemInsert = (semester, planItem, dispatch) => {
    const { __typename } = planItem;
    if (__typename === "PlanGQLModel") {
        const { plans, ...others } = semester;
        const newSemesterPlanItems = [...plans, planItem];
        const newSemester = { ...others, plans: newSemesterPlanItems };
        dispatch(ItemActions.item_update(newSemester));
    }
};

/**
 * Replaces an existing PlanGQLModel item in a semester’s plans array and dispatches an update.
 *
 * @param {Object} semester - The current semester object containing a `plans` array.
 * @param {Object} planItem - The updated item; must have `__typename === "PlanGQLModel"` and an `id` field matching an existing item.
 * @param {Function} dispatch - Redux dispatch function (or similar) to call the update action.
 */
const followUpSemesterPlanItemUpdate = (semester, planItem, dispatch) => {
    const { __typename } = planItem;
    if (__typename === "PlanGQLModel") {
        const { plans, ...others } = semester;
        const newSemesterPlanItems = plans.map(item =>
            item.id === planItem.id ? planItem : item
        );
        const newSemester = { ...others, plans: newSemesterPlanItems };
        dispatch(ItemActions.item_update(newSemester));
    }
};

/**
 * Removes a PlanGQLModel item from a semester’s plans array by its `id` and dispatches an update.
 *
 * @param {Object} semester - The current semester object containing a `plans` array.
 * @param {Object} planItem - The item to delete; must have `__typename === "PlanGQLModel"` and an `id` field.
 * @param {Function} dispatch - Redux dispatch function (or similar) to call the update action.
 */
const followUpSemesterPlanItemDelete = (semester, planItem, dispatch) => {
    const { __typename } = planItem;
    if (__typename === "PlanGQLModel") {
        const { plans, ...others } = semester;
        const newSemesterPlanItems = plans.filter(
            item => item.id !== planItem.id
        );
        const newSemester = { ...others, plans: newSemesterPlanItems };
        dispatch(ItemActions.item_update(newSemester));
    }
};

const SemesterPlansAttributeQuery = `
query SemesterQueryRead($id: UUID!, $where: PlanInputFilter, $skip: Int, $limit: Int) {
    result: semesterById(id: $id) {
        __typename
        id
        plans(skip: $skip, limit: $limit, where: $where) {
            __typename
            id
            lastchange
            created
            createdbyId
            changedbyId
            rbacobjectId
            semesterId
            classificationplanId
            examId
            eventId
        }
    }
}
`

const SemesterPlansAttributeAsyncAction = createAsyncGraphQLAction(
    SemesterPlansAttributeQuery,
    processVectorAttributeFromGraphQLResult("plans")
)

/**
 * A component for displaying the `plans` attribute of an semester entity.
 *
 * This component checks if the `plans` attribute exists on the `semester` object. If `plans` is undefined,
 * the component returns `null` and renders nothing. Otherwise, it maps over the `plans` array and
 * displays a placeholder message and a JSON representation for each item in the `plans`.
 *
 * @component
 * @param {Object} props - The props for the SemesterPlansAttribute component.
 * @param {Object} props.semester - The object representing the semester entity.
 * @param {Array} [props.semester.plans] - An array of plans items associated with the semester entity.
 * Each item is expected to have a unique `id` property.
 *
 * @returns {JSX.Element|null} A JSX element displaying the `plans` items or `null` if the attribute is undefined.
 *
 * @example
 * // Example usage:
 * const semesterEntity = { 
 *   plans: [
 *     { id: 1, name: "Plan Item 1" }, 
 *     { id: 2, name: "Plan Item 2" }
 *   ] 
 * };
 *
 * <SemesterPlansAttribute semester={semesterEntity} />
 */
export const SemesterPlansAttribute = ({semester, filter=Boolean}) => {
    const { plans: unfiltered } = semester
    if (typeof unfiltered === 'undefined') return null
    const plans = unfiltered.filter(filter)
    if (plans.length === 0) return null
    return (
        <>
            {plans.map(
                plan => <div id={plan.id} key={plan.id}>
                    {/* <PlanMediumCard plan={plan} /> */}
                    {/* <PlanLink plan={plan} /> */}
                    Probably {'<PlanMediumCard plan=\{plan\} />'} <br />
                    <pre>{JSON.stringify(plan, null, 4)}</pre>
                </div>
            )}
        </>
    )
}


export const SemesterPlansAttributeInfinite = ({semester}) => { 
    const {plans} = semester

    return (
        <InfiniteScroll 
            Visualiser={'PlanMediumCard'} 
            actionParams={{skip: 0, limit: 10}}
            asyncAction={SemesterPlansAttributeAsyncAction}
        />
    )
}

/**
 * A lazy-loading component for displaying filtered `plans` from a `semester` entity.
 *
 * This component uses the `SemesterPlansAttributeAsyncAction` to asynchronously fetch
 * the `semester.plans` data. It shows a loading spinner while fetching, handles errors,
 * and filters the resulting list using a custom `filter` function (defaults to `Boolean` to remove falsy values).
 *
 * Each plan item is rendered as a `<div>` with its `id` as both the `key` and the `id` attribute,
 * and displays a formatted JSON preview using `<pre>`.
 *
 * @component
 * @param {Object} props - The properties object.
 * @param {Object} props.semester - The semester entity or identifying query variables used to fetch it.
 * @param {Function} [props.filter=Boolean] - A filtering function applied to the `plans` array before rendering.
 *
 * @returns {JSX.Element} A rendered list of filtered plans or a loading/error placeholder.
 *
 * @example
 * <SemesterPlansAttributeLazy semester={{ id: "abc123" }} />
 *
 * 
 * @example
 * <SemesterPlansAttributeLazy
 *   semester={{ id: "abc123" }}
 *   filter={(v) => v.status === "active"}
 * />
 */
export const SemesterPlansAttributeLazy = ({semester, filter=Boolean}) => {
    const {loading, error, entity, fetch} = useAsyncAction(SemesterPlansAttributeAsyncAction, semester, {deferred: true})
    useEffect(() => {
        fetch(semester)
    }, [semester])

    if (loading) return <LoadingSpinner />
    if (error) return <ErrorHandler errors={error} />

    return <SemesterPlansAttribute semester={entity} filter={filter} />    
}