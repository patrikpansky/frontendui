import { 
    CreateAsyncActionFromMutation,
    CreateAsyncActionFromQuery
 } from "@hrbolek/uoisfrontend-shared/src"

// import create from './gqls/forms/create.gql?raw'
import read from './gqls/forms/read.gql?raw'
// import readpage from './gqls/forms/readpage.gql?raw'
// import update from './gqls/forms/update.gql?raw'

export const FormsAsyncActions = {
    read: CreateAsyncActionFromQuery(read),
    // readpage: CreateAsyncActionFromQuery(readpage),
    // create: CreateAsyncActionFromMutation(create),
    // update: CreateAsyncActionFromMutation(update),
}
