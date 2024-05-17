import { 
    CreateAsyncActionFromMutation,
    CreateAsyncActionFromQuery
 } from "@hrbolek/uoisfrontend-shared/src"

// import create from './gqls/acsubjects/create.gql?raw'
import read from './gqls/acsubjects/read.gql?raw'
// import readpage from './gqls/acsubjects/readpage.gql?raw'
// import update from './gqls/acsubjects/update.gql?raw'

export const SubjectsAsyncActions = {
    read: CreateAsyncActionFromQuery(read),
    // readpage: CreateAsyncActionFromQuery(readpage),
    // create: CreateAsyncActionFromMutation(create),
    // update: CreateAsyncActionFromMutation(update),
}
