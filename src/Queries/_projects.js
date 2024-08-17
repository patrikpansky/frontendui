import { 
    CreateAsyncActionFromMutation,
    CreateAsyncActionFromQuery
 } from "@hrbolek/uoisfrontend-shared/src"

// import create from './gqls/projects/create.gql?raw'
import read from './gqls/projects/read.gql?raw'
// import readpage from './gqls/projects/readpage.gql?raw'
// import update from './gqls/projects/update.gql?raw'
import readbygroups from './gqls/projects/readbygroups.gql?raw'

export const ProjectsAsyncActions = {
    read: CreateAsyncActionFromQuery(read),
    readbygroups: CreateAsyncActionFromQuery(readbygroups),
    // readpage: CreateAsyncActionFromQuery(readpage),
    // create: CreateAsyncActionFromMutation(create),
    // update: CreateAsyncActionFromMutation(update),
}
