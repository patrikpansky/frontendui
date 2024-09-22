
import { PublicationtypeTableDefinition as TableDefinition} from './PublicationtypeTableDefinition';
import { PublicationtypeLink as Link} from './PublicationtypeLink';

export const PublicationtypeTableRow = ({ publicationtype, tabledefinition=TableDefinition, children }) => {
    return (
        <tr>
            {Object.entries(tabledefinition).map(
                ([name, value]) => (
                    ((name === "name")|(name === "id"))?
                    <td key={ publicationtype.id + name }><Link publicationtype={ publicationtype } /></td>:
                    <td key={ publicationtype.id + name}>{ publicationtype[value.key] }</td>
                )
            )}
            {children}
        </tr>
    )
}

