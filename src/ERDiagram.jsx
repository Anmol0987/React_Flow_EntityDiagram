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

const nodeTypes = { collapsibleNode: CustomNode };

const initialNodes = [
  {
    id: '1',
    type: 'collapsibleNode',
    data: {
      label: 'Node 1',
      subheading1: 'Subheading 1.1',
      components1: ['Component A', 'Component B'],
      subheading2: 'Subheading 1.2',
      components2: ['Component C'],
    },
    background: 'lightblue',
    position: { x: 100, y: 100 },
  },
  {
    id: '2',
    type: 'collapsibleNode',
    data: {
      label: 'Node 2',
      subheading1: 'Subheading 2.1',
      components1: ['Component D'],
      subheading2: 'Subheading 2.2',
      components2: ['Component E', 'Component F'],
    },
    position: { x: 400, y: 100 },
  },
  {
    id: '3',
    type: 'collapsibleNode',
    data: {
      label: 'Node 3',
      subheading1: 'Subheading 3.1',
      components1: ['Component G'],
      subheading2: 'Subheading 3.2',
      components2: ['Component H', 'Component I'],
    },
    position: { x: 100, y: 300 },
  },
  {
    id: '4',
    type: 'collapsibleNode',
    data: {
      label: 'Node 4',
      subheading1: 'Subheading 4.1',
      components1: ['Component J'],
      subheading2: 'Subheading 4.2',
      components2: ['Component K'],
    },
    position: { x: 400, y: 300 },
  },
];

const initialEdges = [
  { id: 'e1-2', source: '1', target: '2', type: 'smoothstep',color:"white", animated: true },
  { id: 'e1-3', source: '1', target: '3', type: 'smoothstep', animated: true },
  { id: 'e2-4', source: '2', target: '4', type: 'smoothstep', animated: true },
];

const ERDiagram = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    [setEdges]
  );

  return (
    <div style={{background: "yellow", width: '100vw', height: '100vh' }}>
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
