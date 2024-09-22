
import { ExternalidcategoryTableDefinition as TableDefinition} from './ExternalidcategoryTableDefinition';
import { ExternalidcategoryLink as Link} from './ExternalidcategoryLink';

export const ExternalidcategoryTableRow = ({ externalidcategory, tabledefinition=TableDefinition, children }) => {
    return (
        <tr>
            {Object.entries(tabledefinition).map(
                ([name, value]) => (
                    ((name === "name")|(name === "id"))?
                    <td key={ externalidcategory.id + name }><Link externalidcategory={ externalidcategory } /></td>:
                    <td key={ externalidcategory.id + name}>{ externalidcategory[value.key] }</td>
                )
            )}
            {children}
        </tr>
    )
}

