import { useAsyncAction, createAsyncGraphQLAction, processVectorAttributeFromGraphQLResult } from "@hrbolek/uoisfrontend-gql-shared"
import { ErrorHandler, InfiniteScroll, LoadingSpinner } from "@hrbolek/uoisfrontend-shared"
import { use, useEffect } from "react";


/**
 * Inserts a PaymentGQLModel item into a paymentinfo’s payments array and dispatches an update.
 *
 * @param {Object} paymentinfo - The current paymentinfo object containing a `payments` array.
 * @param {Object} paymentItem - The item to insert; must have `__typename === "PaymentGQLModel"`.
 * @param {Function} dispatch - Redux dispatch function (or similar) to call the update action.
 */
const followUpPaymentInfoPaymentItemInsert = (paymentinfo, paymentItem, dispatch) => {
    const { __typename } = paymentItem;
    if (__typename === "PaymentGQLModel") {
        const { payments, ...others } = paymentinfo;
        const newPaymentInfoPaymentItems = [...payments, paymentItem];
        const newPaymentInfo = { ...others, payments: newPaymentInfoPaymentItems };
        dispatch(ItemActions.item_update(newPaymentInfo));
    }
};

/**
 * Replaces an existing PaymentGQLModel item in a paymentinfo’s payments array and dispatches an update.
 *
 * @param {Object} paymentinfo - The current paymentinfo object containing a `payments` array.
 * @param {Object} paymentItem - The updated item; must have `__typename === "PaymentGQLModel"` and an `id` field matching an existing item.
 * @param {Function} dispatch - Redux dispatch function (or similar) to call the update action.
 */
const followUpPaymentInfoPaymentItemUpdate = (paymentinfo, paymentItem, dispatch) => {
    const { __typename } = paymentItem;
    if (__typename === "PaymentGQLModel") {
        const { payments, ...others } = paymentinfo;
        const newPaymentInfoPaymentItems = payments.map(item =>
            item.id === paymentItem.id ? paymentItem : item
        );
        const newPaymentInfo = { ...others, payments: newPaymentInfoPaymentItems };
        dispatch(ItemActions.item_update(newPaymentInfo));
    }
};

/**
 * Removes a PaymentGQLModel item from a paymentinfo’s payments array by its `id` and dispatches an update.
 *
 * @param {Object} paymentinfo - The current paymentinfo object containing a `payments` array.
 * @param {Object} paymentItem - The item to delete; must have `__typename === "PaymentGQLModel"` and an `id` field.
 * @param {Function} dispatch - Redux dispatch function (or similar) to call the update action.
 */
const followUpPaymentInfoPaymentItemDelete = (paymentinfo, paymentItem, dispatch) => {
    const { __typename } = paymentItem;
    if (__typename === "PaymentGQLModel") {
        const { payments, ...others } = paymentinfo;
        const newPaymentInfoPaymentItems = payments.filter(
            item => item.id !== paymentItem.id
        );
        const newPaymentInfo = { ...others, payments: newPaymentInfoPaymentItems };
        dispatch(ItemActions.item_update(newPaymentInfo));
    }
};

const PaymentInfoPaymentsAttributeQuery = `
query PaymentInfoQueryRead($id: UUID!, $where: PaymentInputFilter, $skip: Int, $limit: Int) {
    result: paymentinfoById(id: $id) {
        __typename
        id
        payments(skip: $skip, limit: $limit, where: $where) {
            __typename
            id
            lastchange
            created
            createdbyId
            changedbyId
            rbacobjectId
            paymentInfoId
            studentId
        }
    }
}
`

const PaymentInfoPaymentsAttributeAsyncAction = createAsyncGraphQLAction(
    PaymentInfoPaymentsAttributeQuery,
    processVectorAttributeFromGraphQLResult("payments")
)

/**
 * A component for displaying the `payments` attribute of an paymentinfo entity.
 *
 * This component checks if the `payments` attribute exists on the `paymentinfo` object. If `payments` is undefined,
 * the component returns `null` and renders nothing. Otherwise, it maps over the `payments` array and
 * displays a placeholder message and a JSON representation for each item in the `payments`.
 *
 * @component
 * @param {Object} props - The props for the PaymentInfoPaymentsAttribute component.
 * @param {Object} props.paymentinfo - The object representing the paymentinfo entity.
 * @param {Array} [props.paymentinfo.payments] - An array of payments items associated with the paymentinfo entity.
 * Each item is expected to have a unique `id` property.
 *
 * @returns {JSX.Element|null} A JSX element displaying the `payments` items or `null` if the attribute is undefined.
 *
 * @example
 * // Example usage:
 * const paymentinfoEntity = { 
 *   payments: [
 *     { id: 1, name: "Payment Item 1" }, 
 *     { id: 2, name: "Payment Item 2" }
 *   ] 
 * };
 *
 * <PaymentInfoPaymentsAttribute paymentinfo={paymentinfoEntity} />
 */
export const PaymentInfoPaymentsAttribute = ({paymentinfo, filter=Boolean}) => {
    const { payments: unfiltered } = paymentinfo
    if (typeof unfiltered === 'undefined') return null
    const payments = unfiltered.filter(filter)
    if (payments.length === 0) return null
    return (
        <>
            {payments.map(
                payment => <div id={payment.id} key={payment.id}>
                    {/* <PaymentMediumCard payment={payment} /> */}
                    {/* <PaymentLink payment={payment} /> */}
                    Probably {'<PaymentMediumCard payment=\{payment\} />'} <br />
                    <pre>{JSON.stringify(payment, null, 4)}</pre>
                </div>
            )}
        </>
    )
}


export const PaymentInfoPaymentsAttributeInfinite = ({paymentinfo}) => { 
    const {payments} = paymentinfo

    return (
        <InfiniteScroll 
            Visualiser={'PaymentMediumCard'} 
            actionParams={{skip: 0, limit: 10}}
            asyncAction={PaymentInfoPaymentsAttributeAsyncAction}
        />
    )
}

/**
 * A lazy-loading component for displaying filtered `payments` from a `paymentinfo` entity.
 *
 * This component uses the `PaymentInfoPaymentsAttributeAsyncAction` to asynchronously fetch
 * the `paymentinfo.payments` data. It shows a loading spinner while fetching, handles errors,
 * and filters the resulting list using a custom `filter` function (defaults to `Boolean` to remove falsy values).
 *
 * Each payment item is rendered as a `<div>` with its `id` as both the `key` and the `id` attribute,
 * and displays a formatted JSON preview using `<pre>`.
 *
 * @component
 * @param {Object} props - The properties object.
 * @param {Object} props.paymentinfo - The paymentinfo entity or identifying query variables used to fetch it.
 * @param {Function} [props.filter=Boolean] - A filtering function applied to the `payments` array before rendering.
 *
 * @returns {JSX.Element} A rendered list of filtered payments or a loading/error placeholder.
 *
 * @example
 * <PaymentInfoPaymentsAttributeLazy paymentinfo={{ id: "abc123" }} />
 *
 * 
 * @example
 * <PaymentInfoPaymentsAttributeLazy
 *   paymentinfo={{ id: "abc123" }}
 *   filter={(v) => v.status === "active"}
 * />
 */
export const PaymentInfoPaymentsAttributeLazy = ({paymentinfo, filter=Boolean}) => {
    const {loading, error, entity, fetch} = useAsyncAction(PaymentInfoPaymentsAttributeAsyncAction, paymentinfo, {deferred: true})
    useEffect(() => {
        fetch(paymentinfo)
    }, [paymentinfo])

    if (loading) return <LoadingSpinner />
    if (error) return <ErrorHandler errors={error} />

    return <PaymentInfoPaymentsAttribute paymentinfo={entity} filter={filter} />    
}