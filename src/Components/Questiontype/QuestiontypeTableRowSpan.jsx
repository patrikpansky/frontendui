
import { QuestiontypeTableDefinition as TableDefinition} from './QuestiontypeTableDefinition';
import { QuestiontypeLink as Link} from './QuestiontypeLink';

export const QuestiontypeTableRowSpan = ({ questiontype, tabledefinition=TableDefinition, children }) => {
    return (
        <tr>
            <td colSpan={Object.keys(tabledefinition).length}>{children}</td>
        </tr>
    )
}

