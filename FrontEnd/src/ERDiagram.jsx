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
      label: 'Authentication Service',
      components: [
        { id: 'C1', name: 'User Login' },
        { id: 'C2', name: 'OAuth Handler' },
        { id: 'C3', name: 'JWT Token Generator' },
        { id: 'C4', name: 'Session Management' }
      ],
    },
    position: { x: 100, y: 100 },
  },
  {
    id: '2',
    type: 'collapsibleNode',
    data: {
      label: 'User Management Service',
      components: [
        { id: 'C5', name: 'User Profile' },
        { id: 'C6', name: 'RBAC (Role-Based Access Control)' },
        { id: 'C7', name: 'User Preferences' }
      ],
    },
    position: { x: 400, y: 100 },
  },
  {
    id: '3',
    type: 'collapsibleNode',
    data: {
      label: 'Notification Service',
      components: [
        { id: 'C8', name: 'Email Notifications' },
        { id: 'C9', name: 'SMS Alerts' },
        { id: 'C10', name: 'Push Notifications' }
      ],
    },
    position: { x: 300, y: 400 },
  },
  {
    id: '4',
    type: 'collapsibleNode',
    data: {
      label: 'Payment Gateway',
      components: [
        { id: 'C11', name: 'Credit Card Processing' },
        { id: 'C12', name: 'Payment Authorization' },
        { id: 'C13', name: 'Refund Handling' }
      ],
    },
    position: { x: 500, y: 300 },
  },
  {
    id: '5',
    type: 'collapsibleNode',
    data: {
      label: 'Order Management',
      components: [
        { id: 'C14', name: 'Order Creation' },
        { id: 'C15', name: 'Order Validation' },
        { id: 'C16', name: 'Order Tracking' }
      ],
    },
    position: { x: 700, y: 400 },
  },
  {
    id: '6',
    type: 'collapsibleNode',
    data: {
      label: 'Inventory Service',
      components: [
        { id: 'C17', name: 'Stock Management' },
        { id: 'C18', name: 'Warehouse Management' },
        { id: 'C19', name: 'Reorder Alerts' }
      ],
    },
    position: { x: 200, y: 500 },
  },
  {
    id: '7',
    type: 'collapsibleNode',
    data: {
      label: 'Shipping Service',
      components: [
        { id: 'C20', name: 'Shipping Labels' },
        { id: 'C21', name: 'Carrier Selection' },
        { id: 'C22', name: 'Tracking Updates' }
      ],
    },
    position: { x: 600, y: 500 },
  },
  {
    id: '8',
    type: 'collapsibleNode',
    data: {
      label: 'Analytics Service',
      components: [
        { id: 'C23', name: 'User Behavior Tracking' },
        { id: 'C24', name: 'Data Visualization' },
        { id: 'C25', name: 'Sales Analytics' }
      ],
    },
    position: { x: 300, y: 600 },
  },
  {
    id: '9',
    type: 'collapsibleNode',
    data: {
      label: 'Recommendation Engine',
      components: [
        { id: 'C26', name: 'Product Recommendations' },
        { id: 'C27', name: 'Personalized Offers' }
      ],
    },
    position: { x: 500, y: 600 },
  },
  {
    id: '10',
    type: 'collapsibleNode',
    data: {
      label: 'Customer Support Service',
      components: [
        { id: 'C28', name: 'Live Chat' },
        { id: 'C29', name: 'Ticket Management' },
        { id: 'C30', name: 'Customer Feedback' }
      ],
    },
    position: { x: 700, y: 600 },
  },
  {
    id: '11',
    type: 'collapsibleNode',
    data: {
      label: 'Logging Service',
      components: [
        { id: 'C31', name: 'Error Logging' },
        { id: 'C32', name: 'Access Logs' },
        { id: 'C33', name: 'Performance Metrics' }
      ],
    },
    position: { x: 100, y: 700 },
  }
];

const initialEdges = [
  { 
    id: 'e1', 
    source: '1', 
    target: '2', 
    markerEnd: { type: 'arrowclosed' },
    type: 'smoothstep',
    style: { stroke: 'gray', strokeWidth: 2 }
  },
  
  { 
    id: 'e2', 
    source: '2', 
    target: '3', 
    markerEnd: { type: 'arrowclosed' },
    type: 'smoothstep',
    style: { stroke: 'gray', strokeWidth: 2 }
  },
  { 
    id: 'e3', 
    source: '3', 
    target: '4', 
    markerEnd: { type: 'arrowclosed' },
    type: 'smoothstep',
    style: { stroke: 'gray', strokeWidth: 2 }
  },
  { 
    id: 'e4', 
    source: '4', 
    target: '5', 
    markerEnd: { type: 'arrowclosed' },
    type: 'smoothstep',
    style: { stroke: 'gray', strokeWidth: 2 }
  },
  { 
    id: 'e5', 
    source: '5', 
    target: '6', 
    markerEnd: { type: 'arrowclosed' },
    type: 'smoothstep',
    style: { stroke: 'gray', strokeWidth: 2 }
  },
  { 
    id: 'e6', 
    source: '6', 
    target: '7', 
    markerEnd: { type: 'arrowclosed' },
    type: 'smoothstep',
    style: { stroke: 'gray', strokeWidth: 2 }
  },
  { 
    id: 'e7', 
    source: '7', 
    target: '8', 
    markerEnd: { type: 'arrowclosed' },
    type: 'smoothstep',
    style: { stroke: 'gray', strokeWidth: 2 }
  },
  { 
    id: 'e8', 
    source: '8', 
    target: '9', 
    markerEnd: { type: 'arrowclosed' },
    type: 'smoothstep',
    style: { stroke: 'gray', strokeWidth: 2 }
  },
  { 
    id: 'e9', 
    source: '9', 
    target: '10', 
    markerEnd: { type: 'arrowclosed' },
    type: 'smoothstep',
    style: { stroke: 'gray', strokeWidth: 2 }
  },
  { 
    id: 'e10', 
    source: '10', 
    target: '11', 
    markerEnd: { type: 'arrowclosed' },
    type: 'smoothstep',
    style: { stroke: 'gray', strokeWidth: 2 }
  }
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
