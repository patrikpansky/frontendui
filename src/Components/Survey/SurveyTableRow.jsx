
import { SurveyTableDefinition as TableDefinition} from './SurveyTableDefinition';
import { SurveyLink as Link} from './SurveyLink';

export const SurveyTableRow = ({ survey, tabledefinition=TableDefinition, children }) => {
    return (
        <tr>
            {Object.entries(tabledefinition).map(
                ([name, value]) => (
                    ((name === "name")|(name === "id"))?
                    <td key={ survey.id + name }><Link survey={ survey } /></td>:
                    <td key={ survey.id + name}>{ survey[value.key] }</td>
                )
            )}
            {children}
        </tr>
    )
}

