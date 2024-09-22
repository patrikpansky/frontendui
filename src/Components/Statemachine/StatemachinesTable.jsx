
import { StatemachineTableDefinition as TableDefinition} from './StatemachineTableDefinition';

import { StatemachineTableRow as TableRow} from './StatemachineTableRow';
import { StatemachineTableHeaderRow as TableHeaderRow} from './StatemachineTableHeaderRow';
import { StatemachineTableRowSpan as TableRowSpan} from './StatemachineTableRowSpan';
//import { StatemachineLoadMoreButton as LoadMoreButton} from './StatemachineLoadMoreButton';

export const StatemachinesTable = ({ statemachines, tabledefinition=TableDefinition, children }) => {
    return (
        <table className='table table-striped table-hover'>
            <thead>
                <TableHeaderRow tabledefinition={tabledefinition} />
            </thead>
            <tbody>
                { statemachines.map(
                    statemachine => <TableRow key={ statemachine.id } statemachine={ statemachine } tabledefinition={tabledefinition}/>
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

