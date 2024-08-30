import { 
    CreateAsyncActionFromMutation,
    CreateAsyncActionFromQuery
 } from "@hrbolek/uoisfrontend-shared/src"

import create from './gqls/users/create.gql?raw'
import read from './gqls/users/read.gql?raw'
import readpage from './gqls/users/readpage.gql?raw'
import update from './gqls/users/update.gql?raw'
import searchpattern from './gqls/users/searchpattern.gql?raw'
import readgdpr from './gqls/users/readgdpr.gql?raw'

export const UserAsyncActions = {
    read: CreateAsyncActionFromQuery(read),
    readgdpr: CreateAsyncActionFromQuery(readgdpr),
    readpage: CreateAsyncActionFromQuery(readpage),
    create: CreateAsyncActionFromMutation(create),
    update: CreateAsyncActionFromMutation(update),
    search: CreateAsyncActionFromQuery(searchpattern)
}
