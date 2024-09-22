import { RequestCardCapsule } from './RequestCardCapsule';
import { RequestCardBody } from './RequestCardBody';

export const RequestMediumCardFragment = `
fragment RequestMediumCardFragment on RequestGQLModel {
        id
        name
        lastchange
        created
        nameen
        gdpr
    }`

export const RequestMediumCardConstant = ({ request, children, label="" }) => {
    return (
        <RequestCardCapsule request={ request } label={label} >
            <RequestCardBody request={ request }>
                {children}
            </RequestCardBody>
        </RequestCardCapsule>        
    )
}
export let RequestMediumCard = RequestMediumCardConstant
export const setMediumCard = (newMediumCard) => RequestMediumCard = newMediumCard