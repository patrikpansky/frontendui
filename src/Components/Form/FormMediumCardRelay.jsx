// import {graphql} from 'graphql'
import { graphql, useFragment } from 'react-relay'
import { FormMediumCard } from './FormMediumCard';

const FormMediumCardRelayFragment = graphql`fragment FormMediumCardRelayFragment on FormGQLModel {
    id
    name
    lastchange
    created
    nameen
    valid
    status
}`

export const FormMediumCardRelay = ({ form, children }) => {
    const form_ = useFragment(FormMediumCardRelayFragment, form);
    return (
        <FormMediumCard form = { form_ }>
            {children}
        </FormMediumCard>
    )
}

