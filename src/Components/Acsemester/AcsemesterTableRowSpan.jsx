
import { AcsemesterTableDefinition as TableDefinition} from './AcsemesterTableDefinition';
import { AcsemesterLink as Link} from './AcsemesterLink';

export const AcsemesterTableRowSpan = ({ acsemester, tabledefinition=TableDefinition, children }) => {
    return (
        <tr>
            <td colSpan={Object.keys(tabledefinition).length}>{children}</td>
        </tr>
    )
}

