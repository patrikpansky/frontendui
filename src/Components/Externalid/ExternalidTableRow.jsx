
import { ExternalidTableDefinition as TableDefinition} from './ExternalidTableDefinition';
import { ExternalidLink as Link} from './ExternalidLink';

export const ExternalidTableRow = ({ externalid, tabledefinition=TableDefinition, children }) => {
    return (
        <tr>
            {Object.entries(tabledefinition).map(
                ([name, value]) => (
                    ((name === "name")|(name === "id"))?
                    <td key={ externalid.id + name }><Link externalid={ externalid } /></td>:
                    <td key={ externalid.id + name}>{ externalid[value.key] }</td>
                )
            )}
            {children}
        </tr>
    )
}

