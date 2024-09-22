import { FinancetypeMediumCard } from './FinancetypeMediumCard';
import { FinancetypeLargeCardLayout } from './FinancetypeLargeCardLayout';
import { FinancetypeVectorLinksCard } from './FinancetypeVectorLinksCard';

/**/
//  Financetype: FinanceType
/**/

//  Changedby: User
// import { User } from '../User/UserMediumCard';
// changedby financetype

//  Createdby: User
// import { User } from '../User/UserMediumCard';
// createdby financetype

//  Rbacobject: Rbacobject
// import { Rbacobject } from '../Rbacobject/RbacobjectMediumCard';
// rbacobject financetype

//  Category: Financecategory
// import { Financecategory } from '../Financecategory/FinancecategoryMediumCard';
// category financetype


import { UserMediumCard as MediumCard3 } from '../User/UserMediumCard';
// <MediumCard3 user={ financetype?.changedby }/>
import { UserMediumCard as MediumCard6 } from '../User/UserMediumCard';
// <MediumCard6 user={ financetype?.createdby }/>
import { RbacobjectMediumCard as MediumCard7 } from '../Rbacobject/RbacobjectMediumCard';
// <MediumCard7 rbacobject={ financetype?.rbacobject }/>
import { FinancecategoryMediumCard as MediumCard10 } from '../Financecategory/FinancecategoryMediumCard';
// <MediumCard10 financecategory={ financetype?.category }/>

/**
 * Entity representing a finance type
 */
export const FinancetypeLargeCard = ({ financetype, children}) => {
    // console.log("FinancetypeLargeCard", financetype)
    return (
        <FinancetypeLargeCardLayout financetype={ financetype } grandchildren={children}>
            <FinancetypeMediumCard financetype={ financetype }/>
            <FinancetypeVectorLinksCard  financetype={ financetype } />
            { 
                financetype?.changedby?<MediumCard3 user={ financetype?.changedby } label={"Changedby"} />:null
            }
            { 
                financetype?.createdby?<MediumCard6 user={ financetype?.createdby } label={"Createdby"} />:null
            }
            { 
                financetype?.rbacobject?<MediumCard7 rbacobject={ financetype?.rbacobject } label={"Rbacobject"} />:null
            }
            { 
                financetype?.category?<MediumCard10 financecategory={ financetype?.category } label={"Category"} />:null
            }
        </FinancetypeLargeCardLayout>
    )
}

