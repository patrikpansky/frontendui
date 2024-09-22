import { infoMediumCard } from './infoMediumCard';
import { infoLargeCardLayout } from './infoLargeCardLayout';
import { infoVectorLinksCard } from './infoVectorLinksCard';

/**/
//  info: PageInfo
/**/



/**
 * 
 */
export const infoLargeCard = ({ pageinfo, children}) => {
    // console.log("infoLargeCard", pageinfo)
    return (
        <infoLargeCardLayout pageinfo={ pageinfo } grandchildren={children}>
            <infoMediumCard pageinfo={ pageinfo }/>
            <infoVectorLinksCard  pageinfo={ pageinfo } />
        </infoLargeCardLayout>
    )
}

