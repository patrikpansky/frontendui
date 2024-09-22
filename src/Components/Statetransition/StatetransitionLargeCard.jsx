import { StatetransitionMediumCard } from './StatetransitionMediumCard';
import { StatetransitionLargeCardLayout } from './StatetransitionLargeCardLayout';
import { StatetransitionVectorLinksCard } from './StatetransitionVectorLinksCard';

/**/
//  Statetransition: StateTransition
/**/

//  Createdby: User
// import { User } from '../User/UserMediumCard';
// createdby statetransition

//  Changedby: User
// import { User } from '../User/UserMediumCard';
// changedby statetransition

//  Rbacobject: Rbacobject
// import { Rbacobject } from '../Rbacobject/RbacobjectMediumCard';
// rbacobject statetransition

//  Source: State
// import { State } from '../State/StateMediumCard';
// source statetransition

//  Target: State
// import { State } from '../State/StateMediumCard';
// target statetransition

//  Statemachine: Statemachine
// import { Statemachine } from '../Statemachine/StatemachineMediumCard';
// statemachine statetransition


import { UserMediumCard as MediumCard1 } from '../User/UserMediumCard';
// <MediumCard1 user={ statetransition?.createdby }/>
import { UserMediumCard as MediumCard4 } from '../User/UserMediumCard';
// <MediumCard4 user={ statetransition?.changedby }/>
import { RbacobjectMediumCard as MediumCard7 } from '../Rbacobject/RbacobjectMediumCard';
// <MediumCard7 rbacobject={ statetransition?.rbacobject }/>
import { StateMediumCard as MediumCard8 } from '../State/StateMediumCard';
// <MediumCard8 state={ statetransition?.source }/>
import { StateMediumCard as MediumCard9 } from '../State/StateMediumCard';
// <MediumCard9 state={ statetransition?.target }/>
import { StatemachineMediumCard as MediumCard10 } from '../Statemachine/StatemachineMediumCard';
// <MediumCard10 statemachine={ statetransition?.statemachine }/>

/**
 * Entity representing an entity type
 */
export const StatetransitionLargeCard = ({ statetransition, children}) => {
    // console.log("StatetransitionLargeCard", statetransition)
    return (
        <StatetransitionLargeCardLayout statetransition={ statetransition } grandchildren={children}>
            <StatetransitionMediumCard statetransition={ statetransition }/>
            <StatetransitionVectorLinksCard  statetransition={ statetransition } />
            { 
                statetransition?.createdby?<MediumCard1 user={ statetransition?.createdby } label={"Createdby"} />:null
            }
            { 
                statetransition?.changedby?<MediumCard4 user={ statetransition?.changedby } label={"Changedby"} />:null
            }
            { 
                statetransition?.rbacobject?<MediumCard7 rbacobject={ statetransition?.rbacobject } label={"Rbacobject"} />:null
            }
            { 
                statetransition?.source?<MediumCard8 state={ statetransition?.source } label={"Source"} />:null
            }
            { 
                statetransition?.target?<MediumCard9 state={ statetransition?.target } label={"Target"} />:null
            }
            { 
                statetransition?.statemachine?<MediumCard10 statemachine={ statetransition?.statemachine } label={"Statemachine"} />:null
            }
        </StatetransitionLargeCardLayout>
    )
}

