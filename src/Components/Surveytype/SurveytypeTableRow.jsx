
import { SurveytypeTableDefinition as TableDefinition} from './SurveytypeTableDefinition';
import { SurveytypeLink as Link} from './SurveytypeLink';

export const SurveytypeTableRow = ({ surveytype, tabledefinition=TableDefinition, children }) => {
    return (
        <tr>
            {Object.entries(tabledefinition).map(
                ([name, value]) => (
                    ((name === "name")|(name === "id"))?
                    <td key={ surveytype.id + name }><Link surveytype={ surveytype } /></td>:
                    <td key={ surveytype.id + name}>{ surveytype[value.key] }</td>
                )
            )}
            {children}
        </tr>
    )
}

