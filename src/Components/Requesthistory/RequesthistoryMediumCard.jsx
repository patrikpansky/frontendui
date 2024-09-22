import { RequesthistoryCardCapsule } from './RequesthistoryCardCapsule';
import { RequesthistoryCardBody } from './RequesthistoryCardBody';

export const RequesthistoryMediumCardFragment = `
fragment RequesthistoryMediumCardFragment on RequesthistoryGQLModel {
        id
        name
        lastchange
        created
        nameen
    }`

export const RequesthistoryMediumCardConstant = ({ requesthistory, children, label="" }) => {
    return (
        <RequesthistoryCardCapsule requesthistory={ requesthistory } label={label} >
            <RequesthistoryCardBody requesthistory={ requesthistory }>
                {children}
            </RequesthistoryCardBody>
        </RequesthistoryCardCapsule>        
    )
}
export let RequesthistoryMediumCard = RequesthistoryMediumCardConstant
export const setMediumCard = (newMediumCard) => RequesthistoryMediumCard = newMediumCard