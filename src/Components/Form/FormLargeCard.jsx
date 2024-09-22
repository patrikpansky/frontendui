import { FormMediumCard } from './FormMediumCard';
import { FormLargeCardLayout } from './FormLargeCardLayout';
import { FormVectorLinksCard } from './FormVectorLinksCard';

/**/
//  Form: Form
/**/

//  Changedby: User
// import { User } from '../User/UserMediumCard';
// changedby form

//  Createdby: User
// import { User } from '../User/UserMediumCard';
// createdby form

//  Rbacobject: Rbacobject
// import { Rbacobject } from '../Rbacobject/RbacobjectMediumCard';
// rbacobject form

//  State: State
// import { State } from '../State/StateMediumCard';
// state form

//  Type: Formtype
// import { Formtype } from '../Formtype/FormtypeMediumCard';
// type form

//  Request: Request
// import { Request } from '../Request/RequestMediumCard';
// request form


import { UserMediumCard as MediumCard2 } from '../User/UserMediumCard';
// <MediumCard2 user={ form?.changedby }/>
import { UserMediumCard as MediumCard5 } from '../User/UserMediumCard';
// <MediumCard5 user={ form?.createdby }/>
import { RbacobjectMediumCard as MediumCard7 } from '../Rbacobject/RbacobjectMediumCard';
// <MediumCard7 rbacobject={ form?.rbacobject }/>
import { StateMediumCard as MediumCard11 } from '../State/StateMediumCard';
// <MediumCard11 state={ form?.state }/>
import { FormtypeMediumCard as MediumCard12 } from '../Formtype/FormtypeMediumCard';
// <MediumCard12 formtype={ form?.type }/>
import { RequestMediumCard as MediumCard13 } from '../Request/RequestMediumCard';
// <MediumCard13 request={ form?.request }/>

/**
 * # Reason

Entity representing a form, form is digitalized A4 sheet

## Structure

form -&gt; sections -&gt; parts -&gt; items
 */
export const FormLargeCard = ({ form, children}) => {
    // console.log("FormLargeCard", form)
    return (
        <FormLargeCardLayout form={ form } grandchildren={children}>
            <FormMediumCard form={ form }/>
            <FormVectorLinksCard  form={ form } />
            { 
                form?.changedby?<MediumCard2 user={ form?.changedby } label={"Changedby"} />:null
            }
            { 
                form?.createdby?<MediumCard5 user={ form?.createdby } label={"Createdby"} />:null
            }
            { 
                form?.rbacobject?<MediumCard7 rbacobject={ form?.rbacobject } label={"Rbacobject"} />:null
            }
            { 
                form?.state?<MediumCard11 state={ form?.state } label={"State"} />:null
            }
            { 
                form?.type?<MediumCard12 formtype={ form?.type } label={"Type"} />:null
            }
            { 
                form?.request?<MediumCard13 request={ form?.request } label={"Request"} />:null
            }
        </FormLargeCardLayout>
    )
}

