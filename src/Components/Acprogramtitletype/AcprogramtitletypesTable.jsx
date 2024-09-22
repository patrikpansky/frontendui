
import { AcprogramtitletypeTableDefinition as TableDefinition} from './AcprogramtitletypeTableDefinition';

import { AcprogramtitletypeTableRow as TableRow} from './AcprogramtitletypeTableRow';
import { AcprogramtitletypeTableHeaderRow as TableHeaderRow} from './AcprogramtitletypeTableHeaderRow';
import { AcprogramtitletypeTableRowSpan as TableRowSpan} from './AcprogramtitletypeTableRowSpan';
//import { AcprogramtitletypeLoadMoreButton as LoadMoreButton} from './AcprogramtitletypeLoadMoreButton';

export const AcprogramtitletypesTable = ({ acprogramtitletypes, tabledefinition=TableDefinition, children }) => {
    return (
        <table className='table table-striped table-hover'>
            <thead>
                <TableHeaderRow tabledefinition={tabledefinition} />
            </thead>
            <tbody>
                { acprogramtitletypes.map(
                    acprogramtitletype => <TableRow key={ acprogramtitletype.id } acprogramtitletype={ acprogramtitletype } tabledefinition={tabledefinition}/>
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

