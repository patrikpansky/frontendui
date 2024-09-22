
import { FormtypeTableDefinition as TableDefinition} from './FormtypeTableDefinition';
import { FormtypeLink as Link} from './FormtypeLink';

export const FormtypeTableRow = ({ formtype, tabledefinition=TableDefinition, children }) => {
    return (
        <tr>
            {Object.entries(tabledefinition).map(
                ([name, value]) => (
                    ((name === "name")|(name === "id"))?
                    <td key={ formtype.id + name }><Link formtype={ formtype } /></td>:
                    <td key={ formtype.id + name}>{ formtype[value.key] }</td>
                )
            )}
            {children}
        </tr>
    )
}

