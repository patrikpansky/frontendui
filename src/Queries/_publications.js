import { 
    CreateAsyncActionFromMutation,
    CreateAsyncActionFromQuery
 } from "@hrbolek/uoisfrontend-shared/src"

// import create from './gqls/publications/create.gql?raw'
import read from './gqls/publications/read.gql?raw'
// import readpage from './gqls/publications/readpage.gql?raw'
// import update from './gqls/publications/update.gql?raw'

export const PublicationsAsyncActions = {
    read: CreateAsyncActionFromQuery(read),
    // readpage: CreateAsyncActionFromQuery(readpage),
    // create: CreateAsyncActionFromMutation(create),
    // update: CreateAsyncActionFromMutation(update),
}
