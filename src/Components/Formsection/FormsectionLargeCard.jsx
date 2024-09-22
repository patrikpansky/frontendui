import { FormsectionMediumCard } from './FormsectionMediumCard';
import { FormsectionLargeCardLayout } from './FormsectionLargeCardLayout';
import { FormsectionVectorLinksCard } from './FormsectionVectorLinksCard';

/**/
//  Formsection: FormSection
/**/

//  Changedby: User
// import { User } from '../User/UserMediumCard';
// changedby formsection

//  Createdby: User
// import { User } from '../User/UserMediumCard';
// createdby formsection

//  Rbacobject: Rbacobject
// import { Rbacobject } from '../Rbacobject/RbacobjectMediumCard';
// rbacobject formsection

//  Form: Form
// import { Form } from '../Form/FormMediumCard';
// form formsection


import { UserMediumCard as MediumCard2 } from '../User/UserMediumCard';
// <MediumCard2 user={ formsection?.changedby }/>
import { UserMediumCard as MediumCard5 } from '../User/UserMediumCard';
// <MediumCard5 user={ formsection?.createdby }/>
import { RbacobjectMediumCard as MediumCard7 } from '../Rbacobject/RbacobjectMediumCard';
// <MediumCard7 rbacobject={ formsection?.rbacobject }/>
import { FormMediumCard as MediumCard10 } from '../Form/FormMediumCard';
// <MediumCard10 form={ formsection?.form }/>

/**
 * Type representing a section in the form
 */
export const FormsectionLargeCard = ({ formsection, children}) => {
    // console.log("FormsectionLargeCard", formsection)
    return (
        <FormsectionLargeCardLayout formsection={ formsection } grandchildren={children}>
            <FormsectionMediumCard formsection={ formsection }/>
            <FormsectionVectorLinksCard  formsection={ formsection } />
            { 
                formsection?.changedby?<MediumCard2 user={ formsection?.changedby } label={"Changedby"} />:null
            }
            { 
                formsection?.createdby?<MediumCard5 user={ formsection?.createdby } label={"Createdby"} />:null
            }
            { 
                formsection?.rbacobject?<MediumCard7 rbacobject={ formsection?.rbacobject } label={"Rbacobject"} />:null
            }
            { 
                formsection?.form?<MediumCard10 form={ formsection?.form } label={"Form"} />:null
            }
        </FormsectionLargeCardLayout>
    )
}

