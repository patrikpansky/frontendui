import { useParams } from "react-router-dom"

import { StatementofworkLazy as Lazy } from "../../Components/Statementofwork/StatementofworkLazy";
import { StatementofworkLargeCard as LargeCard } from "../../Components/Statementofwork/StatementofworkLargeCard";
import { StatementofworkCardCapsule as CardCapsule } from "../../Components/Statementofwork/StatementofworkCardCapsule";
import { StatementofworkEditCard as EditCard } from "../../Components/Statementofwork/StatementofworkEditCard";

import { 
    StatementofworkPageQueryAction as QueryAction,
    StatementofworkPageQueryActionValidator as QueryActionValidator
} from "./StatementofworkPageQueryAction";


export const StatementofworkEditPageContentBase = ({ statementofwork, children}) => {
    return (
        <LargeCard statementofwork={ statementofwork }>
            {/* other data */}
            <EditCard statementofwork={ statementofwork }/>
        </LargeCard>        
    );    
}

const StatementofworkLazyEditPageContent = Lazy(StatementofworkEditPageContentBase)(QueryAction, QueryActionValidator)

export const StatementofworkEditPage = () => {
    const params = useParams()
    return (<StatementofworkLazyEditPageContent {...params} />)

}
