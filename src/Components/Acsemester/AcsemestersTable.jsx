
import { AcsemesterTableDefinition as TableDefinition} from './AcsemesterTableDefinition';

import { AcsemesterTableRow as TableRow} from './AcsemesterTableRow';
import { AcsemesterTableHeaderRow as TableHeaderRow} from './AcsemesterTableHeaderRow';
import { AcsemesterTableRowSpan as TableRowSpan} from './AcsemesterTableRowSpan';
//import { AcsemesterLoadMoreButton as LoadMoreButton} from './AcsemesterLoadMoreButton';

export const AcsemestersTable = ({ acsemesters, tabledefinition=TableDefinition, children }) => {
    return (
        <table className='table table-striped table-hover'>
            <thead>
                <TableHeaderRow tabledefinition={tabledefinition} />
            </thead>
            <tbody>
                { acsemesters.map(
                    acsemester => <TableRow key={ acsemester.id } acsemester={ acsemester } tabledefinition={tabledefinition}/>
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

