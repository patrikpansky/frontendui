import { 
    CreateAsyncActionFromMutation,
    CreateAsyncActionFromQuery
 } from "@hrbolek/uoisfrontend-shared/src"

// import create from './gqls/requests/create.gql?raw'
import read from './gqls/requests/read.gql?raw'
// import readpage from './gqls/requests/readpage.gql?raw'
// import update from './gqls/requests/update.gql?raw'
import usetransition from './gqls/requests/usetransition.gql?raw'

export const RequestsAsyncActions = {
    read: CreateAsyncActionFromQuery(read),
    // readpage: CreateAsyncActionFromQuery(readpage),
    // create: CreateAsyncActionFromMutation(create),
    // update: CreateAsyncActionFromMutation(update),
    usetransition: CreateAsyncActionFromMutation(usetransition)
}
