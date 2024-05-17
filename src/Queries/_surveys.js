import { 
    CreateAsyncActionFromMutation,
    CreateAsyncActionFromQuery
 } from "@hrbolek/uoisfrontend-shared/src"

// import create from './gqls/surveys/create.gql?raw'
import read from './gqls/surveys/read.gql?raw'
// import readpage from './gqls/surveys/readpage.gql?raw'
// import update from './gqls/surveys/update.gql?raw'

export const SurveysAsyncActions = {
    read: CreateAsyncActionFromQuery(read),
    // readpage: CreateAsyncActionFromQuery(readpage),
    // create: CreateAsyncActionFromMutation(create),
    // update: CreateAsyncActionFromMutation(update),
}
