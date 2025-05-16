import { useAsyncAction, createAsyncGraphQLAction, processVectorAttributeFromGraphQLResult } from "@hrbolek/uoisfrontend-gql-shared"
import { ErrorHandler, InfiniteScroll, LoadingSpinner } from "@hrbolek/uoisfrontend-shared"
import { use, useEffect } from "react";


/**
 * Inserts a VectorGQLModel item into a payment’s vectors array and dispatches an update.
 *
 * @param {Object} payment - The current payment object containing a `vectors` array.
 * @param {Object} vectorItem - The item to insert; must have `__typename === "VectorGQLModel"`.
 * @param {Function} dispatch - Redux dispatch function (or similar) to call the update action.
 */
const followUpPaymentVectorItemInsert = (payment, vectorItem, dispatch) => {
    const { __typename } = vectorItem;
    if (__typename === "VectorGQLModel") {
        const { vectors, ...others } = payment;
        const newPaymentVectorItems = [...vectors, vectorItem];
        const newPayment = { ...others, vectors: newPaymentVectorItems };
        dispatch(ItemActions.item_update(newPayment));
    }
};

/**
 * Replaces an existing VectorGQLModel item in a payment’s vectors array and dispatches an update.
 *
 * @param {Object} payment - The current payment object containing a `vectors` array.
 * @param {Object} vectorItem - The updated item; must have `__typename === "VectorGQLModel"` and an `id` field matching an existing item.
 * @param {Function} dispatch - Redux dispatch function (or similar) to call the update action.
 */
const followUpPaymentVectorItemUpdate = (payment, vectorItem, dispatch) => {
    const { __typename } = vectorItem;
    if (__typename === "VectorGQLModel") {
        const { vectors, ...others } = payment;
        const newPaymentVectorItems = vectors.map(item =>
            item.id === vectorItem.id ? vectorItem : item
        );
        const newPayment = { ...others, vectors: newPaymentVectorItems };
        dispatch(ItemActions.item_update(newPayment));
    }
};

/**
 * Removes a VectorGQLModel item from a payment’s vectors array by its `id` and dispatches an update.
 *
 * @param {Object} payment - The current payment object containing a `vectors` array.
 * @param {Object} vectorItem - The item to delete; must have `__typename === "VectorGQLModel"` and an `id` field.
 * @param {Function} dispatch - Redux dispatch function (or similar) to call the update action.
 */
const followUpPaymentVectorItemDelete = (payment, vectorItem, dispatch) => {
    const { __typename } = vectorItem;
    if (__typename === "VectorGQLModel") {
        const { vectors, ...others } = payment;
        const newPaymentVectorItems = vectors.filter(
            item => item.id !== vectorItem.id
        );
        const newPayment = { ...others, vectors: newPaymentVectorItems };
        dispatch(ItemActions.item_update(newPayment));
    }
};

const PaymentVectorsAttributeQuery = `
query PaymentQueryRead($id: UUID!, $where: VectorInputFilter, $skip: Int, $limit: Int) {
    result: paymentById(id: $id) {
        __typename
        id
        vectors(skip: $skip, limit: $limit, where: $where) {
            __typename
            id
        }
    }
}
`

const PaymentVectorsAttributeAsyncAction = createAsyncGraphQLAction(
    PaymentVectorsAttributeQuery,
    processVectorAttributeFromGraphQLResult("vectors")
)

/**
 * A component for displaying the `vectors` attribute of an payment entity.
 *
 * This component checks if the `vectors` attribute exists on the `payment` object. If `vectors` is undefined,
 * the component returns `null` and renders nothing. Otherwise, it maps over the `vectors` array and
 * displays a placeholder message and a JSON representation for each item in the `vectors`.
 *
 * @component
 * @param {Object} props - The props for the PaymentVectorsAttribute component.
 * @param {Object} props.payment - The object representing the payment entity.
 * @param {Array} [props.payment.vectors] - An array of vectors items associated with the payment entity.
 * Each item is expected to have a unique `id` property.
 *
 * @returns {JSX.Element|null} A JSX element displaying the `vectors` items or `null` if the attribute is undefined.
 *
 * @example
 * // Example usage:
 * const paymentEntity = { 
 *   vectors: [
 *     { id: 1, name: "Vector Item 1" }, 
 *     { id: 2, name: "Vector Item 2" }
 *   ] 
 * };
 *
 * <PaymentVectorsAttribute payment={paymentEntity} />
 */
export const PaymentVectorsAttribute = ({payment, filter=Boolean}) => {
    const { vectors: unfiltered } = payment
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


export const PaymentVectorsAttributeInfinite = ({payment}) => { 
    const {vectors} = payment

    return (
        <InfiniteScroll 
            Visualiser={'VectorMediumCard'} 
            actionParams={{skip: 0, limit: 10}}
            asyncAction={PaymentVectorsAttributeAsyncAction}
        />
    )
}

/**
 * A lazy-loading component for displaying filtered `vectors` from a `payment` entity.
 *
 * This component uses the `PaymentVectorsAttributeAsyncAction` to asynchronously fetch
 * the `payment.vectors` data. It shows a loading spinner while fetching, handles errors,
 * and filters the resulting list using a custom `filter` function (defaults to `Boolean` to remove falsy values).
 *
 * Each vector item is rendered as a `<div>` with its `id` as both the `key` and the `id` attribute,
 * and displays a formatted JSON preview using `<pre>`.
 *
 * @component
 * @param {Object} props - The properties object.
 * @param {Object} props.payment - The payment entity or identifying query variables used to fetch it.
 * @param {Function} [props.filter=Boolean] - A filtering function applied to the `vectors` array before rendering.
 *
 * @returns {JSX.Element} A rendered list of filtered vectors or a loading/error placeholder.
 *
 * @example
 * <PaymentVectorsAttributeLazy payment={{ id: "abc123" }} />
 *
 * 
 * @example
 * <PaymentVectorsAttributeLazy
 *   payment={{ id: "abc123" }}
 *   filter={(v) => v.status === "active"}
 * />
 */
export const PaymentVectorsAttributeLazy = ({payment, filter=Boolean}) => {
    const {loading, error, entity, fetch} = useAsyncAction(PaymentVectorsAttributeAsyncAction, payment, {deferred: true})
    useEffect(() => {
        fetch(payment)
    }, [payment])

    if (loading) return <LoadingSpinner />
    if (error) return <ErrorHandler errors={error} />

    return <PaymentVectorsAttribute payment={entity} filter={filter} />    
}