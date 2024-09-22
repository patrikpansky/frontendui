// field {{ name name }}
// targeting to {{ targetType.name }}
// going from {{ Name masterType.name }}
import { {{ Name masterType.name }}CardCapsule } from "./{{ Name masterType.name }}CardCapsule";
import { {{ Name targetType.name }}sTable } from "../{{ Name targetType.name }}/{{ Name targetType.name }}sTable";
export const {{ Name masterType.name }}{{ Name name }}TableCard = ({ {{ name masterType.name }} , ...props}) => {
    return (
        <{{ Name masterType.name }}CardCapsule {{ name masterType.name }}={ {{ name masterType.name }} } >
            <{{ Name targetType.name }}sTable {{ name targetType.name }}s={ {{ name masterType.name }}?.{{ name name }} } {...props}>
            </{{ Name targetType.name }}sTable>
        </{{ Name masterType.name }}CardCapsule>
    )
}