import React, { useCallback } from 'react';
import {
  ReactFlow,
  MiniMap,
  Controls,
  Background,
  addEdge,
  useNodesState,
  useEdgesState,
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import CustomNode from './CustomNode'; // Import the custom node component
import { data } from 'autoprefixer';
import Form from './Form.jsx';

const nodeTypes = { collapsibleNode: CustomNode };

const initialNodes = [
  {
    id: '1',
    type: 'collapsibleNode',
    data: {
      label: 'Node 1',
      components: [
        { id: 'C1', name: 'Component A' },
        { id: 'C2', name: 'Component B' },
        { id: 'C3', name: 'Component c' },
        { id: 'C4', name: 'Component D' }

      ],

    },
    position: { x: 100, y: 100 },
  },
  {
    id: '2',
    type: 'collapsibleNode',
    data: {
      label: 'Node 2',
      components: [{ id: 'C5', name: 'Component E' }],
    },
    position: { x: 400, y: 100 },
  },
  {
    id: '3',
    type: 'collapsibleNode',
    data: {
      label: 'Node 3',
      components: [{ id: 'C7', name: 'Component g' }],
      
    },
    position: { x: 300, y: 400 },
  },
]

const initialEdges = [
  { 
    id: 'e1', 
    source: '1', 
    target: '2', 
    markerEnd: { type: 'arrowclosed' },
    type: 'smoothstep',
    style: { stroke: 'gray', strokeWidth: 2 } // Set thickness and color
  },
  { 
    id: 'e2', 
    source: '2', 
    target: '3', 
    markerEnd: { type: 'arrowclosed' },
    type: 'smoothstep',
    style: { stroke: 'gray', strokeWidth: 2 } // Set thickness and color
  },
];

const ERDiagram = () => {

  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const onConnect = useCallback(
    (params) =>
      setEdges((eds) =>
        addEdge(
          {
            ...params,
            markerEnd: { type: 'arrowclosed', markerWidth: 30, markerHeight: 30 },
            style: { stroke: 'gray', strokeWidth: 2 } ,
            type: 'smoothstep',
          },
          eds
        )
      ),
    [setEdges]
  );
  // const onConnect = ()=>{
  //   console.log(`1-${data.components1}-c1`);
  // }


  return (
    <div style={{ background: "black", width: '100vw', height: '100vh' }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        nodeTypes={nodeTypes}
        fitView
      >
        <MiniMap />
        <Controls />
        <Background />
      </ReactFlow>
    </div>
  );
};

export default ERDiagram;
