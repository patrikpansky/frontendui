
import { QuestionTableDefinition as TableDefinition} from './QuestionTableDefinition';
import { QuestionLink as Link} from './QuestionLink';

export const QuestionTableRowSpan = ({ question, tabledefinition=TableDefinition, children }) => {
    return (
        <tr>
            <td colSpan={Object.keys(tabledefinition).length}>{children}</td>
        </tr>
    )
}

