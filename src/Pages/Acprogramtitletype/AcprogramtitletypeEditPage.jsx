import { useParams } from "react-router-dom"

import { AcprogramtitletypeLazy as Lazy } from "../../Components/Acprogramtitletype/AcprogramtitletypeLazy";
import { AcprogramtitletypeLargeCard as LargeCard } from "../../Components/Acprogramtitletype/AcprogramtitletypeLargeCard";
import { AcprogramtitletypeCardCapsule as CardCapsule } from "../../Components/Acprogramtitletype/AcprogramtitletypeCardCapsule";
import { AcprogramtitletypeEditCard as EditCard } from "../../Components/Acprogramtitletype/AcprogramtitletypeEditCard";

import { 
    AcprogramtitletypePageQueryAction as QueryAction,
    AcprogramtitletypePageQueryActionValidator as QueryActionValidator
} from "./AcprogramtitletypePageQueryAction";


export const AcprogramtitletypeEditPageContentBase = ({ acprogramtitletype, children}) => {
    return (
        <LargeCard acprogramtitletype={ acprogramtitletype }>
            {/* other data */}
            <EditCard acprogramtitletype={ acprogramtitletype }/>
        </LargeCard>        
    );    
}

const AcprogramtitletypeLazyEditPageContent = Lazy(AcprogramtitletypeEditPageContentBase)(QueryAction, QueryActionValidator)

export const AcprogramtitletypeEditPage = () => {
    const params = useParams()
    return (<AcprogramtitletypeLazyEditPageContent {...params} />)

}
