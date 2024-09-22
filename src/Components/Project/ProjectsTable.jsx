
import { ProjectTableDefinition as TableDefinition} from './ProjectTableDefinition';

import { ProjectTableRow as TableRow} from './ProjectTableRow';
import { ProjectTableHeaderRow as TableHeaderRow} from './ProjectTableHeaderRow';
import { ProjectTableRowSpan as TableRowSpan} from './ProjectTableRowSpan';
//import { ProjectLoadMoreButton as LoadMoreButton} from './ProjectLoadMoreButton';

export const ProjectsTable = ({ projects, tabledefinition=TableDefinition, children }) => {
    return (
        <table className='table table-striped table-hover'>
            <thead>
                <TableHeaderRow tabledefinition={tabledefinition} />
            </thead>
            <tbody>
                { projects.map(
                    project => <TableRow key={ project.id } project={ project } tabledefinition={tabledefinition}/>
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

