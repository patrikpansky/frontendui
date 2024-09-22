import { useParams } from "react-router-dom"

import { AcsubjectLazy as Lazy } from "../../Components/Acsubject/AcsubjectLazy";
import { AcsubjectLargeCard as LargeCard } from "../../Components/Acsubject/AcsubjectLargeCard";
import { AcsubjectCardCapsule as CardCapsule } from "../../Components/Acsubject/AcsubjectCardCapsule";

import { 
    AcsubjectPageQueryAction as QueryAction,
    AcsubjectPageQueryActionValidator as QueryActionValidator
} from "./AcsubjectPageQueryAction";

import { AcsemestersTable as SemestersTable8 } from '../../Components/Acsemester/AcsemestersTable';
import { PublicationsTable as PublicationTable10 } from '../../Components/Publication/PublicationsTable';

export const AcsubjectPageContentBase = ({ acsubject, children}) => {
    return (
        <LargeCard acsubject={ acsubject }>
            {/* other data */}
            {children}
        </LargeCard>        
    );    
}

export const AcsubjectPageContent = ({ acsubject }) => {

        return (
            <AcsubjectPageContentBase acsubject={ acsubject }>
                {/* other data */}
                { acsubject?.semesters?
                    <CardCapsule acsubject={ acsubject } label={ "semesters" }>
                        <SemestersTable8 acsemesters={ acsubject?.semesters || []}/>
                    </CardCapsule>:null
                }
                { acsubject?.publication?
                    <CardCapsule acsubject={ acsubject } label={ "publication" }>
                        <PublicationTable10 publications={ acsubject?.publication || []}/>
                    </CardCapsule>:null
                }
            </AcsubjectPageContentBase>        
        );    
}

const AcsubjectLazyPageContent = Lazy(AcsubjectPageContent)(QueryAction, QueryActionValidator)

export const AcsubjectPage = () => {
    const params = useParams()
    return (<AcsubjectLazyPageContent {...params} />)

}
