import { PlusLg } from "react-bootstrap-icons";
import { useDispatch } from "react-redux";


export const PlanAddLessonsFromAccreditationButton = ({ plan }) => {
    const dispatch = useDispatch();
    const onClick = () => {
        //     dispatch(PlanLessonInsertAsyncAction({name, lessontype_id, plan_id: plan.id}))
        //     .then(
        //         CheckGQLError({
        //             "ok": () => dispatch(MsgFlashAsyncAction({title: "Přidání lekce úspěšné"})),
        //             "fail": (json) => dispatch(MsgAddAsyncAction({title: "Přidání lekce se nepovedlo\n" + JSON.stringify(json)})),
        //         })
        //     )
    };
    if (plan?.semester) {
        return (
            <button className="btn form-control btn-outline-success" onClick={onClick}><PlusLg /> Přidat lekce z akreditace</button>
        );

    } else {
        return <></>;
    }
};
