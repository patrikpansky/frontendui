// import {graphql} from 'graphql'
import { graphql, useFragment } from 'react-relay'
import { FormcategoryMediumCard } from './FormcategoryMediumCard';

const FormcategoryMediumCardRelayFragment = graphql`fragment FormcategoryMediumCardRelayFragment on FormcategoryGQLModel {
    id
    name
    lastchange
    created
    nameen
}`

export const FormcategoryMediumCardRelay = ({ formcategory, children }) => {
    const formcategory_ = useFragment(FormcategoryMediumCardRelayFragment, formcategory);
    return (
        <FormcategoryMediumCard formcategory = { formcategory_ }>
            {children}
        </FormcategoryMediumCard>
    )
}

