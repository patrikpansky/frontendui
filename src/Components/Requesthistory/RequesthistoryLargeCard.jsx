import { RequesthistoryMediumCard } from './RequesthistoryMediumCard';
import { RequesthistoryLargeCardLayout } from './RequesthistoryLargeCardLayout';
import { RequesthistoryVectorLinksCard } from './RequesthistoryVectorLinksCard';

/**/
//  Requesthistory: RequestHistory
/**/

//  Changedby: User
// import { User } from '../User/UserMediumCard';
// changedby requesthistory

//  Createdby: User
// import { User } from '../User/UserMediumCard';
// createdby requesthistory

//  Rbacobject: Rbacobject
// import { Rbacobject } from '../Rbacobject/RbacobjectMediumCard';
// rbacobject requesthistory

//  Request: Request
// import { Request } from '../Request/RequestMediumCard';
// request requesthistory

//  Form: Form
// import { Form } from '../Form/FormMediumCard';
// form requesthistory

//  State: State
// import { State } from '../State/StateMediumCard';
// state requesthistory


import { UserMediumCard as MediumCard2 } from '../User/UserMediumCard';
// <MediumCard2 user={ requesthistory?.changedby }/>
import { UserMediumCard as MediumCard5 } from '../User/UserMediumCard';
// <MediumCard5 user={ requesthistory?.createdby }/>
import { RbacobjectMediumCard as MediumCard7 } from '../Rbacobject/RbacobjectMediumCard';
// <MediumCard7 rbacobject={ requesthistory?.rbacobject }/>
import { RequestMediumCard as MediumCard8 } from '../Request/RequestMediumCard';
// <MediumCard8 request={ requesthistory?.request }/>
import { FormMediumCard as MediumCard9 } from '../Form/FormMediumCard';
// <MediumCard9 form={ requesthistory?.form }/>
import { StateMediumCard as MediumCard10 } from '../State/StateMediumCard';
// <MediumCard10 state={ requesthistory?.state }/>

/**
 * Entity which stores a history of form evolution during a request. This allows to recall form changes.
 */
export const RequesthistoryLargeCard = ({ requesthistory, children}) => {
    // console.log("RequesthistoryLargeCard", requesthistory)
    return (
        <RequesthistoryLargeCardLayout requesthistory={ requesthistory } grandchildren={children}>
            <RequesthistoryMediumCard requesthistory={ requesthistory }/>
            <RequesthistoryVectorLinksCard  requesthistory={ requesthistory } />
            { 
                requesthistory?.changedby?<MediumCard2 user={ requesthistory?.changedby } label={"Changedby"} />:null
            }
            { 
                requesthistory?.createdby?<MediumCard5 user={ requesthistory?.createdby } label={"Createdby"} />:null
            }
            { 
                requesthistory?.rbacobject?<MediumCard7 rbacobject={ requesthistory?.rbacobject } label={"Rbacobject"} />:null
            }
            { 
                requesthistory?.request?<MediumCard8 request={ requesthistory?.request } label={"Request"} />:null
            }
            { 
                requesthistory?.form?<MediumCard9 form={ requesthistory?.form } label={"Form"} />:null
            }
            { 
                requesthistory?.state?<MediumCard10 state={ requesthistory?.state } label={"State"} />:null
            }
        </RequesthistoryLargeCardLayout>
    )
}

