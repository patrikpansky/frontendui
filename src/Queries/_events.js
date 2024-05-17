import { 
    CreateAsyncActionFromMutation,
    CreateAsyncActionFromQuery
 } from "@hrbolek/uoisfrontend-shared/src"

import create from './gqls/events/create.gql?raw'
import read from './gqls/events/read.gql?raw'
import readpage from './gqls/events/readpage.gql?raw'
import update from './gqls/events/update.gql?raw'

export const EventAsyncActions = {
    read: CreateAsyncActionFromQuery(read),
    readpage: CreateAsyncActionFromQuery(readpage),
    create: CreateAsyncActionFromMutation(create),
    update: CreateAsyncActionFromMutation(update),
}
