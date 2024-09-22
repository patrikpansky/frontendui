
import { AnswerTableDefinition as TableDefinition} from './AnswerTableDefinition';
import { AnswerLink as Link} from './AnswerLink';

export const AnswerTableRow = ({ answer, tabledefinition=TableDefinition, children }) => {
    return (
        <tr>
            {Object.entries(tabledefinition).map(
                ([name, value]) => (
                    ((name === "name")|(name === "id"))?
                    <td key={ answer.id + name }><Link answer={ answer } /></td>:
                    <td key={ answer.id + name}>{ answer[value.key] }</td>
                )
            )}
            {children}
        </tr>
    )
}

