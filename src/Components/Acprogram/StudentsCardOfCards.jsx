// field students
// targeting to AcProgramStudent
// going from Acprogram
import { AcprogramCardCapsule } from "./AcprogramCardCapsule";
import { AcprogramstudentsCards } from "../Acprogramstudent/AcprogramstudentsCards";
import { AcprogramStudentsLoadMoreButton as LoadMoreButton} from "../Acprogram/StudentsLoadMoreButton";

export const AcprogramStudentsCardOfCards = ({ acprogram, skip=0, limit=10, where, orderby, ...props}) => {
    return (
        <AcprogramCardCapsule acprogram={ acprogram } label={"Students"}>
            <AcprogramstudentsCards acprogramstudents={ acprogram?.students } {...props} >
                <LoadMoreButton acprogram={ acprogram } skip={skip} limit={limit} orderby={orderby} where={where} />
            </AcprogramstudentsCards>
        </AcprogramCardCapsule>
    )
}