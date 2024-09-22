import { FormitemtypeMediumCard } from './FormitemtypeMediumCard';
import { FormitemtypeLargeCardLayout } from './FormitemtypeLargeCardLayout';
import { FormitemtypeVectorLinksCard } from './FormitemtypeVectorLinksCard';

/**/
//  Formitemtype: FormItemType
/**/

//  Changedby: User
// import { User } from '../User/UserMediumCard';
// changedby formitemtype

//  Createdby: User
// import { User } from '../User/UserMediumCard';
// createdby formitemtype

//  Rbacobject: Rbacobject
// import { Rbacobject } from '../Rbacobject/RbacobjectMediumCard';
// rbacobject formitemtype

//  Category: Formitemcategory
// import { Formitemcategory } from '../Formitemcategory/FormitemcategoryMediumCard';
// category formitemtype


import { UserMediumCard as MediumCard2 } from '../User/UserMediumCard';
// <MediumCard2 user={ formitemtype?.changedby }/>
import { UserMediumCard as MediumCard5 } from '../User/UserMediumCard';
// <MediumCard5 user={ formitemtype?.createdby }/>
import { RbacobjectMediumCard as MediumCard7 } from '../Rbacobject/RbacobjectMediumCard';
// <MediumCard7 rbacobject={ formitemtype?.rbacobject }/>
import { FormitemcategoryMediumCard as MediumCard8 } from '../Formitemcategory/FormitemcategoryMediumCard';
// <MediumCard8 formitemcategory={ formitemtype?.category }/>

/**
 * Type representing an item type
 */
export const FormitemtypeLargeCard = ({ formitemtype, children}) => {
    // console.log("FormitemtypeLargeCard", formitemtype)
    return (
        <FormitemtypeLargeCardLayout formitemtype={ formitemtype } grandchildren={children}>
            <FormitemtypeMediumCard formitemtype={ formitemtype }/>
            <FormitemtypeVectorLinksCard  formitemtype={ formitemtype } />
            { 
                formitemtype?.changedby?<MediumCard2 user={ formitemtype?.changedby } label={"Changedby"} />:null
            }
            { 
                formitemtype?.createdby?<MediumCard5 user={ formitemtype?.createdby } label={"Createdby"} />:null
            }
            { 
                formitemtype?.rbacobject?<MediumCard7 rbacobject={ formitemtype?.rbacobject } label={"Rbacobject"} />:null
            }
            { 
                formitemtype?.category?<MediumCard8 formitemcategory={ formitemtype?.category } label={"Category"} />:null
            }
        </FormitemtypeLargeCardLayout>
    )
}

