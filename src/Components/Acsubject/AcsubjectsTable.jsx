
import { AcsubjectTableDefinition as TableDefinition} from './AcsubjectTableDefinition';

import { AcsubjectTableRow as TableRow} from './AcsubjectTableRow';
import { AcsubjectTableHeaderRow as TableHeaderRow} from './AcsubjectTableHeaderRow';
import { AcsubjectTableRowSpan as TableRowSpan} from './AcsubjectTableRowSpan';
//import { AcsubjectLoadMoreButton as LoadMoreButton} from './AcsubjectLoadMoreButton';

export const AcsubjectsTable = ({ acsubjects, tabledefinition=TableDefinition, children }) => {
    return (
        <table className='table table-striped table-hover'>
            <thead>
                <TableHeaderRow tabledefinition={tabledefinition} />
            </thead>
            <tbody>
                { acsubjects.map(
                    acsubject => <TableRow key={ acsubject.id } acsubject={ acsubject } tabledefinition={tabledefinition}/>
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

