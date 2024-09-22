import { useParams } from "react-router-dom"

import { AcprogramtitletypeLazy as Lazy } from "../../Components/Acprogramtitletype/AcprogramtitletypeLazy";
import { AcprogramtitletypeLargeCard as LargeCard } from "../../Components/Acprogramtitletype/AcprogramtitletypeLargeCard";
import { AcprogramtitletypeCardCapsule as CardCapsule } from "../../Components/Acprogramtitletype/AcprogramtitletypeCardCapsule";

import { 
    AcprogramtitletypePageQueryAction as QueryAction,
    AcprogramtitletypePageQueryActionValidator as QueryActionValidator
} from "./AcprogramtitletypePageQueryAction";


export const AcprogramtitletypePageContentBase = ({ acprogramtitletype, children}) => {
    return (
        <LargeCard acprogramtitletype={ acprogramtitletype }>
            {/* other data */}
            {children}
        </LargeCard>        
    );    
}

export const AcprogramtitletypePageContent = ({ acprogramtitletype }) => {

        return (
            <AcprogramtitletypePageContentBase acprogramtitletype={ acprogramtitletype }>
                {/* other data */}
            </AcprogramtitletypePageContentBase>        
        );    
}

const AcprogramtitletypeLazyPageContent = Lazy(AcprogramtitletypePageContent)(QueryAction, QueryActionValidator)

export const AcprogramtitletypePage = () => {
    const params = useParams()
    return (<AcprogramtitletypeLazyPageContent {...params} />)

}
