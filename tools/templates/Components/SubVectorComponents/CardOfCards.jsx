// field {{ name name }}
// targeting to {{ targetType.name }}
// going from {{ Name masterType.name }}
import { {{ Name masterType.name }}CardCapsule } from "./{{ Name masterType.name }}CardCapsule";
import { {{ Name targetType.name }}sCards } from "../{{ Name targetType.name }}/{{ Name targetType.name }}sCards";
import { {{ Name masterType.name }}{{ Name name }}LoadMoreButton as LoadMoreButton} from "../{{ Name masterType.name }}/{{ Name name }}LoadMoreButton";

export const {{ Name masterType.name }}{{ Name name }}CardOfCards = ({ {{ name masterType.name }}, skip=0, limit=10, where, orderby, ...props}) => {
    return (
        <{{ Name masterType.name }}CardCapsule {{ name masterType.name }}={ {{ name masterType.name }} } label={"{{ Name name }}"}>
            <{{ Name targetType.name }}sCards {{ name targetType.name }}s={ {{ name masterType.name }}?.{{ name name }} } {...props} >
                <LoadMoreButton {{ name masterType.name }}={ {{ name masterType.name }} } skip={skip} limit={limit} orderby={orderby} where={where} />
            </{{ Name targetType.name }}sCards>
        </{{ Name masterType.name }}CardCapsule>
    )
}