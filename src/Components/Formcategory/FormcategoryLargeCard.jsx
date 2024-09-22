import { FormcategoryMediumCard } from './FormcategoryMediumCard';
import { FormcategoryLargeCardLayout } from './FormcategoryLargeCardLayout';
import { FormcategoryVectorLinksCard } from './FormcategoryVectorLinksCard';

/**/
//  Formcategory: FormCategory
/**/

//  Changedby: User
// import { User } from '../User/UserMediumCard';
// changedby formcategory

//  Createdby: User
// import { User } from '../User/UserMediumCard';
// createdby formcategory

//  Rbacobject: Rbacobject
// import { Rbacobject } from '../Rbacobject/RbacobjectMediumCard';
// rbacobject formcategory


import { UserMediumCard as MediumCard2 } from '../User/UserMediumCard';
// <MediumCard2 user={ formcategory?.changedby }/>
import { UserMediumCard as MediumCard5 } from '../User/UserMediumCard';
// <MediumCard5 user={ formcategory?.createdby }/>
import { RbacobjectMediumCard as MediumCard7 } from '../Rbacobject/RbacobjectMediumCard';
// <MediumCard7 rbacobject={ formcategory?.rbacobject }/>

/**
 * Entity representing a category of form types
 */
export const FormcategoryLargeCard = ({ formcategory, children}) => {
    // console.log("FormcategoryLargeCard", formcategory)
    return (
        <FormcategoryLargeCardLayout formcategory={ formcategory } grandchildren={children}>
            <FormcategoryMediumCard formcategory={ formcategory }/>
            <FormcategoryVectorLinksCard  formcategory={ formcategory } />
            { 
                formcategory?.changedby?<MediumCard2 user={ formcategory?.changedby } label={"Changedby"} />:null
            }
            { 
                formcategory?.createdby?<MediumCard5 user={ formcategory?.createdby } label={"Createdby"} />:null
            }
            { 
                formcategory?.rbacobject?<MediumCard7 rbacobject={ formcategory?.rbacobject } label={"Rbacobject"} />:null
            }
        </FormcategoryLargeCardLayout>
    )
}

