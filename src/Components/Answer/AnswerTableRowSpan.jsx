
import { AnswerTableDefinition as TableDefinition} from './AnswerTableDefinition';
import { AnswerLink as Link} from './AnswerLink';

export const AnswerTableRowSpan = ({ answer, tabledefinition=TableDefinition, children }) => {
    return (
        <tr>
            <td colSpan={Object.keys(tabledefinition).length}>{children}</td>
        </tr>
    )
}

