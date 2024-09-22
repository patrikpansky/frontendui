
import { QuestionvalueTableDefinition as TableDefinition} from './QuestionvalueTableDefinition';

import { QuestionvalueTableRow as TableRow} from './QuestionvalueTableRow';
import { QuestionvalueTableHeaderRow as TableHeaderRow} from './QuestionvalueTableHeaderRow';
import { QuestionvalueTableRowSpan as TableRowSpan} from './QuestionvalueTableRowSpan';
//import { QuestionvalueLoadMoreButton as LoadMoreButton} from './QuestionvalueLoadMoreButton';

export const QuestionvaluesTable = ({ questionvalues, tabledefinition=TableDefinition, children }) => {
    return (
        <table className='table table-striped table-hover'>
            <thead>
                <TableHeaderRow tabledefinition={tabledefinition} />
            </thead>
            <tbody>
                { questionvalues.map(
                    questionvalue => <TableRow key={ questionvalue.id } questionvalue={ questionvalue } tabledefinition={tabledefinition}/>
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

