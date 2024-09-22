import { useParams } from "react-router-dom"

import { AcprogramLazy as Lazy } from "../../Components/Acprogram/AcprogramLazy";
import { AcprogramLargeCard as LargeCard } from "../../Components/Acprogram/AcprogramLargeCard";
import { AcprogramCardCapsule as CardCapsule } from "../../Components/Acprogram/AcprogramCardCapsule";
import { AcprogramEditCard as EditCard } from "../../Components/Acprogram/AcprogramEditCard";

import { 
    AcprogramPageQueryAction as QueryAction,
    AcprogramPageQueryActionValidator as QueryActionValidator
} from "./AcprogramPageQueryAction";

import { AcsubjectsTable as SubjectsTable9 } from '../../Components/Acsubject/AcsubjectsTable';
import { AcprogramstudentsTable as StudentsTable10 } from '../../Components/Acprogramstudent/AcprogramstudentsTable';

export const AcprogramEditPageContentBase = ({ acprogram, children}) => {
    return (
        <LargeCard acprogram={ acprogram }>
            {/* other data */}
            <EditCard acprogram={ acprogram }/>
        </LargeCard>        
    );    
}

const AcprogramLazyEditPageContent = Lazy(AcprogramEditPageContentBase)(QueryAction, QueryActionValidator)

export const AcprogramEditPage = () => {
    const params = useParams()
    return (<AcprogramLazyEditPageContent {...params} />)

}
