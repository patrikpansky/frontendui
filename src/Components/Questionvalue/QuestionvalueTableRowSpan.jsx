
import { QuestionvalueTableDefinition as TableDefinition} from './QuestionvalueTableDefinition';
import { QuestionvalueLink as Link} from './QuestionvalueLink';

export const QuestionvalueTableRowSpan = ({ questionvalue, tabledefinition=TableDefinition, children }) => {
    return (
        <tr>
            <td colSpan={Object.keys(tabledefinition).length}>{children}</td>
        </tr>
    )
}

