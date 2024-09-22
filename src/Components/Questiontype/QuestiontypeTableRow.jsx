
import { QuestiontypeTableDefinition as TableDefinition} from './QuestiontypeTableDefinition';
import { QuestiontypeLink as Link} from './QuestiontypeLink';

export const QuestiontypeTableRow = ({ questiontype, tabledefinition=TableDefinition, children }) => {
    return (
        <tr>
            {Object.entries(tabledefinition).map(
                ([name, value]) => (
                    ((name === "name")|(name === "id"))?
                    <td key={ questiontype.id + name }><Link questiontype={ questiontype } /></td>:
                    <td key={ questiontype.id + name}>{ questiontype[value.key] }</td>
                )
            )}
            {children}
        </tr>
    )
}

