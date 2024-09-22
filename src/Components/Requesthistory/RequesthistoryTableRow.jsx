
import { RequesthistoryTableDefinition as TableDefinition} from './RequesthistoryTableDefinition';
import { RequesthistoryLink as Link} from './RequesthistoryLink';

export const RequesthistoryTableRow = ({ requesthistory, tabledefinition=TableDefinition, children }) => {
    return (
        <tr>
            {Object.entries(tabledefinition).map(
                ([name, value]) => (
                    ((name === "name")|(name === "id"))?
                    <td key={ requesthistory.id + name }><Link requesthistory={ requesthistory } /></td>:
                    <td key={ requesthistory.id + name}>{ requesthistory[value.key] }</td>
                )
            )}
            {children}
        </tr>
    )
}

