// import {graphql} from 'graphql'
import { graphql, useFragment } from 'react-relay'
import { FormpartMediumCard } from './FormpartMediumCard';

const FormpartMediumCardRelayFragment = graphql`fragment FormpartMediumCardRelayFragment on FormpartGQLModel {
    id
    name
    lastchange
    created
    nameen
    order
}`

export const FormpartMediumCardRelay = ({ formpart, children }) => {
    const formpart_ = useFragment(FormpartMediumCardRelayFragment, formpart);
    return (
        <FormpartMediumCard formpart = { formpart_ }>
            {children}
        </FormpartMediumCard>
    )
}

