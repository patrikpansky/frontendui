import { CreateAsyncActionFromMutation } from "@hrbolek/uoisfrontend-shared/src"

import lesson_create from './gqls/lessons/create.gql?raw'
import lesson_delete from './gqls/lessons/delete.gql?raw'
import lesson_delete_facility from './gqls/lessons/deletefacility.gql?raw'
import lesson_delete_group from './gqls/lessons/deletegroup.gql?raw'
import lesson_delete_teacher from './gqls/lessons/deleteteacher.gql?raw'
import lesson_create_facility from './gqls/lessons/createfacility.gql?raw'
import lesson_create_group from './gqls/lessons/creategroup.gql?raw'
import lesson_create_teacher from './gqls/lessons/createteacher.gql?raw'

export const LessonAsyncActions = {
    create: CreateAsyncActionFromMutation(lesson_create),
    delete: CreateAsyncActionFromMutation(lesson_delete),
    facility: {
        delete: CreateAsyncActionFromMutation(lesson_delete_facility),
        create: CreateAsyncActionFromMutation(lesson_create_facility)
    },
    group: {
        delete: CreateAsyncActionFromMutation(lesson_delete_group),
        create: CreateAsyncActionFromMutation(lesson_create_group)
    },
    teacher: {
        delete: CreateAsyncActionFromMutation(lesson_delete_teacher),
        create: CreateAsyncActionFromMutation(lesson_create_teacher)
    }
}