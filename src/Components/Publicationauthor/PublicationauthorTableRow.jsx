
import { PublicationauthorTableDefinition as TableDefinition} from './PublicationauthorTableDefinition';
import { PublicationauthorLink as Link} from './PublicationauthorLink';

export const PublicationauthorTableRow = ({ publicationauthor, tabledefinition=TableDefinition, children }) => {
    return (
        <tr>
            {Object.entries(tabledefinition).map(
                ([name, value]) => (
                    ((name === "name")|(name === "id"))?
                    <td key={ publicationauthor.id + name }><Link publicationauthor={ publicationauthor } /></td>:
                    <td key={ publicationauthor.id + name}>{ publicationauthor[value.key] }</td>
                )
            )}
            {children}
        </tr>
    )
}

