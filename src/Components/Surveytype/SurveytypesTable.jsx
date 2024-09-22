
import { SurveytypeTableDefinition as TableDefinition} from './SurveytypeTableDefinition';

import { SurveytypeTableRow as TableRow} from './SurveytypeTableRow';
import { SurveytypeTableHeaderRow as TableHeaderRow} from './SurveytypeTableHeaderRow';
import { SurveytypeTableRowSpan as TableRowSpan} from './SurveytypeTableRowSpan';
//import { SurveytypeLoadMoreButton as LoadMoreButton} from './SurveytypeLoadMoreButton';

export const SurveytypesTable = ({ surveytypes, tabledefinition=TableDefinition, children }) => {
    return (
        <table className='table table-striped table-hover'>
            <thead>
                <TableHeaderRow tabledefinition={tabledefinition} />
            </thead>
            <tbody>
                { surveytypes.map(
                    surveytype => <TableRow key={ surveytype.id } surveytype={ surveytype } tabledefinition={tabledefinition}/>
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

