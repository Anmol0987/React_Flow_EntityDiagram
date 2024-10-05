// import React, { useCallback } from 'react';
// import {
//   ReactFlow,
//   MiniMap,
//   Controls,
//   Background,
//   useNodesState,
//   useEdgesState,
//   addEdge,
// } from '@xyflow/react';

// import '@xyflow/react/dist/style.css';

// const initialNodes = [
//   {
//     id: 'Products', // key becomes id
//     position: { x: 250, y: 250 }, // location becomes position
//     data: {
//       label: 'Products',
//       items: [
//         { name: 'ProductID', iskey: true, figure: 'Decision', color: 'purple' },
//         { name: 'ProductName', iskey: false, figure: 'Hexagon', color: 'blue' },
//         { name: 'ItemDescription', iskey: false, figure: 'Hexagon', color: 'yellow' },
//         { name: 'WholesalePrice', iskey: false, figure: 'Circle', color: 'green' },
//         { name: 'ProductPhoto', iskey: false, figure: 'TriangleUp', color: 'red' }
//       ],
//       inheritedItems: [
//         { name: 'SupplierID', iskey: false, figure: 'Decision', color: 'purple' },
//         { name: 'CategoryID', iskey: false, figure: 'Decision', color: 'purple' }
//       ]
//     },

//     type: 'default'
//   },
//   {
//     id: 'Suppliers',
//     position: { x: 500, y: 0 },
//     data: {
//       label: 'Suppliers',
//       items: [
//         { name: 'SupplierID', iskey: true, figure: 'Decision', color: 'purple' },
//         { name: 'CompanyName', iskey: false, figure: 'Hexagon', color: 'blue' },
//         { name: 'ContactName', iskey: false, figure: 'Hexagon', color: 'blue' },
//         { name: 'Address', iskey: false, figure: 'Hexagon', color: 'blue' },
//         { name: 'ShippingDistance', iskey: false, figure: 'Circle', color: 'green' },
//         { name: 'Logo', iskey: false, figure: 'TriangleUp', color: 'red' }
//       ],
//       inheritedItems: []
//     },
//     type: 'default'
//   },
//   {
//     id: 'Categories',
//     position: { x: 0, y: 30 },
//     data: {
//       label: 'Categories',
//       items: [
//         { name: 'CategoryID', iskey: true, figure: 'Decision', color: 'purple' },
//         { name: 'CategoryName', iskey: false, figure: 'Hexagon', color: 'blue' },
//         { name: 'Description', iskey: false, figure: 'Hexagon', color: 'blue' },
//         { name: 'Icon', iskey: false, figure: 'TriangleUp', color: 'red' }
//       ],
//       inheritedItems: [{ name: 'SupplierID', iskey: false, figure: 'Decision', color: 'purple' }]
//     },
//     type: 'default'
//   },
//   {
//     id: 'Order Details',
//     position: { x: 600, y: 350 },
//     data: {
//       label: 'Order Details',
//       items: [
//         { name: 'OrderID', iskey: true, figure: 'Decision', color: 'purple' },
//         { name: 'UnitPrice', iskey: false, figure: 'Circle', color: 'green' },
//         { name: 'Quantity', iskey: false, figure: 'Circle', color: 'green' },
//         { name: 'Discount', iskey: false, figure: 'Circle', color: 'green' }
//       ],
//       inheritedItems: [{ name: 'ProductID', iskey: false, figure: 'Decision', color: 'purple' }]
//     },
//     type: 'default'
//   }
// ]
// const initialEdges = [
//   { id: 'e1', source: 'Products', target: 'Suppliers',label:"to" ,type: 'smoothstep' },
//   { id: 'e2', source: 'Products', target: 'Categories' },
//   { id: 'e3', source: 'Order Details', target: 'Products' },
//   { id: 'e4', source: 'Categories', target: 'Suppliers' },
// ];

// export default function App() {
//   const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
//   const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

//   const onConnect = useCallback(
//     (params) => setEdges((eds) => addEdge(params, eds)),
//     [setEdges],
//   );

//   return (
//     <div style={{ background: "blue", width: '100vw', height: '100vh' }}>
//       <ReactFlow
//         nodes={nodes}
//         edges={edges}
//         onNodesChange={onNodesChange}
//         onEdgesChange={onEdgesChange}
//         onConnect={onConnect}
//       >
//         <Controls />
//         <MiniMap />
//         <Background variant="dots" gap={19} size={1.5} />
//       </ReactFlow>
//     </div>
//   );
// }


import React from 'react';
import ERDiagram from './ERDiagram';

function App() {
  return (
    <div >
      <h1>Entity Relationship Diagram</h1>
      <ERDiagram />
    </div>
  //   <h1 className="text-3xl font-bold underline">
  //   Hello world!
  // </h1>
  );
}

export default App;
