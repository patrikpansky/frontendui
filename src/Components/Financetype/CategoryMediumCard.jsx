// field category
// targeting to FinanceCategory
// going from Financetype
import { FinancecategoryMediumCard } from "../Financecategory/FinancecategoryMediumCard";

export const FinancetypeCategoryMediumCard = ({ financetype , ...props}) => {
    return (
        <FinancecategoryMediumCard financecategory={ financetype?.category } {...props} />
    )
}