import React from 'react';
import ReactFlow from 'react-flow-renderer';

// Define the nodes data
const nodes = [
  {
    id: 'Products',
    position: { x: 250, y: 250 },
    data: {
      label: 'Products',
      items: [
        { name: 'ProductID' },
        { name: 'ProductName' },
        { name: 'ItemDescription' },
        { name: 'WholesalePrice' },
        { name: 'ProductPhoto'}
      ],
      inheritedItems: [
        { name: 'SupplierID' },
        { name: 'CategoryID' }
      ]
    },
    type: 'default'
  },
  {
    id: 'Suppliers',
    position: { x: 500, y: 0 },
    data: {
      label: 'Suppliers',
      items: [
        { name: 'SupplierID',  },
        { name: 'CompanyName',  },
        { name: 'ContactName',  },
        { name: 'Address',  },
        { name: 'ShippingDistance',  },
        { name: 'Logo',  }
      ],
      inheritedItems: []
    },
    type: 'default'
  },
  {
    id: 'Categories',
    position: { x: 0, y: 30 },
    data: {
      label: 'Categories',
      items: [
        { name: 'CategoryID', iskey: true, figure: 'Decision', color: 'purple' },
        { name: 'CategoryName', iskey: false, figure: 'Hexagon', color: 'blue' },
        { name: 'Description', iskey: false, figure: 'Hexagon', color: 'blue' },
        { name: 'Icon', iskey: false, figure: 'TriangleUp', color: 'red' }
      ],
      inheritedItems: [{ name: 'SupplierID', iskey: false, figure: 'Decision', color: 'purple' }]
    },
    type: 'default'
  },
  {
    id: 'Order Details',
    position: { x: 600, y: 350 },
    data: {
      label: 'Order Details',
      items: [
        { name: 'OrderID', iskey: true, figure: 'Decision', color: 'purple' },
        { name: 'UnitPrice', iskey: false, figure: 'Circle', color: 'green' },
        { name: 'Quantity', iskey: false, figure: 'Circle', color: 'green' },
        { name: 'Discount', iskey: false, figure: 'Circle', color: 'green' }
      ],
      inheritedItems: [{ name: 'ProductID', iskey: false, figure: 'Decision', color: 'purple' }]
    },
    type: 'default'
  }
];

// Define edges (relationships between entities)
const edges = [
  { id: 'e1', source: 'Products', target: 'Suppliers', label: 'SupplierID' },
  { id: 'e2', source: 'Products', target: 'Categories', label: 'CategoryID' },
  { id: 'e3', source: 'Order Details', target: 'Products', label: 'ProductID' }
];

// EntityDiagram component
const EntityDiagram = () => {
  return (
    <div style={{ height: '500px', width: '100%' }}>
      <ReactFlow nodes={nodes} edges={edges} />
    </div>
  );
};

export default EntityDiagram;
