
import { FacilitytypeTableDefinition as TableDefinition} from './FacilitytypeTableDefinition';
import { FacilitytypeLink as Link} from './FacilitytypeLink';

export const FacilitytypeTableRow = ({ facilitytype, tabledefinition=TableDefinition, children }) => {
    return (
        <tr>
            {Object.entries(tabledefinition).map(
                ([name, value]) => (
                    ((name === "name")|(name === "id"))?
                    <td key={ facilitytype.id + name }><Link facilitytype={ facilitytype } /></td>:
                    <td key={ facilitytype.id + name}>{ facilitytype[value.key] }</td>
                )
            )}
            {children}
        </tr>
    )
}

