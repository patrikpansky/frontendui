import { FormitemMediumCard } from './FormitemMediumCard';
import { FormitemLargeCardLayout } from './FormitemLargeCardLayout';
import { FormitemVectorLinksCard } from './FormitemVectorLinksCard';

/**/
//  Formitem: FormItem
/**/

//  Changedby: User
// import { User } from '../User/UserMediumCard';
// changedby formitem

//  Createdby: User
// import { User } from '../User/UserMediumCard';
// createdby formitem

//  Rbacobject: Rbacobject
// import { Rbacobject } from '../Rbacobject/RbacobjectMediumCard';
// rbacobject formitem

//  Part: Formpart
// import { Formpart } from '../Formpart/FormpartMediumCard';
// part formitem

//  Type: Formitemtype
// import { Formitemtype } from '../Formitemtype/FormitemtypeMediumCard';
// type formitem


import { UserMediumCard as MediumCard2 } from '../User/UserMediumCard';
// <MediumCard2 user={ formitem?.changedby }/>
import { UserMediumCard as MediumCard5 } from '../User/UserMediumCard';
// <MediumCard5 user={ formitem?.createdby }/>
import { RbacobjectMediumCard as MediumCard7 } from '../Rbacobject/RbacobjectMediumCard';
// <MediumCard7 rbacobject={ formitem?.rbacobject }/>
import { FormpartMediumCard as MediumCard10 } from '../Formpart/FormpartMediumCard';
// <MediumCard10 formpart={ formitem?.part }/>
import { FormitemtypeMediumCard as MediumCard11 } from '../Formitemtype/FormitemtypeMediumCard';
// <MediumCard11 formitemtype={ formitem?.type }/>

/**
 * Type representing an item in the form
 */
export const FormitemLargeCard = ({ formitem, children}) => {
    // console.log("FormitemLargeCard", formitem)
    return (
        <FormitemLargeCardLayout formitem={ formitem } grandchildren={children}>
            <FormitemMediumCard formitem={ formitem }/>
            <FormitemVectorLinksCard  formitem={ formitem } />
            { 
                formitem?.changedby?<MediumCard2 user={ formitem?.changedby } label={"Changedby"} />:null
            }
            { 
                formitem?.createdby?<MediumCard5 user={ formitem?.createdby } label={"Createdby"} />:null
            }
            { 
                formitem?.rbacobject?<MediumCard7 rbacobject={ formitem?.rbacobject } label={"Rbacobject"} />:null
            }
            { 
                formitem?.part?<MediumCard10 formpart={ formitem?.part } label={"Part"} />:null
            }
            { 
                formitem?.type?<MediumCard11 formitemtype={ formitem?.type } label={"Type"} />:null
            }
        </FormitemLargeCardLayout>
    )
}

