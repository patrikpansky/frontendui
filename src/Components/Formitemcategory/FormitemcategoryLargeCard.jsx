import { FormitemcategoryMediumCard } from './FormitemcategoryMediumCard';
import { FormitemcategoryLargeCardLayout } from './FormitemcategoryLargeCardLayout';
import { FormitemcategoryVectorLinksCard } from './FormitemcategoryVectorLinksCard';

/**/
//  Formitemcategory: FormItemCategory
/**/

//  Changedby: User
// import { User } from '../User/UserMediumCard';
// changedby formitemcategory

//  Createdby: User
// import { User } from '../User/UserMediumCard';
// createdby formitemcategory

//  Rbacobject: Rbacobject
// import { Rbacobject } from '../Rbacobject/RbacobjectMediumCard';
// rbacobject formitemcategory


import { UserMediumCard as MediumCard2 } from '../User/UserMediumCard';
// <MediumCard2 user={ formitemcategory?.changedby }/>
import { UserMediumCard as MediumCard5 } from '../User/UserMediumCard';
// <MediumCard5 user={ formitemcategory?.createdby }/>
import { RbacobjectMediumCard as MediumCard7 } from '../Rbacobject/RbacobjectMediumCard';
// <MediumCard7 rbacobject={ formitemcategory?.rbacobject }/>

/**
 * Type representing an item category
 */
export const FormitemcategoryLargeCard = ({ formitemcategory, children}) => {
    // console.log("FormitemcategoryLargeCard", formitemcategory)
    return (
        <FormitemcategoryLargeCardLayout formitemcategory={ formitemcategory } grandchildren={children}>
            <FormitemcategoryMediumCard formitemcategory={ formitemcategory }/>
            <FormitemcategoryVectorLinksCard  formitemcategory={ formitemcategory } />
            { 
                formitemcategory?.changedby?<MediumCard2 user={ formitemcategory?.changedby } label={"Changedby"} />:null
            }
            { 
                formitemcategory?.createdby?<MediumCard5 user={ formitemcategory?.createdby } label={"Createdby"} />:null
            }
            { 
                formitemcategory?.rbacobject?<MediumCard7 rbacobject={ formitemcategory?.rbacobject } label={"Rbacobject"} />:null
            }
        </FormitemcategoryLargeCardLayout>
    )
}

