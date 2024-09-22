
import { SurveytypeTableDefinition as TableDefinition} from './SurveytypeTableDefinition';
import { SurveytypeLink as Link} from './SurveytypeLink';

export const SurveytypeTableRowSpan = ({ surveytype, tabledefinition=TableDefinition, children }) => {
    return (
        <tr>
            <td colSpan={Object.keys(tabledefinition).length}>{children}</td>
        </tr>
    )
}

