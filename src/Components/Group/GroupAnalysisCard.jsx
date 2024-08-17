import { CardCapsule } from '@hrbolek/uoisfrontend-shared/src';
import { GroupLink } from './GroupLink';
import { useEffect, useState } from 'react';
import { ProxyLink } from '../ProxyLink';
import { FileExcel, PieChart } from 'react-bootstrap-icons';
import { Table } from 'react-bootstrap-icons';

/**
 * Zapouzdrujici funkce pro fetch, vytvari mezi vrstvu pro komunikace ze serverem
 * @param {*} path 
 * @param {*} params 
 * @returns Promise
 */
export const fetchAnalysis = (path, params={}) => {
    // console.log("fetch from shared")

    const newParams = {
        method: 'GET',
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        redirect: 'follow', // manual, *follow, error
       ...params} // allow owerwrite default parameters (globalFetchParams)

    return fetch(path, newParams).then(response => {
        if (response.status === 302) {
            if (window) {
                const host = window.location.host
                const protocol = window.location.protocol
                const location = response.headers.location
                const redirectLocation = `${protocol}://${host}${location}`
                window.location.assign(redirectLocation)
            }
        }
        return response.text()
    }) 
}

const useAnalysis = (url) => {
    const [t, setT] = useState("");
    const [done, setDone] = useState(false)
    useEffect(() => {
        // const q = `/analysis/group/chart/?where={mastergroup_id:{_eq:"${group.id}"}}`;
        const asyncfetch = async () => {
            const textresponse = await fetchAnalysis(url);

            // width="90vmin"
            // height="100vmin"
            // const updatedresponse = textresponse.replace('width="2880pt"', 'width="90vmin"').replace('height="1440pt"', 'height="100vmin"')
            const updatedresponse = textresponse.replace('width="2880pt"', '').replace('height="1440pt"', '');
            setT(updatedresponse);
            setDone(true)
        };
        asyncfetch();
    }, [url]);

    return [t, done]
}

export const AnalysisResultCard = ({ url, title }) => {
    const [svg, done] = useAnalysis(url)
    let body = "Nahrávám"
    if (done) {
        if (svg) {
            body = <div dangerouslySetInnerHTML={{ __html: svg }} />
        } else {
            body = "Nastala chyba"
        }
    }

    return (
        <CardCapsule title={title}>
            {body}
        </CardCapsule>
    )    
}

export const GroupAnalysisSubGroupsCard = ({ group }) => {
    // const q = `/analysis/group/chart/?where={grouptype:%20{id:%20{_eq:%20%22cd49e155-610c-11ed-844e-001a7dda7110%22}}}`
    const label = "Skupiny podřízené"
    const title = <>{label} <GroupLink group={group} /></>
    const [mode, setMode] = useState("chart")

    // const q = `/analysis/group/chart/?where={mastergroup_id:{_eq:"${group.id}"}}`;
    // const q = `/analysis/group/chart/?where={mastergroup_id:{_eq:"${group.id}"}}`;

    // const q = `/analysis/group/chart/?where:{_and:[{mastergroup_id:{_eq:"${group.id}"}},{grouptype:{id:{_in:["cd49e155-610c-11ed-844e-001a7dda7110","cd49e153-610c-11ed-bf19-001a7dda7110"]}}}]}`;
    const q = `/analysis/group/chart/?where={_and:[{mastergroup_id:{_eq:"${group.id}"}},{grouptype:{id:{_in:["cd49e155-610c-11ed-844e-001a7dda7110","cd49e153-610c-11ed-bf19-001a7dda7110"]}}}]}`;
    const url = q.replace("chart", mode)
    return (
        <>
            <button className='btn btn-outline-primary' onClick={()=>setMode("chart")}>Chart</button>
            <button className='btn btn-outline-primary' onClick={()=>setMode("table")}>Tabulka</button>
            <button className='btn btn-outline-primary' onClick={()=>setMode("table")}>Tabulka</button>
            <AnalysisResultCard url={url} title={title} />
        </>
    )
};

export const GroupAnalysisStudyGroupsCard = ({ group }) => {
    // const q = `/analysis/group/chart/?where={grouptype:%20{id:%20{_eq:%20%22cd49e155-610c-11ed-844e-001a7dda7110%22}}}`
    const label = "Skupiny podřízené"
    const title = <>{label} <GroupLink group={group} /></>

    // const q = `/analysis/group/chart/?where={mastergroup_id:{_eq:"${group.id}"}}`;
    // const q = `/analysis/group/chart/?where={mastergroup_id:{_eq:"${group.id}"}}`;

    // const q = `/analysis/group/chart/?where:{_and:[{mastergroup_id:{_eq:"${group.id}"}},{grouptype:{id:{_in:["cd49e155-610c-11ed-844e-001a7dda7110","cd49e153-610c-11ed-bf19-001a7dda7110"]}}}]}`;
    const q = `/analysis/group/chart/?where={_and:[{mastergroup_id:{_eq:"${group.id}"}},{grouptype:{id:{_in:["cd49e157-610c-11ed-9312-001a7dda7110"]}}}]}`;
    return <AnalysisResultCard url={q} title={title} />
};

//where: {_and: [{mastergroup_id: {_eq: $id}}, {grouptype: {id: {_in: $type_ids}}}]}

export const GroupAnalysisSubGroupsCard_ = ({ group }) => {
    // const q = `/analysis/group/chart/?where={grouptype:%20{id:%20{_eq:%20%22cd49e155-610c-11ed-844e-001a7dda7110%22}}}`
    const label = "Skupiny podřízené"
    const title = <>{label} <GroupLink group={group} /></>

    // const q = `/analysis/group/chart/?where={mastergroup_id:{_eq:"${group.id}"}}`;
    const q = `/analysis/group/chart/?where={mastergroup_id:{_eq:"${group.id}"}}`;
    return <AnalysisResultCard url={q} title={title} />
};

export const GroupAnalysisLinksCard = ({group}) => {
    const label = "Analýzy"
    const title = <>{label} <GroupLink group={group} /></>
    return (
        <CardCapsule title={title}>
            <div>
                <span>
                Počet členů kateder - graf
                {"\u00A0"}<ProxyLink to={"/ug/groupanalysis/subgroups/" + group.id}><PieChart/></ProxyLink>
                {"\u00A0"}<ProxyLink to={"/ug/groupanalysis/subgroups/" + group.id}><Table/></ProxyLink>
                {"\u00A0"}<ProxyLink to={"/ug/groupanalysis/subgroups/" + group.id}><FileExcel/></ProxyLink>
                
                </span>
            </div>
        </CardCapsule>
    )
}