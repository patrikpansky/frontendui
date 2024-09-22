import { ProxyLink } from "@hrbolek/uoisfrontend-shared/src";

import { StatemachineCardCapsule } from './StatemachineCardCapsule';
import { StatemachineCardBody } from './StatemachineCardBody';

export const StatemachineVectorLinksCard = ({ statemachine, children, label="" }) => {
    return (
        <StatemachineCardCapsule statemachine={ statemachine } label={label} >
            <ProxyLink to={"/all/statemachine/states/" + statemachine.id } >states</ProxyLink><br />
            <ProxyLink to={"/all/statemachine/transitions/" + statemachine.id } >transitions</ProxyLink><br />
        </StatemachineCardCapsule>        
    )
}

