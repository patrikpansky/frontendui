// import {graphql} from 'graphql'
import { graphql, useFragment } from 'react-relay'
import { FormtypeMediumCard } from './FormtypeMediumCard';

const FormtypeMediumCardRelayFragment = graphql`fragment FormtypeMediumCardRelayFragment on FormtypeGQLModel {
    id
    name
    lastchange
    created
    nameen
}`

export const FormtypeMediumCardRelay = ({ formtype, children }) => {
    const formtype_ = useFragment(FormtypeMediumCardRelayFragment, formtype);
    return (
        <FormtypeMediumCard formtype = { formtype_ }>
            {children}
        </FormtypeMediumCard>
    )
}

