import { ProxyLink } from "@hrbolek/uoisfrontend-shared/src";

import { ActopicCardCapsule } from './ActopicCardCapsule';
import { ActopicCardBody } from './ActopicCardBody';

export const ActopicVectorLinksCard = ({ actopic, children, label="" }) => {
    return (
        <ActopicCardCapsule actopic={ actopic } label={label} >
            <ProxyLink to={"/all/actopic/lessons/" + actopic.id } >lessons</ProxyLink><br />
        </ActopicCardCapsule>        
    )
}

