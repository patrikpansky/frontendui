import { 
    CreateAsyncActionFromMutation,
    CreateAsyncActionFromQuery,
    GQLQueryLazyVectorAfterFetch
 } from "@hrbolek/uoisfrontend-shared/src"


// import { 
//     CreateAsyncActionFromMutation,
//     CreateAsyncActionFromQuery,
//     GQLQueryLazyVectorAfterFetch
//  } from "./creators"


import create from './gqls/groups/create.gql?raw'
import read from './gqls/groups/read.gql?raw'
import readsubs from './gqls/groups/readsubs.gql?raw'
import readpage from './gqls/groups/readpage.gql?raw'
import update from './gqls/groups/update.gql?raw'
import readevents from './gqls/groups/readevents.gql?raw'

export const GroupAsyncActions = {
    read: CreateAsyncActionFromQuery(read),
    readsubs: CreateAsyncActionFromQuery(readsubs),
    readevents: CreateAsyncActionFromQuery(readevents, {}, GQLQueryLazyVectorAfterFetch("events")),
    readpage: CreateAsyncActionFromQuery(readpage),
    create: CreateAsyncActionFromMutation(create),
    update: CreateAsyncActionFromMutation(update),
}
