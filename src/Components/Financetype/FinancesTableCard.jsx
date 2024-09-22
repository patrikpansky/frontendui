// field finances
// targeting to Finance
// going from Financetype
import { FinancetypeCardCapsule } from "./FinancetypeCardCapsule";
import { FinancesTable } from "../Finance/FinancesTable";
export const FinancetypeFinancesTableCard = ({ financetype , ...props}) => {
    return (
        <FinancetypeCardCapsule financetype={ financetype } >
            <FinancesTable finances={ financetype?.finances } {...props}>
            </FinancesTable>
        </FinancetypeCardCapsule>
    )
}