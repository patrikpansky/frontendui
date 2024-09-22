
import { ExternalidtypeTableDefinition as TableDefinition} from './ExternalidtypeTableDefinition';
import { ExternalidtypeLink as Link} from './ExternalidtypeLink';

export const ExternalidtypeTableRow = ({ externalidtype, tabledefinition=TableDefinition, children }) => {
    return (
        <tr>
            {Object.entries(tabledefinition).map(
                ([name, value]) => (
                    ((name === "name")|(name === "id"))?
                    <td key={ externalidtype.id + name }><Link externalidtype={ externalidtype } /></td>:
                    <td key={ externalidtype.id + name}>{ externalidtype[value.key] }</td>
                )
            )}
            {children}
        </tr>
    )
}

