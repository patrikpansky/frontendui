import { 
    CreateAsyncActionFromMutation,
    CreateAsyncActionFromQuery
 } from "@hrbolek/uoisfrontend-shared/src"

import create from './gqls/memberships/create.gql?raw'
import read from './gqls/memberships/read.gql?raw'
// import readpage from './gqls/memberships/readpage.gql?raw'
import update from './gqls/memberships/update.gql?raw'


export const MembershipAsyncActions = {
    read: CreateAsyncActionFromQuery(read),
    create: CreateAsyncActionFromMutation(create),
    update: CreateAsyncActionFromMutation(update),
}
