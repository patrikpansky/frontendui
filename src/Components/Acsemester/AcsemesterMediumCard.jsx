import { AcsemesterCardCapsule } from './AcsemesterCardCapsule';
import { AcsemesterCardBody } from './AcsemesterCardBody';

export const AcsemesterMediumCardFragment = `
fragment AcsemesterMediumCardFragment on AcsemesterGQLModel {
        id
        created
        lastchange
        order
    }`

export const AcsemesterMediumCardConstant = ({ acsemester, children, label="" }) => {
    return (
        <AcsemesterCardCapsule acsemester={ acsemester } label={label} >
            <AcsemesterCardBody acsemester={ acsemester }>
                {children}
            </AcsemesterCardBody>
        </AcsemesterCardCapsule>        
    )
}
export let AcsemesterMediumCard = AcsemesterMediumCardConstant
export const setMediumCard = (newMediumCard) => AcsemesterMediumCard = newMediumCard