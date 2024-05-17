// import { useFreshItem } from "@hrbolek/uoisfrontend-shared/src"
import { useParams } from "react-router-dom"
import { useFreshItem, CreateAsyncQueryValidator, useDispatch } from "@hrbolek/uoisfrontend-shared/src"
import { FormLargeCard } from "../../Components/Form/FormLargeCard"
import { FormsAsyncActions } from "../../Queries/_forms"
import { FormFullCard } from "../../Components/Form/FormFullCard"


const validator = CreateAsyncQueryValidator({error: "Nepovedlo se načíst formulář", success: "Načtení formuláře se povedlo"})
export const FormPage = ()  => {
    const {id} = useParams()
    const [onResolve, onReject] = validator(useDispatch())
    const [form, promise] = useFreshItem({id}, FormsAsyncActions.read)
    promise.then(onResolve, onReject)

    if (form) {
        return (
            <FormLargeCard form={form}>
                <FormFullCard form={form} />
            </FormLargeCard>
        )
    } else {
        return (
            <div>Nahrávám formulář...</div>
        )
    }
    
}