import { useParams } from "react-router-dom"

import { StatementofworkLazy as Lazy } from "../../Components/Statementofwork/StatementofworkLazy";
import { StatementofworkLargeCard as LargeCard } from "../../Components/Statementofwork/StatementofworkLargeCard";
import { StatementofworkCardCapsule as CardCapsule } from "../../Components/Statementofwork/StatementofworkCardCapsule";

import { 
    StatementofworkPageQueryAction as QueryAction,
    StatementofworkPageQueryActionValidator as QueryActionValidator
} from "./StatementofworkPageQueryAction";


export const StatementofworkPageContentBase = ({ statementofwork, children}) => {
    return (
        <LargeCard statementofwork={ statementofwork }>
            {/* other data */}
            {children}
        </LargeCard>        
    );    
}

export const StatementofworkPageContent = ({ statementofwork }) => {

        return (
            <StatementofworkPageContentBase statementofwork={ statementofwork }>
                {/* other data */}
            </StatementofworkPageContentBase>        
        );    
}

const StatementofworkLazyPageContent = Lazy(StatementofworkPageContent)(QueryAction, QueryActionValidator)

export const StatementofworkPage = () => {
    const params = useParams()
    return (<StatementofworkLazyPageContent {...params} />)

}
