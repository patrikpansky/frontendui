
import { ProjecttypeTableDefinition as TableDefinition} from './ProjecttypeTableDefinition';

import { ProjecttypeTableRow as TableRow} from './ProjecttypeTableRow';
import { ProjecttypeTableHeaderRow as TableHeaderRow} from './ProjecttypeTableHeaderRow';
import { ProjecttypeTableRowSpan as TableRowSpan} from './ProjecttypeTableRowSpan';
//import { ProjecttypeLoadMoreButton as LoadMoreButton} from './ProjecttypeLoadMoreButton';

export const ProjecttypesTable = ({ projecttypes, tabledefinition=TableDefinition, children }) => {
    return (
        <table className='table table-striped table-hover'>
            <thead>
                <TableHeaderRow tabledefinition={tabledefinition} />
            </thead>
            <tbody>
                { projecttypes.map(
                    projecttype => <TableRow key={ projecttype.id } projecttype={ projecttype } tabledefinition={tabledefinition}/>
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

