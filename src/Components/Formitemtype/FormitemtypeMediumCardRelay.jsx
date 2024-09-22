// import {graphql} from 'graphql'
import { graphql, useFragment } from 'react-relay'
import { FormitemtypeMediumCard } from './FormitemtypeMediumCard';

const FormitemtypeMediumCardRelayFragment = graphql`fragment FormitemtypeMediumCardRelayFragment on FormitemtypeGQLModel {
    id
    name
    lastchange
    created
    nameen
}`

export const FormitemtypeMediumCardRelay = ({ formitemtype, children }) => {
    const formitemtype_ = useFragment(FormitemtypeMediumCardRelayFragment, formitemtype);
    return (
        <FormitemtypeMediumCard formitemtype = { formitemtype_ }>
            {children}
        </FormitemtypeMediumCard>
    )
}

