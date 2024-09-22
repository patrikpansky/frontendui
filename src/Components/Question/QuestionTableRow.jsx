
import { QuestionTableDefinition as TableDefinition} from './QuestionTableDefinition';
import { QuestionLink as Link} from './QuestionLink';

export const QuestionTableRow = ({ question, tabledefinition=TableDefinition, children }) => {
    return (
        <tr>
            {Object.entries(tabledefinition).map(
                ([name, value]) => (
                    ((name === "name")|(name === "id"))?
                    <td key={ question.id + name }><Link question={ question } /></td>:
                    <td key={ question.id + name}>{ question[value.key] }</td>
                )
            )}
            {children}
        </tr>
    )
}

