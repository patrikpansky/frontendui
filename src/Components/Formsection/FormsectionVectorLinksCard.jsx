import { ProxyLink } from "@hrbolek/uoisfrontend-shared/src";

import { FormsectionCardCapsule } from './FormsectionCardCapsule';
import { FormsectionCardBody } from './FormsectionCardBody';

export const FormsectionVectorLinksCard = ({ formsection, children, label="" }) => {
    return (
        <FormsectionCardCapsule formsection={ formsection } label={label} >
            <ProxyLink to={"/all/formsection/parts/" + formsection.id } >parts</ProxyLink><br />
        </FormsectionCardCapsule>        
    )
}

