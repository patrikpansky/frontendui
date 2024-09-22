
import { FormitemtypeTableDefinition as TableDefinition} from './FormitemtypeTableDefinition';
import { FormitemtypeLink as Link} from './FormitemtypeLink';

export const FormitemtypeTableRow = ({ formitemtype, tabledefinition=TableDefinition, children }) => {
    return (
        <tr>
            {Object.entries(tabledefinition).map(
                ([name, value]) => (
                    ((name === "name")|(name === "id"))?
                    <td key={ formitemtype.id + name }><Link formitemtype={ formitemtype } /></td>:
                    <td key={ formitemtype.id + name}>{ formitemtype[value.key] }</td>
                )
            )}
            {children}
        </tr>
    )
}

