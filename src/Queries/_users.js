import { 
    CreateAsyncActionFromMutation,
    CreateAsyncActionFromQuery
 } from "@hrbolek/uoisfrontend-shared/src"

import create from './gqls/users/create.gql?raw'
import read from './gqls/users/read.gql?raw'
import readpage from './gqls/users/readpage.gql?raw'
import update from './gqls/users/update.gql?raw'

const queries = {
    read: CreateAsyncActionFromQuery(read),
    readpage: CreateAsyncActionFromQuery(readpage),
    create: CreateAsyncActionFromMutation(create),
    update: CreateAsyncActionFromMutation(update),
}

export default queries