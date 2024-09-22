import { useParams } from "react-router-dom"

import { AcprogramLargeCard as LargeCard } from "../../Components/Acprogram/AcprogramLargeCard";
import { AcprogramCardCapsule as CardCapsule } from "../../Components/Acprogram/AcprogramCardCapsule";
import { 
    AcprogramLazy as Lazy,
} from "../../Components/Acprogram/AcprogramLazy";

import { 
    AcprogramPageQueryAction as QueryAction,
    AcprogramPageQueryActionValidator as QueryActionValidator
} from "./AcprogramPageQueryAction";

// import { AcsubjectsCards as SubjectssCards9 } from '../../Components/Acsubject/AcsubjectsCards';
import { AcprogramSubjectsCardOfCards as SubjectsCards9 } from '../../Components/Acprogram/SubjectsCardOfCards';
// import { AcprogramstudentsCards as StudentssCards10 } from '../../Components/Acprogramstudent/AcprogramstudentsCards';
import { AcprogramStudentsCardOfCards as StudentsCards10 } from '../../Components/Acprogram/StudentsCardOfCards';

export const AcprogramSubjectsPageContent = ({ acprogram }) => {
    return (
        <LargeCard acprogram={ acprogram }>
            {/* other data */}
            { acprogram?.subjects?
                <SubjectsCards9 acprogram={ acprogram }/>
                :null 
            }
        </LargeCard>        
    );    
}
export const AcprogramStudentsPageContent = ({ acprogram }) => {
    return (
        <LargeCard acprogram={ acprogram }>
            {/* other data */}
            { acprogram?.students?
                <StudentsCards10 acprogram={ acprogram }/>
                :null 
            }
        </LargeCard>        
    );    
}

const AcprogramSubjectsLazyPageContent = Lazy(AcprogramSubjectsPageContent)(QueryAction, QueryActionValidator)
export const AcprogramSubjectsCardPage = () => {
    const params = useParams()
    return (<AcprogramSubjectsLazyPageContent {...params} />)
}

const AcprogramStudentsLazyPageContent = Lazy(AcprogramStudentsPageContent)(QueryAction, QueryActionValidator)
export const AcprogramStudentsCardPage = () => {
    const params = useParams()
    return (<AcprogramStudentsLazyPageContent {...params} />)
}

