import { SimpleCardCapsule } from "./SimpleCardCapsule"

export const Input = ({label, ...props}) => {
    return (
        <SimpleCardCapsule title={label}>
            <input {...props} />
        </SimpleCardCapsule>
    )
}