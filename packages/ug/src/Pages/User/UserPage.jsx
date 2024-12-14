import { useParams } from 'react-router'
import { createAsyncGraphQLAction } from "@hrbolek/uoisfrontend-gql-shared"
import { createLazyComponent, ComponentSentinel, ProxyLink } from "@hrbolek/uoisfrontend-shared"
import { UserLargeCard } from "../../Components/User/UserLargeCard"
import { GroupSchemaLazy } from '../../Components/Group/GroupSchema'
import { UserLink, UserMediumCard } from '../../Components'
import { UserEventsCard } from '../../Components/User/Vectors/UserEventsCard'
import { PersonFill } from 'react-bootstrap-icons'
import Button from 'react-bootstrap/Button'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'


const UserQueryRead = `
query UserQueryRead($id: UUID!) {
    result: userById(id: $id) {
        __typename
        id
        name
        surname
        fullname
        email
        # university: memberOf(grouptypeId: "cd49e152-610c-11ed-9f29-001a7dda7110") {
        #     __typename
        #     id
        #     name
        #     }        
        groups(
        where: {_and: [ 
            {group: {grouptype: {category_id: {_eq: "be2b2dcc-4bfe-4035-99e8-dd6d6f01562e"}}}},
            {group: {valid: {_eq: true}}},
            {valid: {_eq: true}},
        ]
        }
        ) {
            __typename
            id
            name
            type {
                id
                name
                category {
                    id
                    name
                }
            }
        }
    }
}
`

const TitleButton = ({user, segment, label}) => {
    const urlbase = (segment) => `/ug/user/${segment}/${user?.id}`
    return (
        <span className="btn btn-sm btn-outline-secondary" style={{ marginLeft: '8px' }}>
            <ProxyLink to={urlbase(segment)}>{label}</ProxyLink>
        </span>
    )
}

const UserPageTitle = ({user}) => {
    return (
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            {/* Left-aligned content */}
            <div>
                <Navbar.Brand>
                    <PersonFill /> <UserLink user={user} />
                </Navbar.Brand>
                
            </div>
            {/* Right-aligned buttons */}
            <div>
                
                <TitleButton user={user} segment={"roles"} label={"Role"} />
                <TitleButton user={user} segment={"groups"} label={"Skupiny"} />
                <Nav.Divider />
                <div className="vr mx-2"></div> {/* Vertical delimiter */}
                <div style={{ borderLeft: '1px solid #ddd', height: '24px', margin: '0 8px' }}></div>
                <TitleButton user={user} segment={"events"} label={"Rozvrh"} />
                <TitleButton user={user} segment={"granting"} label={"Garance"} />
                <TitleButton user={user} segment={"learning"} label={"Výuka"} />
                
                {/* <TitleButton user={user} segment={"requests"} label={"Požadavky"} /> */}
                <TitleButton user={user} segment={"projects"} label={"Projekty"} />
                <TitleButton user={user} segment={"publications"} label={"Výsledky"} />
            </div>
        </div>
    );
}

const TitleNavButton = ({ user, segment, label }) => {
    const urlbase = (segment) => `/ug/user/${segment}/${user?.id}`;
    return (
        <Nav.Link as="span">
            <ProxyLink to={urlbase(segment)}>{label}</ProxyLink>
        </Nav.Link>
    );
};

const UserPageNavbar = ({ user }) => {
    return (
        <Navbar bg="light" expand="lg" className="mb-3">
            <Navbar.Brand>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <PersonFill style={{ marginRight: '8px' }} />
                    <UserLink user={user} />
                </div>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="user-navbar" />
            <Navbar.Collapse id="user-navbar">
                <Nav className="ms-auto">
                    <TitleNavButton user={user} segment="granting" label="Garance" />
                    <TitleNavButton user={user} segment="learning" label="Výuka" />
                    <TitleNavButton user={user} segment="events" label="Rozvrh" />
                </Nav>
                <Nav className="ms-auto">
                    <TitleNavButton user={user} segment="roles" label="Role" />
                    <TitleNavButton user={user} segment="groups" label="Skupiny" />
                </Nav>
                <Nav className="ms-auto">
                    <TitleNavButton user={user} segment="projects" label="Projekty" />
                    <TitleNavButton user={user} segment="publications" label="Výsledky" />
                    <TitleNavButton user={user} segment="requests" label="Požadavky" />
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

const UserPageContent = ({user}) => {
    return (
        <>
        {/* {user?.groups && <GroupSchemaLazy group={user?.groups[0]} />} */}
        <UserLargeCard user={user} title={<UserPageNavbar user={user } />}>
            {/* <UserMediumCard user={user} />
            <UserEventsCard user={user} /> */}

        </UserLargeCard>
        </>
    )
}

const UserReadAsyncAction = createAsyncGraphQLAction(UserQueryRead)
const UserPageContentLazy = createLazyComponent(UserPageContent, "user", UserReadAsyncAction)
export const UserPage = () => {
    const { id } = useParams()
    const user = {id}
    return ( 
        <ComponentSentinel meCondition={me => me?.email?.includes("world")}>
            <UserPageContentLazy user ={user} />
        </ComponentSentinel>
    )
}