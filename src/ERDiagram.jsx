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
      components1: [{ name: 'Component A', id: "c1" }, { name: 'Component B', id: "c2" }],
      subheading2: 'Subheading 1.2',
      components2: [{name:'Component C',id:"c3"}],
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
      components1: [{name:'Component D',id:"c4"}],
      subheading2: 'Subheading 2.2',
      components2: [{name:'Component E',id:"c5"}, {name:'Component F',id:"c6"}],
    },
    position: { x: 100, y: 400 },
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
  { id: 'e2', source: `${data.components1}.c1`, target: `${data.components1}.c4` ,markerEnd: {type: 'arrowclosed'}, },
];


const ERDiagram = () => {

  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const onConnect = useCallback((params) =>
      setEdges((eds) => addEdge({ ...params, markerEnd: { type: 'arrowclosed',markerWidth: 30, markerHeight: 30 } }, eds)),
    [setEdges],
  );

  return (
    <div style={{background: "#111827", width: '100vw', height: '100vh' }}>
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
