import { 
    CreateAsyncActionFromMutation,
    CreateAsyncActionFromQuery
 } from "@hrbolek/uoisfrontend-shared/src"

// import create from './gqls/acprograms/create.gql?raw'
import read from './gqls/acprograms/read.gql?raw'
// import readpage from './gqls/acprograms/readpage.gql?raw'
// import update from './gqls/acprograms/update.gql?raw'

export const ProgramsAsyncActions = {
    read: CreateAsyncActionFromQuery(read),
    // readpage: CreateAsyncActionFromQuery(readpage),
    // create: CreateAsyncActionFromMutation(create),
    // update: CreateAsyncActionFromMutation(update),
}
