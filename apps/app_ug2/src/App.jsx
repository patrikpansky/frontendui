import 'bootstrap/dist/css/bootstrap.min.css';
import { AppCanvas } from '@hrbolek/uoisfrontend-gql-shared';
import { ReadOnlyProvider } from '@hrbolek/uoisfrontend-shared';

import { AppRouter } from './AppRouter';


export const App = () => {
    return (
        <ReadOnlyProvider>
            <AppCanvas>
                <AppRouter />
            </AppCanvas>    
        </ReadOnlyProvider>
    )
}

