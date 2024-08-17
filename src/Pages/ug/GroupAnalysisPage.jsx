// import { useFreshItem } from "@hrbolek/uoisfrontend-shared/src"
import { useParams } from "react-router-dom"
import { useFreshItem, CreateAsyncQueryValidator, useDispatch } from "@hrbolek/uoisfrontend-shared/src"
import { CardCapsule } from '@hrbolek/uoisfrontend-shared/src';
import { GroupLargeCard } from "../../Components/Group/GroupLargeCard"
import { GroupAsyncActions } from "../../Queries/_groups"
import { GroupAnalysisStudyGroupsCard, GroupAnalysisSubGroupsCard } from "../../Components/Group/GroupAnalysisCard"

const validator = CreateAsyncQueryValidator({error: "Nepovedlo se načíst skupinu", success: "Načtení skupiny se povedlo"})
const codes = {
    "subgroups": GroupAnalysisSubGroupsCard,
    "studygroups": GroupAnalysisStudyGroupsCard
}
export const GroupAnalysisPage = ()  => {
    const {id, code} = useParams()
    const [onResolve, onReject] = validator(useDispatch())
    const [group, groupPromise] = useFreshItem({id}, GroupAsyncActions.read)
    groupPromise.then(onResolve, onReject)
    
    // thenable je Promise, takze lze pouzit jeji metodu then; 
    // teto metode predame funkce pro zpracovani spravneho (uspesneho) a chyboveho cteni
    const Component = codes[code] || (() => <CardCapsule>Analýza není k dispozici.</CardCapsule>)
    if (group) {
        return (
            // <GroupLargeCard group={group}>
            //     <Component group={group} />
            // </GroupLargeCard>
            <Component group={group} />
        )
    } else {
        return (
            <div>Loading...</div>
        )
    }
    
}