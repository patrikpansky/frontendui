
import { QuestionvalueTableDefinition as TableDefinition} from './QuestionvalueTableDefinition';
import { QuestionvalueLink as Link} from './QuestionvalueLink';

export const QuestionvalueTableRow = ({ questionvalue, tabledefinition=TableDefinition, children }) => {
    return (
        <tr>
            {Object.entries(tabledefinition).map(
                ([name, value]) => (
                    ((name === "name")|(name === "id"))?
                    <td key={ questionvalue.id + name }><Link questionvalue={ questionvalue } /></td>:
                    <td key={ questionvalue.id + name}>{ questionvalue[value.key] }</td>
                )
            )}
            {children}
        </tr>
    )
}

