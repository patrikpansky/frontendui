import { createAsyncGraphQLAction, createQueryStrLazy } from "@hrbolek/uoisfrontend-gql-shared";
import { PaymentInfoLargeFragment } from "./PaymentInfoFragments";

const PaymentInfoReadPageQueryStr = `
query PaymentInfoReadPageQuery($skip: Int, $limit: Int, $where: PaymentInfoWhereInputFilter) {
  result: paymentinfoPage(skip: $skip, limit: $limit, where: $where) {
    ...PaymentInfoLarge
  }
}
`
const PaymentInfoReadPageQuery = createQueryStrLazy(`${PaymentInfoReadPageQueryStr}`, PaymentInfoLargeFragment)
export const PaymentInfoReadPageAsyncAction = createAsyncGraphQLAction(PaymentInfoReadPageQuery)