import { useParams } from "react-router-dom"

import { AcprogramLazy as Lazy } from "../../Components/Acprogram/AcprogramLazy";
import { AcprogramLargeCard as LargeCard } from "../../Components/Acprogram/AcprogramLargeCard";
import { AcprogramCardCapsule as CardCapsule } from "../../Components/Acprogram/AcprogramCardCapsule";

import { 
    AcprogramPageQueryAction as QueryAction,
    AcprogramPageQueryActionValidator as QueryActionValidator
} from "./AcprogramPageQueryAction";

import { AcsubjectsTable as SubjectsTable9 } from '../../Components/Acsubject/AcsubjectsTable';
import { AcprogramstudentsTable as StudentsTable10 } from '../../Components/Acprogramstudent/AcprogramstudentsTable';

export const AcprogramPageContentBase = ({ acprogram, children}) => {
    return (
        <LargeCard acprogram={ acprogram }>
            {/* other data */}
            {children}
        </LargeCard>        
    );    
}

export const AcprogramPageContent = ({ acprogram }) => {

        return (
            <AcprogramPageContentBase acprogram={ acprogram }>
                {/* other data */}
                { acprogram?.subjects?
                    <CardCapsule acprogram={ acprogram } label={ "subjects" }>
                        <SubjectsTable9 acsubjects={ acprogram?.subjects || []}/>
                    </CardCapsule>:null
                }
                { acprogram?.students?
                    <CardCapsule acprogram={ acprogram } label={ "students" }>
                        <StudentsTable10 acprogramstudents={ acprogram?.students || []}/>
                    </CardCapsule>:null
                }
            </AcprogramPageContentBase>        
        );    
}

const AcprogramLazyPageContent = Lazy(AcprogramPageContent)(QueryAction, QueryActionValidator)

export const AcprogramPage = () => {
    const params = useParams()
    return (<AcprogramLazyPageContent {...params} />)

}
