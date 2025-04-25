import { createQueryStrLazy } from "@hrbolek/uoisfrontend-gql-shared";

export const UserLinkFragment = createQueryStrLazy(`
fragment UserLinkFragment on UserGQLModel {
    __typename
    id
    lastchange
    created
    createdbyId
    changedbyId
    rbacobjectId
    name
    givenname
    middlename
    email
    firstname
    surname
    valid
    startdate
    enddate
    typeId
    isThisMe
    gdpr
    fullname
}
`);

export const UserMediumFragment = createQueryStrLazy(`
fragment UserMediumFragment on UserGQLModel {
    ...UserLinkFragment
    createdby {
        __typename
        id
        lastchange
        created
        createdbyId
        changedbyId
        rbacobjectId
        name
        givenname
        middlename
        email
        firstname
        surname
        valid
        startdate
        enddate
        typeId
        isThisMe
        gdpr
        fullname
    }
    changedby {
        __typename
        id
        lastchange
        created
        createdbyId
        changedbyId
        rbacobjectId
        name
        givenname
        middlename
        email
        firstname
        surname
        valid
        startdate
        enddate
        typeId
        isThisMe
        gdpr
        fullname
    }
    rbacobject {
        __typename
        id
        userCanWithState
        userCanWithoutState
    }
}
`, UserLinkFragment);

export const UserLargeFragment = createQueryStrLazy(`
fragment UserLargeFragment on UserGQLModel {
    ...UserMediumFragment
    studies {
        __typename
        id
        lastchange
        created
        createdbyId
        changedbyId
        rbacobjectId
        userId
        programId
        stateId
        semester
    }
    memberships {
        __typename
        id
        lastchange
        created
        createdbyId
        changedbyId
        rbacobjectId
        userId
        groupId
        valid
        startdate
        enddate
    }
    roles {
        __typename
        id
        lastchange
        created
        createdbyId
        changedbyId
        rbacobjectId
        valid
        deputy
        startdate
        enddate
        roletypeId
        userId
        groupId
    }
    rolesOn {
        __typename
        id
        lastchange
        created
        createdbyId
        changedbyId
        rbacobjectId
        valid
        deputy
        startdate
        enddate
        roletypeId
        userId
        groupId
    }
    memberOf {
        __typename
        id
        lastchange
        created
        createdbyId
        changedbyId
        rbacobjectId
        name
        nameEn
        email
        abbreviation
        startdate
        enddate
        grouptypeId
        mastergroupId
        path
        valid
    }
}
`, UserMediumFragment);
