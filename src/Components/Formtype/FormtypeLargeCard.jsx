import { FormtypeMediumCard } from './FormtypeMediumCard';
import { FormtypeLargeCardLayout } from './FormtypeLargeCardLayout';
import { FormtypeVectorLinksCard } from './FormtypeVectorLinksCard';

/**/
//  Formtype: FormType
/**/

//  Changedby: User
// import { User } from '../User/UserMediumCard';
// changedby formtype

//  Createdby: User
// import { User } from '../User/UserMediumCard';
// createdby formtype

//  Rbacobject: Rbacobject
// import { Rbacobject } from '../Rbacobject/RbacobjectMediumCard';
// rbacobject formtype

//  Category: Formcategory
// import { Formcategory } from '../Formcategory/FormcategoryMediumCard';
// category formtype


import { UserMediumCard as MediumCard2 } from '../User/UserMediumCard';
// <MediumCard2 user={ formtype?.changedby }/>
import { UserMediumCard as MediumCard5 } from '../User/UserMediumCard';
// <MediumCard5 user={ formtype?.createdby }/>
import { RbacobjectMediumCard as MediumCard7 } from '../Rbacobject/RbacobjectMediumCard';
// <MediumCard7 rbacobject={ formtype?.rbacobject }/>
import { FormcategoryMediumCard as MediumCard8 } from '../Formcategory/FormcategoryMediumCard';
// <MediumCard8 formcategory={ formtype?.category }/>

/**
 * Entity representing a category of form types
 */
export const FormtypeLargeCard = ({ formtype, children}) => {
    // console.log("FormtypeLargeCard", formtype)
    return (
        <FormtypeLargeCardLayout formtype={ formtype } grandchildren={children}>
            <FormtypeMediumCard formtype={ formtype }/>
            <FormtypeVectorLinksCard  formtype={ formtype } />
            { 
                formtype?.changedby?<MediumCard2 user={ formtype?.changedby } label={"Changedby"} />:null
            }
            { 
                formtype?.createdby?<MediumCard5 user={ formtype?.createdby } label={"Createdby"} />:null
            }
            { 
                formtype?.rbacobject?<MediumCard7 rbacobject={ formtype?.rbacobject } label={"Rbacobject"} />:null
            }
            { 
                formtype?.category?<MediumCard8 formcategory={ formtype?.category } label={"Category"} />:null
            }
        </FormtypeLargeCardLayout>
    )
}

