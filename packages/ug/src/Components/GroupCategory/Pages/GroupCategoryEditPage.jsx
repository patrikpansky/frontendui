import { useState } from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import { useParams } from 'react-router'
import { useAsyncAction } from "@hrbolek/uoisfrontend-gql-shared"
import { ComponentSentinel, LeftColumn, MiddleColumn, LoadingSpinner, Input, CreateDelayer } from "@hrbolek/uoisfrontend-shared"
import { GroupCategoryPageNavbar } from './GroupCategoryPageNavbar'
import { GroupCategoryReadAsyncAction } from '../Queries'
import { GroupCategoryMediumEditableContent } from '../GroupCategoryMediumEditableContent'
import { GroupCategoryEditableCard } from '../GroupCategoryEditableCard'

const GroupCategoryPageContent = ({
    groupcategory,
    onChange = (e) => null,
    onBlur = (e) => null,
}) => {
    return (
        <>
            <GroupCategoryPageNavbar groupcategory={groupcategory} />
            <Row>
                <LeftColumn>
                    
                </LeftColumn>
                <MiddleColumn>
                    <GroupCategoryEditableCard groupcategory={groupcategory} onChange={onChange} onBlur={onBlur} />
                    <br/>
                    {JSON.stringify(groupcategory)}
                </MiddleColumn>
            </Row>
        </>
    )
}


// const GroupCategoryPageContentLazy = createLazyComponent(GroupCategoryPageContent, "groupcategory", GroupCategoryReadAsyncAction)

const GroupCategoryPageContentLazy = ({groupcategory}) => {
    const { error, loading, entity, fetch } = useAsyncAction(GroupCategoryReadAsyncAction, groupcategory)
    const [delayer] = useState(() => CreateDelayer())

    const handleChange = async(e) => {
        console.log("GroupCategoryPageContentLazy.handleChange.e", e)
        const data = e.target.value
        const serverResponse = await delayer(() => fetch(data))
        console.log("GroupCategoryPageContentLazy.serverResponse", serverResponse)
    }
    const handleBlur = async(e) => {
        console.log("GroupCategoryPageContentLazy.handleBlur.e", e)
        const data = e.target.value
        const serverResponse = await delayer(() => fetch(data))
        console.log("GroupCategoryPageContentLazy.serverResponse", serverResponse)
    }

    return (<>
        {loading && <LoadingSpinner />}
        {error && <ErrorEvent errors={error} />}
        {entity && <GroupCategoryPageContent groupcategory={entity}  onChange={handleChange} onBlur={handleBlur} />}
    </>)
}

export const GroupCategoryEditPage = () => {
    const { id } = useParams()
    const groupcategory = {id}
    return ( 
        <ComponentSentinel meCondition={me => me?.email?.includes("world")}>
            <GroupCategoryPageContentLazy groupcategory ={groupcategory} />
        </ComponentSentinel>
    )
}


