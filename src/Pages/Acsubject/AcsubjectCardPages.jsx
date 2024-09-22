import { useParams } from "react-router-dom"

import { AcsubjectLargeCard as LargeCard } from "../../Components/Acsubject/AcsubjectLargeCard";
import { AcsubjectCardCapsule as CardCapsule } from "../../Components/Acsubject/AcsubjectCardCapsule";
import { 
    AcsubjectLazy as Lazy,
} from "../../Components/Acsubject/AcsubjectLazy";

import { 
    AcsubjectPageQueryAction as QueryAction,
    AcsubjectPageQueryActionValidator as QueryActionValidator
} from "./AcsubjectPageQueryAction";

// import { AcsemestersCards as SemesterssCards8 } from '../../Components/Acsemester/AcsemestersCards';
import { AcsubjectSemestersCardOfCards as SemestersCards8 } from '../../Components/Acsubject/SemestersCardOfCards';
// import { PublicationsCards as PublicationsCards10 } from '../../Components/Publication/PublicationsCards';
import { AcsubjectPublicationCardOfCards as PublicationCards10 } from '../../Components/Acsubject/PublicationCardOfCards';

export const AcsubjectSemestersPageContent = ({ acsubject }) => {
    return (
        <LargeCard acsubject={ acsubject }>
            {/* other data */}
            { acsubject?.semesters?
                <SemestersCards8 acsubject={ acsubject }/>
                :null 
            }
        </LargeCard>        
    );    
}
export const AcsubjectPublicationPageContent = ({ acsubject }) => {
    return (
        <LargeCard acsubject={ acsubject }>
            {/* other data */}
            { acsubject?.publication?
                <PublicationCards10 acsubject={ acsubject }/>
                :null 
            }
        </LargeCard>        
    );    
}

const AcsubjectSemestersLazyPageContent = Lazy(AcsubjectSemestersPageContent)(QueryAction, QueryActionValidator)
export const AcsubjectSemestersCardPage = () => {
    const params = useParams()
    return (<AcsubjectSemestersLazyPageContent {...params} />)
}

const AcsubjectPublicationLazyPageContent = Lazy(AcsubjectPublicationPageContent)(QueryAction, QueryActionValidator)
export const AcsubjectPublicationCardPage = () => {
    const params = useParams()
    return (<AcsubjectPublicationLazyPageContent {...params} />)
}

