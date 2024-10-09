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
import axios from 'axios';
import { useEffect, useState } from 'react';

const nodeTypes = { collapsibleNode: CustomNode };


const ERDiagram = () => {

  const [nodes, setNodes, onNodesChange] = useNodesState();
  const [edges, setEdges, onEdgesChange] = useEdgesState();

  useEffect(() => {
    axios.get('http://localhost:3000/api/diagram-data')
      .then((response) => {
        const { nodes, edges } = response.data;
        setNodes(nodes);
        setEdges(edges);
      })
      .catch((error) => {
        console.error('Error fetching diagram data:', error);
      });
  }, []);

  const onConnect = useCallback(
    (params) =>
      setEdges((eds) =>
        addEdge(
          {
            ...params,
            markerEnd: { type: 'arrowclosed', markerWidth: 30, markerHeight: 30 },
            style: { stroke: 'green', strokeWidth: 2 },
            type: 'smoothstep',
          },
          eds
        )
      ),
    [setEdges]
  );



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
