
import { PublicationTableDefinition as TableDefinition} from './PublicationTableDefinition';
import { PublicationLink as Link} from './PublicationLink';

export const PublicationTableRow = ({ publication, tabledefinition=TableDefinition, children }) => {
    return (
        <tr>
            {Object.entries(tabledefinition).map(
                ([name, value]) => (
                    ((name === "name")|(name === "id"))?
                    <td key={ publication.id + name }><Link publication={ publication } /></td>:
                    <td key={ publication.id + name}>{ publication[value.key] }</td>
                )
            )}
            {children}
        </tr>
    )
}

