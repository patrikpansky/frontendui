import { ProxyLink } from "@hrbolek/uoisfrontend-shared/src";

import { StateCardCapsule } from './StateCardCapsule';
import { StateCardBody } from './StateCardBody';

export const StateVectorLinksCard = ({ state, children, label="" }) => {
    return (
        <StateCardCapsule state={ state } label={label} >
            <ProxyLink to={"/all/state/requests/" + state.id } >requests</ProxyLink><br />
            <ProxyLink to={"/all/state/sources/" + state.id } >sources</ProxyLink><br />
            <ProxyLink to={"/all/state/targets/" + state.id } >targets</ProxyLink><br />
            <ProxyLink to={"/all/state/roletypes/" + state.id } >roletypes</ProxyLink><br />
        </StateCardCapsule>        
    )
}

