import { infoCardCapsule } from './infoCardCapsule';
import { infoCardBody } from './infoCardBody';

export const infoMediumCardFragment = `
fragment infoMediumCardFragment on infoGQLModel {
        after
        before
        first
        last
        hasNextPage
    }`

export const infoMediumCardConstant = ({ pageinfo, children, label="" }) => {
    return (
        <infoCardCapsule pageinfo={ pageinfo } label={label} >
            <infoCardBody pageinfo={ pageinfo }>
                {children}
            </infoCardBody>
        </infoCardCapsule>        
    )
}
export let infoMediumCard = infoMediumCardConstant
export const setMediumCard = (newMediumCard) => infoMediumCard = newMediumCard