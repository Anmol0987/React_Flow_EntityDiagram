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
import './App.css'

const nodeTypes = { collapsibleNode: CustomNode };


const ERDiagram = () => {

  const [nodes, setNodes, onNodesChange] = useNodesState();
  const [edges, setEdges, onEdgesChange] = useEdgesState();

  const [showPopup, setShowPopup] = useState(false);
  const [selectedEdge, setSelectedEdge] = useState(null);

  const onEdgeClick = (event, edge) => {
    setSelectedEdge(edge); 
    setShowPopup(true); 
  };

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
        // elements={elements}
        onEdgeClick={onEdgeClick}
        fitView
      >
        <MiniMap />
        <Controls />
        <Background />
      </ReactFlow>

      {showPopup && (
        <div className="popup-overlay">
          <div className="popup-content">
            <h3>Edge Details</h3>
            <p><strong>ID:</strong> {selectedEdge?.id}</p>
            <p><strong>Source:</strong> {selectedEdge?.source}</p>
            <p><strong>Target:</strong> {selectedEdge?.target}</p>
            <button className='bg-blue-500 rounded-md px-4 py-2' onClick={() => setShowPopup(false)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ERDiagram;
