import { 
    CreateAsyncActionFromMutation,
    CreateAsyncActionFromQuery
 } from "@hrbolek/uoisfrontend-shared/src"

// import create from './gqls/facilities/create.gql?raw'
import read from './gqls/facilities/read.gql?raw'
// import readpage from './gqls/facilities/readpage.gql?raw'
// import update from './gqls/facilities/update.gql?raw'

export const FacilitiesAsyncActions = {
    read: CreateAsyncActionFromQuery(read),
    // readpage: CreateAsyncActionFromQuery(readpage),
    // create: CreateAsyncActionFromMutation(create),
    // update: CreateAsyncActionFromMutation(update),
}
