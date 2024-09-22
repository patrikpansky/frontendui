import { ProxyLink } from "@hrbolek/uoisfrontend-shared/src";

import { RequestCardCapsule } from './RequestCardCapsule';
import { RequestCardBody } from './RequestCardBody';

export const RequestVectorLinksCard = ({ request, children, label="" }) => {
    return (
        <RequestCardCapsule request={ request } label={label} >
            <ProxyLink to={"/auto/request/histories/" + request.id } >histories</ProxyLink><br />
        </RequestCardCapsule>        
    )
}

