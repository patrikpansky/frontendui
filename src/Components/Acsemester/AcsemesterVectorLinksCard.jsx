import { ProxyLink } from "@hrbolek/uoisfrontend-shared/src";

import { AcsemesterCardCapsule } from './AcsemesterCardCapsule';
import { AcsemesterCardBody } from './AcsemesterCardBody';

export const AcsemesterVectorLinksCard = ({ acsemester, children, label="" }) => {
    return (
        <AcsemesterCardCapsule acsemester={ acsemester } label={label} >
            <ProxyLink to={"/all/acsemester/classifications/" + acsemester.id } >classifications</ProxyLink><br />
            <ProxyLink to={"/all/acsemester/topics/" + acsemester.id } >topics</ProxyLink><br />
            <ProxyLink to={"/all/acsemester/plans/" + acsemester.id } >plans</ProxyLink><br />
        </AcsemesterCardCapsule>        
    )
}

