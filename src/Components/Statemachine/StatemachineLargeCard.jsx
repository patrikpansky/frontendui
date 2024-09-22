import { StatemachineMediumCard } from './StatemachineMediumCard';
import { StatemachineLargeCardLayout } from './StatemachineLargeCardLayout';
import { StatemachineVectorLinksCard } from './StatemachineVectorLinksCard';

/**/
//  Statemachine: StateMachine
/**/

//  Createdby: User
// import { User } from '../User/UserMediumCard';
// createdby statemachine

//  Changedby: User
// import { User } from '../User/UserMediumCard';
// changedby statemachine

//  Rbacobject: Rbacobject
// import { Rbacobject } from '../Rbacobject/RbacobjectMediumCard';
// rbacobject statemachine


import { UserMediumCard as MediumCard1 } from '../User/UserMediumCard';
// <MediumCard1 user={ statemachine?.createdby }/>
import { UserMediumCard as MediumCard4 } from '../User/UserMediumCard';
// <MediumCard4 user={ statemachine?.changedby }/>
import { RbacobjectMediumCard as MediumCard7 } from '../Rbacobject/RbacobjectMediumCard';
// <MediumCard7 rbacobject={ statemachine?.rbacobject }/>

/**
 * Entity representing a state machine
 */
export const StatemachineLargeCard = ({ statemachine, children}) => {
    // console.log("StatemachineLargeCard", statemachine)
    return (
        <StatemachineLargeCardLayout statemachine={ statemachine } grandchildren={children}>
            <StatemachineMediumCard statemachine={ statemachine }/>
            <StatemachineVectorLinksCard  statemachine={ statemachine } />
            { 
                statemachine?.createdby?<MediumCard1 user={ statemachine?.createdby } label={"Createdby"} />:null
            }
            { 
                statemachine?.changedby?<MediumCard4 user={ statemachine?.changedby } label={"Changedby"} />:null
            }
            { 
                statemachine?.rbacobject?<MediumCard7 rbacobject={ statemachine?.rbacobject } label={"Rbacobject"} />:null
            }
        </StatemachineLargeCardLayout>
    )
}

