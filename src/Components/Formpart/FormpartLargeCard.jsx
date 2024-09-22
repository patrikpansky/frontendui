import { FormpartMediumCard } from './FormpartMediumCard';
import { FormpartLargeCardLayout } from './FormpartLargeCardLayout';
import { FormpartVectorLinksCard } from './FormpartVectorLinksCard';

/**/
//  Formpart: FormPart
/**/

//  Changedby: User
// import { User } from '../User/UserMediumCard';
// changedby formpart

//  Createdby: User
// import { User } from '../User/UserMediumCard';
// createdby formpart

//  Rbacobject: Rbacobject
// import { Rbacobject } from '../Rbacobject/RbacobjectMediumCard';
// rbacobject formpart

//  Section: Formsection
// import { Formsection } from '../Formsection/FormsectionMediumCard';
// section formpart


import { UserMediumCard as MediumCard2 } from '../User/UserMediumCard';
// <MediumCard2 user={ formpart?.changedby }/>
import { UserMediumCard as MediumCard5 } from '../User/UserMediumCard';
// <MediumCard5 user={ formpart?.createdby }/>
import { RbacobjectMediumCard as MediumCard7 } from '../Rbacobject/RbacobjectMediumCard';
// <MediumCard7 rbacobject={ formpart?.rbacobject }/>
import { FormsectionMediumCard as MediumCard9 } from '../Formsection/FormsectionMediumCard';
// <MediumCard9 formsection={ formpart?.section }/>

/**
 * Type representing a part in the section
 */
export const FormpartLargeCard = ({ formpart, children}) => {
    // console.log("FormpartLargeCard", formpart)
    return (
        <FormpartLargeCardLayout formpart={ formpart } grandchildren={children}>
            <FormpartMediumCard formpart={ formpart }/>
            <FormpartVectorLinksCard  formpart={ formpart } />
            { 
                formpart?.changedby?<MediumCard2 user={ formpart?.changedby } label={"Changedby"} />:null
            }
            { 
                formpart?.createdby?<MediumCard5 user={ formpart?.createdby } label={"Createdby"} />:null
            }
            { 
                formpart?.rbacobject?<MediumCard7 rbacobject={ formpart?.rbacobject } label={"Rbacobject"} />:null
            }
            { 
                formpart?.section?<MediumCard9 formsection={ formpart?.section } label={"Section"} />:null
            }
        </FormpartLargeCardLayout>
    )
}

