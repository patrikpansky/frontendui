import { useState } from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { InsertStateButton } from '../State/InsertStateButton'
import { DeleteStateTransitionButton, InsertStateTransitionButton, StateMachineReadAsyncAction, UpdateStateTransitionButton } from '../StateTransition'
import { useAsyncAction } from '@hrbolek/uoisfrontend-gql-shared'
import { AsyncClickHandler, AsyncComponent, LeftColumn, MiddleColumn, SimpleCardCapsule } from '@hrbolek/uoisfrontend-shared'
import { PencilFill, PlusLg, TrashFill } from 'react-bootstrap-icons'
import { UpdateStateButton } from '../State/UpdateStateButton'
import { DeleteStateButton } from '../State/DeleteStateButton'

const Transition = ({statemachine, transition, onChange, onTransitionClick=()=>null, ...props}) => {
    transition = statemachine?.transitions.find(
        t => t.id === transition.id
    )
    return (
        <span className="btn btn-sm btn-light">
            <DeleteStateTransitionButton 
                className="btn btn-sm btn-outline-danger"
                statetransition={transition}
                onDone={onChange}
            >
                <TrashFill /> 
            </DeleteStateTransitionButton>
            <UpdateStateTransitionButton 
                className="btn btn-sm btn-outline-success"
                statetransition={{
                    ...transition, 
                    statemachine: statemachine, 
                    target_id: transition.target.id, 
                    source_id: transition.source.id
                }}
                onDone={onChange}
            >
                <PencilFill />
            </UpdateStateTransitionButton>
            &nbsp;
            <span className="btn btn-sm btn-outline-primary" onClick={()=>onTransitionClick(transition)}>
                {transition.name}&nbsp;({transition?.target?.name})
            </span>&nbsp;
        </span>
    )
}

const TransitionList = ({statemachine, transitions, children, onTransitionClick, onChange, ...props}) => {
    return (<>
        {transitions.map(transition => 
            <Transition 
                key={transition.id}     
                statemachine={statemachine} 
                {...props} 
                transition={transition}
                onTransitionClick={onTransitionClick}
                onChange={onChange}
            />
        )}
        {/* {transitions.map(transition => 
            <div key={transition.id}     >
              {JSON.stringify(transition)}
            </div>
                
            
        )} */}
        {children}
    </>)
}

export const StateDesigner = ({state, statemachine, onTransitionClick, onChange=()=>null}) => {
    const {sources=[], targets=[]} = state
    const handleNewTransition = (transition) => {
        onChange()
    }
    const incomming = statemachine?.transitions?.filter(
        transition => transition?.target?.id === state?.id
    )
    const outcomming = statemachine?.transitions?.filter(
        transition => transition?.source?.id === state?.id
    ) 
    return (
        <Row>
            <Col>
                <SimpleCardCapsule title={"Vstupy"}>
                    <TransitionList 
                        statemachine={statemachine} 
                        transitions={incomming} 
                        className="btn btn-sm btn-outline-secondary" 
                        onChange={onChange}
                        // onTransitionClick={onTransitionClick}
                    />
                </SimpleCardCapsule>
            </Col>
            <Col>
                <SimpleCardCapsule title="Výstupy">
                    <InsertStateTransitionButton  
                        className="btn btn-sm btn-outline-secondary" 
                        params={{
                            statemachine_id: statemachine.id,
                            source_id: state.id,
                            statemachine: statemachine
                        }}
                        onDone={handleNewTransition}
                    >
                        <PlusLg />
                    </InsertStateTransitionButton>
                    <TransitionList 
                        statemachine={statemachine} 
                        transitions={outcomming} 
                        className="btn btn-sm btn-outline-secondary" 
                        onTransitionClick={onTransitionClick}
                        onChange={onChange}
                    />
                    {/* {state.id} */}
                </SimpleCardCapsule>
            </Col>
        </Row>
    // <Row>
    //     <Col xs={5} className='text-end'>
    //         <TransitionList 
    //             statemachine={statemachine} 
    //             transitions={sources} 
    //             className="btn btn-sm btn-outline-secondary" 
    //             onChange={onChange}
    //         />
    //     </Col>
    //     <Col  className='text-center'>
    //         <span className="btn btn-sm btn-light">
    //             <DeleteStateButton 
    //                 className="btn btn-sm btn-outline-danger"
    //                 state={state}
    //                 onDone={onChange}
    //             >
    //                 <TrashFill />
    //             </DeleteStateButton>
    //             <UpdateStateButton 
    //                 className="btn btn-sm btn-outline-success"
    //                 state={state}
    //                 onDone={onChange}
    //             >
    //                 <PencilFill />
    //             </UpdateStateButton>
    //             &nbsp;{state?.name}
    //         </span>
    //         </Col>
    //     <Col xs={5} className='text-start'>
    //         <InsertStateTransitionButton  
    //             className="btn btn-sm btn-outline-secondary" 
    //             params={{
    //                 statemachine_id: statemachine.id,
    //                 source_id: state.id,
    //                 statemachine: statemachine
    //             }}
    //             onDone={handleNewTransition}
    //         >
    //             <PlusLg />
    //         </InsertStateTransitionButton>
    //         <TransitionList statemachine={statemachine} transitions={targets} className="btn btn-sm btn-outline-secondary" />
    //     </Col>
    // </Row>
    )
}

export const StateMachineDesigner = ({statemachine, children, onChange=()=>null}) => {
    const {states=[]} = statemachine
    const [activeIndex, setActiveIndex] = useState(0)
    const activeState = states[activeIndex]
    const handleFollowTransition = (transition) => {
        console.log("handleFollowTransition", transition)
        const targetId = transition.target.id
        const target = states.find(state => state.id === targetId)
        const newIndex = states.indexOf(target)
        if ((newIndex === 0) | (newIndex)) {
          setActiveIndex(prev => newIndex)
        }
    }
    return (
        <Row>
            <LeftColumn>
                <VerticalArcGraph statemachine={statemachine} activeNodeId={activeState?.id}/>
            </LeftColumn>
            <MiddleColumn>
                {/* <div>
                    {JSON.stringify(statemachine?.states)}
                </div>
                <div>
                    {JSON.stringify(statemachine?.transitions)}
                </div> */}
                
                {states.map((state, index) => 
                    <span key={state.id}
                        className={"btn btn-light"}
                    >
                        <DeleteStateButton
                            className="btn btn-sm btn-outline-danger"
                            state={state}
                        >
                            <TrashFill />
                        </DeleteStateButton>
                        <UpdateStateButton
                            className="btn btn-sm btn-outline-success"
                            state={state}
                        >
                            <PencilFill />
                        </UpdateStateButton>
                        <span
                            className={index===activeIndex?'btn btn-sm btn-primary':"btn btn-sm btn-outline-primary"}
                            onClick={() => setActiveIndex(prev => index)}
                        >
                            {state?.name}
                        </span>
                        
                    </span>

                )}
                <InsertStateButton 
                    className="btn btn-outline-secondary" 
                    params={{
                        statemachine_id: statemachine.id
                    }}
                    onDone={onChange}
                >
                    Nový stav
                </InsertStateButton>
                {activeState && <StateDesigner state={activeState} statemachine={statemachine} onChange={onChange} onTransitionClick={handleFollowTransition}/>}
            </MiddleColumn>
          </Row>

    )
}

export const StateMachineLiveDesigner = ({statemachine, onChange=()=>null}) => {
    const [state, setState] = useState(statemachine)
    const [fetch, setFetch] = useState(0)
    console.log("StateMachineLiveDesigner", statemachine)
    const handleChange = async () => {
        onChange(statemachine)
        if (fetch) {
            console.log("have fetch and going to use it")
            const fetchResult = await fetch()
            setState(prev => {
                onChange(fetchResult)
                return fetchResult
            })
            console.log("fetchResult", fetchResult)
        }
    }
    const handleFetch = (fetch) => {
        setFetch(prev => fetch)
    }
    // const activeNode = statemachine.states[0]
    
    return (
        <>
            {/* <VerticalArcGraph statemachine={statemachine} activeNodeId={activeNode?.id}/> */}
            <AsyncComponent 
                asyncAction={StateMachineReadAsyncAction} 
                queryVariables={{...statemachine, limit: 30}} 
                propertyName={"statemachine"}
                onChange={handleChange}
                // hook={click}
                onGotFetch={handleFetch}
            >
                <StateMachineDesigner />
            </AsyncComponent>
        </>
    )
}


/**
 * A helper to create a cubic Bézier path that arcs to the left.
 * We place control points at (x-r, startY) and (x-r, endY),
 * so it curves out to the left by "r" in the X direction.
 *
 * @param {number} x      The center X for both start and end
 * @param {number} startY The arc start Y
 * @param {number} endY   The arc end Y
 * @returns {string}      The "d" attribute for the <path>
 */
function cubicArcLeft(x, startY, endY) {
  const dy = endY - startY;
  const r = -(dy) / 2; // radius is half the vertical distance

  // We always arc left, so the control points are offset by -r in the X direction.
  // M (x, startY) C (x - r, startY) -> (x - r, endY) -> (x, endY)
  return `
    M ${x},${startY}
    C ${x - r},${startY}
      ${x - r},${endY}
      ${x},${endY}
  `;
}

/**
 * VerticalArcGraph
 *  - Renders a vertical list of rectangular nodes, spaced evenly.
 *  - Draws arcs for edges that bend left.
 *  - If source's index < target's index => arc from top of source to bottom of target.
 *  - Otherwise => arc from bottom of source to top of target.
 *  - Highlights an 'active' node (and its outgoing edges) with a different color.
 *
 * @param {Object} props
 * @param {Object} props.statemachine An object like:
 *   {
 *     states: [{ id, name }, ...],
 *     transitions: [{ source: { id }, target: { id }, name: "..."}],
 *     activeNodeId?: string
 *   }
 */
export function VerticalArcGraph({ statemachine, activeNodeId }) {
  const { states: nodes, transitions: edges } = statemachine;

  // Layout constants
  const NODE_WIDTH = 100;   // rectangle width
  const NODE_HEIGHT = 30;   // rectangle height
  const SPACING = 80;       // vertical space between node centers
  const START_X = 150;      // x-position for node centers
  const START_Y = 60;       // y offset for the first node

  // Build an index map so we can determine which node is "above" or "below".
  const nodeIndexMap = new Map();
  nodes.forEach((node, i) => nodeIndexMap.set(node.id, i));

  // Compute each node's center position.
  // We'll lay them out in the order they appear in 'nodes' top->bottom.
  const positions = {};
  nodes.forEach((node, i) => {
    positions[node.id] = {
      x: START_X,
      y: START_Y + i * SPACING
    };
  });

  // Compute the overall SVG height
  const svgWidth = 400;
  const svgHeight = START_Y + (nodes.length - 1) * SPACING + 100;

  // Helper to get fill color for a node
  const getNodeFill = (nodeId) => {
    if (nodeId === activeNodeId) {
      return "orange"; // active node highlight
    }
    return "steelblue";
  };

  // Helper to get stroke color for an edge
  const getEdgeStroke = (edge) => {
    if (edge.source.id === activeNodeId) {
      return "orange"; // highlight edges from the active node
    }
    return "black";
  };

  return (
    <svg
      width={svgWidth}
      height={svgHeight}
      style={{ border: "1px solid #ccc", background: "#f9f9f9" }}
    >
      {/* 
        (1) Draw edges:
          - If sourceIndex < targetIndex => arc from top of source -> bottom of target
          - Else => arc from bottom of source -> top of target
      */}
      {edges.map((edge, i) => {
        const sIndex = nodeIndexMap.get(edge.source.id);
        const tIndex = nodeIndexMap.get(edge.target.id);
        if (sIndex === undefined || tIndex === undefined) return null;

        const sourcePos = positions[edge.source.id];
        const targetPos = positions[edge.target.id];

        // If sIndex < tIndex => arc top->bottom
        let startY, endY;
        if (sIndex < tIndex) {
          // top of source = y - NODE_HEIGHT/2
          startY = sourcePos.y - NODE_HEIGHT / 2;
          // bottom of target = y + NODE_HEIGHT/2
          endY = targetPos.y + NODE_HEIGHT / 2;
        } else {
          // bottom of source = y + NODE_HEIGHT/2
          startY = sourcePos.y + NODE_HEIGHT / 2;
          // top of target = y - NODE_HEIGHT/2
          endY = targetPos.y - NODE_HEIGHT / 2;
        }

        const d = cubicArcLeft(sourcePos.x, startY, endY);
        const strokeColor = getEdgeStroke(edge);

        return (
          <g key={`edge-${i}`}>
            <path
              d={d}
              fill="none"
              stroke={strokeColor}
              strokeWidth="2"
            />
            {/* If we want to display the edge name, let's place it halfway. */}
            {edge.name && (
              <text
                // approximate the midpoint in Y
                x={sourcePos.x + (endY - startY) / 3}
                y={(startY + endY) / 2}
                textAnchor="middle"
                fontSize="12"
                fill={strokeColor}
                style={{ userSelect: "none" }}
              >
                {edge.name}
              </text>
            )}
          </g>
        );
      })}

      {/* (2) Draw Nodes as rectangles */}
      {nodes.map((node) => {
        const { x, y } = positions[node.id];
        const fillColor = getNodeFill(node.id);
        return (
          <g key={node.id}>
            <rect
              x={x - NODE_WIDTH / 2}
              y={y - NODE_HEIGHT / 2}
              width={NODE_WIDTH}
              height={NODE_HEIGHT}
              rx="4" // slight rounding
              ry="4"
              fill={fillColor}
              stroke="#333"
              strokeWidth="1"
            />
            {/* 
              Omit text if you want. 
              Or place node.name inside the rect, centered:
            */}
            <text
              x={x}
              y={y}
              fill="white"
              textAnchor="middle"
              dominantBaseline="middle"
              fontSize="14"
            >
              {node.name}
            </text>
          </g>
        );
      })}
    </svg>
  );
}
