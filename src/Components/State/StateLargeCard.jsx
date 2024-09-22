import { StateMediumCard } from './StateMediumCard';
import { StateLargeCardLayout } from './StateLargeCardLayout';
import { StateVectorLinksCard } from './StateVectorLinksCard';

/**/
//  State: State
/**/

//  Createdby: User
// import { User } from '../User/UserMediumCard';
// createdby state

//  Changedby: User
// import { User } from '../User/UserMediumCard';
// changedby state

//  Rbacobject: Rbacobject
// import { Rbacobject } from '../Rbacobject/RbacobjectMediumCard';
// rbacobject state

//  Statemachine: Statemachine
// import { Statemachine } from '../Statemachine/StatemachineMediumCard';
// statemachine state


import { UserMediumCard as MediumCard2 } from '../User/UserMediumCard';
// <MediumCard2 user={ state?.createdby }/>
import { UserMediumCard as MediumCard5 } from '../User/UserMediumCard';
// <MediumCard5 user={ state?.changedby }/>
import { RbacobjectMediumCard as MediumCard8 } from '../Rbacobject/RbacobjectMediumCard';
// <MediumCard8 rbacobject={ state?.rbacobject }/>
import { StatemachineMediumCard as MediumCard9 } from '../Statemachine/StatemachineMediumCard';
// <MediumCard9 statemachine={ state?.statemachine }/>

/**
 * Entity representing a state of state machine
 */
export const StateLargeCard = ({ state, children}) => {
    // console.log("StateLargeCard", state)
    return (
        <StateLargeCardLayout state={ state } grandchildren={children}>
            <StateMediumCard state={ state }/>
            <StateVectorLinksCard  state={ state } />
            { 
                state?.createdby?<MediumCard2 user={ state?.createdby } label={"Createdby"} />:null
            }
            { 
                state?.changedby?<MediumCard5 user={ state?.changedby } label={"Changedby"} />:null
            }
            { 
                state?.rbacobject?<MediumCard8 rbacobject={ state?.rbacobject } label={"Rbacobject"} />:null
            }
            { 
                state?.statemachine?<MediumCard9 statemachine={ state?.statemachine } label={"Statemachine"} />:null
            }
        </StateLargeCardLayout>
    )
}

