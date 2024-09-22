// field {{ name name }}
// targeting to {{ targetType.name }}
// going from {{ Name masterType.name }}
import { {{ Name targetType.name }}MediumCard } from "../{{ Name targetType.name }}/{{ Name targetType.name }}MediumCard";

export const {{ Name masterType.name }}{{ Name name }}MediumCard = ({ {{ name masterType.name }} , ...props}) => {
    return (
        <{{ Name targetType.name }}MediumCard {{ name targetType.name }}={ {{ name masterType.name }}?.{{ name name }} } {...props} />
    )
}