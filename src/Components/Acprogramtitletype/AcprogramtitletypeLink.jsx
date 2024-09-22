import { ProxyLink } from "@hrbolek/uoisfrontend-shared/src";

let linkBase = "/all/acprogramtitletype/view/";
export const setLinkBase = (value) => linkBase = value;
export const AcprogramtitletypeLink = ({ acprogramtitletype, children}) => {
    // console.log("AcprogramtitletypeLargeCard", acprogramtitletype)
    return (
        <ProxyLink to={linkBase + acprogramtitletype?.id}>{ acprogramtitletype?.fullname || acprogramtitletype?.name || acprogramtitletype?.id}</ProxyLink>
    )
}

