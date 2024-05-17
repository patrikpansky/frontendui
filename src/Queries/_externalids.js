import { 
    CreateAsyncActionFromMutation,
    CreateAsyncActionFromQuery
 } from "@hrbolek/uoisfrontend-shared/src"

// import create from './gqls/externalids/create.gql?raw'
import read from './gqls/externalids/read.gql?raw'
// import readpage from './gqls/externalids/readpage.gql?raw'
// import update from './gqls/externalids/update.gql?raw'

export const ExternalidsAsyncActions = {
    read: CreateAsyncActionFromQuery(read),
    // readpage: CreateAsyncActionFromQuery(readpage),
    // create: CreateAsyncActionFromMutation(create),
    // update: CreateAsyncActionFromMutation(update),
}
