// field {{ name name }}
// targeting to {{ targetType.name }}
// going from {{ Name masterType.name }}
import { {{ Name targetType.name }}sTable } from "../{{ Name targetType.name }}/{{ Name targetType.name }}sTable";
import { {{ Name targetType.name }}LoadMoreButton } from "../{{ Name targetType.name }}/{{ Name targetType.name }}LoadMoreButton";

export const {{ Name masterType.name }}{{ Name name }}TableCard = ({ {{ name masterType.name }}, skip=0, limit=10, where, orderby, ...props}) => {
    return (
        <{{ Name targetType.name }}sTable {{ name targetType.name }}={ {{ name masterType.name }}?.{{ name name }} } {...props}>
            <{{ Name targetType.name }}LoadMoreButton skip={skip} limit={limit} where={where} orderby={orderby} />
        </{{ Name targetType.name }}sTable>
    )
}