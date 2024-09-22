import { useParams } from "react-router-dom"

import { StateLazy as Lazy } from "../../Components/State/StateLazy";
import { StateLargeCard as LargeCard } from "../../Components/State/StateLargeCard";
import { StateCardCapsule as CardCapsule } from "../../Components/State/StateCardCapsule";

import { 
    StatePageQueryAction as QueryAction,
    StatePageQueryActionValidator as QueryActionValidator
} from "./StatePageQueryAction";

import { RequestsTable as RequestsTable1 } from '../../Components/Request/RequestsTable';
import { StatetransitionsTable as SourcesTable11 } from '../../Components/Statetransition/StatetransitionsTable';
import { StatetransitionsTable as TargetsTable12 } from '../../Components/Statetransition/StatetransitionsTable';
import { RoletypesTable as RoletypesTable13 } from '../../Components/Roletype/RoletypesTable';

export const StatePageContentBase = ({ state, children}) => {
    return (
        <LargeCard state={ state }>
            {/* other data */}
            {children}
        </LargeCard>        
    );    
}

export const StatePageContent = ({ state }) => {

        return (
            <StatePageContentBase state={ state }>
                {/* other data */}
                { state?.requests?
                    <CardCapsule state={ state } label={ "requests" }>
                        <RequestsTable1 requests={ state?.requests || []}/>
                    </CardCapsule>:null
                }
                { state?.sources?
                    <CardCapsule state={ state } label={ "sources" }>
                        <SourcesTable11 statetransitions={ state?.sources || []}/>
                    </CardCapsule>:null
                }
                { state?.targets?
                    <CardCapsule state={ state } label={ "targets" }>
                        <TargetsTable12 statetransitions={ state?.targets || []}/>
                    </CardCapsule>:null
                }
                { state?.roletypes?
                    <CardCapsule state={ state } label={ "roletypes" }>
                        <RoletypesTable13 roletypes={ state?.roletypes || []}/>
                    </CardCapsule>:null
                }
            </StatePageContentBase>        
        );    
}

const StateLazyPageContent = Lazy(StatePageContent)(QueryAction, QueryActionValidator)

export const StatePage = () => {
    const params = useParams()
    return (<StateLazyPageContent {...params} />)

}
