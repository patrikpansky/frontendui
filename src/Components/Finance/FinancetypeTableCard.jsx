// field financetype
// targeting to FinanceType
// going from Finance
import { FinanceCardCapsule } from "./FinanceCardCapsule";
import { FinancetypesTable } from "../Financetype/FinancetypesTable";
export const FinanceFinancetypeTableCard = ({ finance , ...props}) => {
    return (
        <FinanceCardCapsule finance={ finance } >
            <FinancetypesTable financetypes={ finance?.financetype } {...props}>
            </FinancetypesTable>
        </FinanceCardCapsule>
    )
}