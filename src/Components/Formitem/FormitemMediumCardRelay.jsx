// import {graphql} from 'graphql'
import { graphql, useFragment } from 'react-relay'
import { FormitemMediumCard } from './FormitemMediumCard';

const FormitemMediumCardRelayFragment = graphql`fragment FormitemMediumCardRelayFragment on FormitemGQLModel {
    id
    name
    lastchange
    created
    nameen
    order
    value
}`

export const FormitemMediumCardRelay = ({ formitem, children }) => {
    const formitem_ = useFragment(FormitemMediumCardRelayFragment, formitem);
    return (
        <FormitemMediumCard formitem = { formitem_ }>
            {children}
        </FormitemMediumCard>
    )
}

