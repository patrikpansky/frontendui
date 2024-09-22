// import {graphql} from 'graphql'
import { graphql, useFragment } from 'react-relay'
import { FormitemcategoryMediumCard } from './FormitemcategoryMediumCard';

const FormitemcategoryMediumCardRelayFragment = graphql`fragment FormitemcategoryMediumCardRelayFragment on FormitemcategoryGQLModel {
    id
    name
    lastchange
    created
    nameen
}`

export const FormitemcategoryMediumCardRelay = ({ formitemcategory, children }) => {
    const formitemcategory_ = useFragment(FormitemcategoryMediumCardRelayFragment, formitemcategory);
    return (
        <FormitemcategoryMediumCard formitemcategory = { formitemcategory_ }>
            {children}
        </FormitemcategoryMediumCard>
    )
}

