import { FinancecategoryMediumCard } from './FinancecategoryMediumCard';
import { FinancecategoryLargeCardLayout } from './FinancecategoryLargeCardLayout';
import { FinancecategoryVectorLinksCard } from './FinancecategoryVectorLinksCard';

/**/
//  Financecategory: FinanceCategory
/**/

//  Changedby: User
// import { User } from '../User/UserMediumCard';
// changedby financecategory

//  Createdby: User
// import { User } from '../User/UserMediumCard';
// createdby financecategory

//  Rbacobject: Rbacobject
// import { Rbacobject } from '../Rbacobject/RbacobjectMediumCard';
// rbacobject financecategory

//  Userid: User
// import { User } from '../User/UserMediumCard';
// userid financecategory


import { UserMediumCard as MediumCard3 } from '../User/UserMediumCard';
// <MediumCard3 user={ financecategory?.changedby }/>
import { UserMediumCard as MediumCard6 } from '../User/UserMediumCard';
// <MediumCard6 user={ financecategory?.createdby }/>
import { RbacobjectMediumCard as MediumCard7 } from '../Rbacobject/RbacobjectMediumCard';
// <MediumCard7 rbacobject={ financecategory?.rbacobject }/>
import { UserMediumCard as MediumCard8 } from '../User/UserMediumCard';
// <MediumCard8 user={ financecategory?.userid }/>

/**
 * Entity representing a finance category
 */
export const FinancecategoryLargeCard = ({ financecategory, children}) => {
    // console.log("FinancecategoryLargeCard", financecategory)
    return (
        <FinancecategoryLargeCardLayout financecategory={ financecategory } grandchildren={children}>
            <FinancecategoryMediumCard financecategory={ financecategory }/>
            <FinancecategoryVectorLinksCard  financecategory={ financecategory } />
            { 
                financecategory?.changedby?<MediumCard3 user={ financecategory?.changedby } label={"Changedby"} />:null
            }
            { 
                financecategory?.createdby?<MediumCard6 user={ financecategory?.createdby } label={"Createdby"} />:null
            }
            { 
                financecategory?.rbacobject?<MediumCard7 rbacobject={ financecategory?.rbacobject } label={"Rbacobject"} />:null
            }
            { 
                financecategory?.userid?<MediumCard8 user={ financecategory?.userid } label={"Userid"} />:null
            }
        </FinancecategoryLargeCardLayout>
    )
}

