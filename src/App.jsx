import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import { AppProvider } from './Store/AppProvider'

import { AppBody } from './AppBody';
import { Msgs } from './Store';

export const AppCanvas = ({children}) => {
    return (
        <div className='container-fluid'>
            <AppProvider>
                {children}
                <Msgs />
            </AppProvider>
        </div>    
    )
}

export const App = () => {
    return (
        <AppCanvas>            
            <AppBody />
        </AppCanvas>    
    )
}

