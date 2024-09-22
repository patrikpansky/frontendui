
import { SurveyTableDefinition as TableDefinition} from './SurveyTableDefinition';
import { SurveyLink as Link} from './SurveyLink';

export const SurveyTableRowSpan = ({ survey, tabledefinition=TableDefinition, children }) => {
    return (
        <tr>
            <td colSpan={Object.keys(tabledefinition).length}>{children}</td>
        </tr>
    )
}

