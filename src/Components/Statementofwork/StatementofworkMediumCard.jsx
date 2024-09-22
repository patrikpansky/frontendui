import { StatementofworkCardCapsule } from './StatementofworkCardCapsule';
import { StatementofworkCardBody } from './StatementofworkCardBody';

export const StatementofworkMediumCardFragment = `
fragment StatementofworkMediumCardFragment on StatementofworkGQLModel {
        id
        lastchange
        startdate
        enddate
        created
        valid
    }`

export const StatementofworkMediumCardConstant = ({ statementofwork, children, label="" }) => {
    return (
        <StatementofworkCardCapsule statementofwork={ statementofwork } label={label} >
            <StatementofworkCardBody statementofwork={ statementofwork }>
                {children}
            </StatementofworkCardBody>
        </StatementofworkCardCapsule>        
    )
}
export let StatementofworkMediumCard = StatementofworkMediumCardConstant
export const setMediumCard = (newMediumCard) => StatementofworkMediumCard = newMediumCard