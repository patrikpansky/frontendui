import { RequestMediumCard } from './RequestMediumCard';
import { RequestLargeCardLayout } from './RequestLargeCardLayout';
import { RequestVectorLinksCard } from './RequestVectorLinksCard';

/**/
//  Request: Request
/**/

//  Changedby: User
// import { User } from '../User/UserMediumCard';
// changedby request

//  Createdby: User
// import { User } from '../User/UserMediumCard';
// createdby request

//  Rbacobject: Rbacobject
// import { Rbacobject } from '../Rbacobject/RbacobjectMediumCard';
// rbacobject request

//  Creator: User
// import { User } from '../User/UserMediumCard';
// creator request

//  State: State
// import { State } from '../State/StateMediumCard';
// state request

//  Form: Form
// import { Form } from '../Form/FormMediumCard';
// form request


import { UserMediumCard as MediumCard2 } from '../User/UserMediumCard';
// <MediumCard2 user={ request?.changedby }/>
import { UserMediumCard as MediumCard5 } from '../User/UserMediumCard';
// <MediumCard5 user={ request?.createdby }/>
import { RbacobjectMediumCard as MediumCard7 } from '../Rbacobject/RbacobjectMediumCard';
// <MediumCard7 rbacobject={ request?.rbacobject }/>
import { UserMediumCard as MediumCard8 } from '../User/UserMediumCard';
// <MediumCard8 user={ request?.creator }/>
import { StateMediumCard as MediumCard11 } from '../State/StateMediumCard';
// <MediumCard11 state={ request?.state }/>
import { FormMediumCard as MediumCard12 } from '../Form/FormMediumCard';
// <MediumCard12 form={ request?.form }/>

/**
 * Entity representing a request (digital form of a paper, aka &quot;student request to the dean&quot;)
 */
export const RequestLargeCard = ({ request, children}) => {
    // console.log("RequestLargeCard", request)
    return (
        <RequestLargeCardLayout request={ request } grandchildren={children}>
            <RequestMediumCard request={ request }/>
            <RequestVectorLinksCard  request={ request } />
            { 
                request?.changedby?<MediumCard2 user={ request?.changedby } label={"Changedby"} />:null
            }
            { 
                request?.createdby?<MediumCard5 user={ request?.createdby } label={"Createdby"} />:null
            }
            { 
                request?.rbacobject?<MediumCard7 rbacobject={ request?.rbacobject } label={"Rbacobject"} />:null
            }
            { 
                request?.creator?<MediumCard8 user={ request?.creator } label={"Creator"} />:null
            }
            { 
                request?.state?<MediumCard11 state={ request?.state } label={"State"} />:null
            }
            { 
                request?.form?<MediumCard12 form={ request?.form } label={"Form"} />:null
            }
        </RequestLargeCardLayout>
    )
}

