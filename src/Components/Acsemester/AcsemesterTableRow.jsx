
import { AcsemesterTableDefinition as TableDefinition} from './AcsemesterTableDefinition';
import { AcsemesterLink as Link} from './AcsemesterLink';

export const AcsemesterTableRow = ({ acsemester, tabledefinition=TableDefinition, children }) => {
    return (
        <tr>
            {Object.entries(tabledefinition).map(
                ([name, value]) => (
                    ((name === "name")|(name === "id"))?
                    <td key={ acsemester.id + name }><Link acsemester={ acsemester } /></td>:
                    <td key={ acsemester.id + name}>{ acsemester[value.key] }</td>
                )
            )}
            {children}
        </tr>
    )
}

