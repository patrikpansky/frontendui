
import { {{Name name}}TableDefinition as TableDefinition} from './{{Name name}}TableDefinition';
import { {{Name name}}Link as Link} from './{{Name name}}Link';

export const {{Name name}}TableRow = ({ {{name name}}, tabledefinition=TableDefinition, children }) => {
    return (
        <tr>
            {Object.entries(tabledefinition).map(
                ([name, value]) => (
                    ((name === "name")|(name === "id"))?
                    <td key={ {{name name}}.id + name }><Link {{name name}}={ {{name name}} } /></td>:
                    <td key={ {{name name}}.id + name}>{ {{name name}}[value.key] }</td>
                )
            )}
            {children}
        </tr>
    )
}

