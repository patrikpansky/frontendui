
import { AclessontypeTableDefinition as TableDefinition} from './AclessontypeTableDefinition';
import { AclessontypeLink as Link} from './AclessontypeLink';

export const AclessontypeTableRow = ({ aclessontype, tabledefinition=TableDefinition, children }) => {
    return (
        <tr>
            {Object.entries(tabledefinition).map(
                ([name, value]) => (
                    ((name === "name")|(name === "id"))?
                    <td key={ aclessontype.id + name }><Link aclessontype={ aclessontype } /></td>:
                    <td key={ aclessontype.id + name}>{ aclessontype[value.key] }</td>
                )
            )}
            {children}
        </tr>
    )
}

