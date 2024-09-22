
import { {{Name name}}TableDefinition as TableDefinition} from './{{Name name}}TableDefinition';

import { {{Name name}}TableRow as TableRow} from './{{Name name}}TableRow';
import { {{Name name}}TableHeaderRow as TableHeaderRow} from './{{Name name}}TableHeaderRow';
import { {{Name name}}TableRowSpan as TableRowSpan} from './{{Name name}}TableRowSpan';
//import { {{Name name}}LoadMoreButton as LoadMoreButton} from './{{Name name}}LoadMoreButton';

export const {{Name name}}sTable = ({ {{name name}}s, tabledefinition=TableDefinition, children }) => {
    return (
        <table className='table table-striped table-hover'>
            <thead>
                <TableHeaderRow tabledefinition={tabledefinition} />
            </thead>
            <tbody>
                { {{name name}}s.map(
                    {{name name}} => <TableRow key={ {{name name}}.id } {{name name}}={ {{name name}} } tabledefinition={tabledefinition}/>
                )}
            </tbody>
            <tfoot>
                <TableRowSpan>
                    {children}
                </TableRowSpan>
            </tfoot>
        </table>
    )
}

