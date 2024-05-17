import { 
    CreateAsyncActionFromMutation,
    CreateAsyncActionFromQuery
 } from "@hrbolek/uoisfrontend-shared/src"

// import create from './gqls/acsemesters/create.gql?raw'
import read from './gqls/acsemesters/read.gql?raw'
// import readpage from './gqls/acsemesters/readpage.gql?raw'
// import update from './gqls/acsemesters/update.gql?raw'

export const SemestersAsyncActions = {
    read: CreateAsyncActionFromQuery(read),
    // readpage: CreateAsyncActionFromQuery(readpage),
    // create: CreateAsyncActionFromMutation(create),
    // update: CreateAsyncActionFromMutation(update),
}
