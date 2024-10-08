import React, { useCallback } from 'react';
import {ReactFlow, 
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

const nodeTypes = { collapsibleNode: CustomNode };

const initialNodes = [
  {
    id: '1',
    type: 'collapsibleNode',
    data: {
      
      label: 'Node 1',
      subheading1: 'Subheading 1.1',
      components1: [
        { id: 'C1', name: 'Component A' },
        { id: 'C2', name: 'Component B' }
      ],
      subheading2: 'Subheading 1.2',
      components2: [{ id: 'C3', name: 'Component C' }],
    },
    position: { x: 100, y: 100 },
  },
  {
    id: '2',
    type: 'collapsibleNode',
    data: {
      label: 'Node 2',
      subheading1: 'Subheading 2.1',
      components1: [{ id: 'C4', name: 'Component D' }],
      subheading2: 'Subheading 2.2',
      components2: [
        { id: 'C5', name: 'Component E' },
        { id: 'C6', name: 'Component F' },
      ],
    },
    position: { x: 400, y: 100 },
  },
  // {
  //   id: '3',
  //   type: 'collapsibleNode',
  //   data: {
  //     label: 'node3',
  //     subheading1: 'Subheading 3.1',
  //     components1: ['Component G'],
  //     subheading2: 'Subheading 3.2',
  //     components2: ['Component H', 'Component I'],
  //   },
  //   position: { x: 400, y: 100 },
  // },
  // {
  //   id: '4',
  //   type: 'collapsibleNode',
  //   data: {
  //     label: 'node4',
  //     subheading1: 'Subheading 4.1',
  //     components1: ['Component J'],
  //     subheading2: 'Subheading 4.2',
  //     components2: ['Component K'],
  //   },
  //   position: { x: 400, y: 400 },
  // },
];
const initialEdges = [
  { id: 'e1', source: '1', target: '2' ,markerEnd: {type: 'arrowclosed'}, },
  // { id: 'e2', source: '1-c1', target: '2-c4', markerEnd: { type: 'arrowclosed' } },
  { id: 'e1-2-B-E', source: '1-componentB', target: '2-componentE', animated: true },
  { id: 'e1-2-C-F', source: '1-componentC', target: '2-componentF', animated: true },
]; 


const ERDiagram = () => {

  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const onConnect = useCallback((params) =>
      setEdges((eds) => addEdge({ ...params, markerEnd: { type: 'arrowclosed',markerWidth: 30, markerHeight: 30 } }, eds)),
    [setEdges],
  );

  return (
    <div style={{background: "black", width: '100vw', height: '100vh' }}>
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
