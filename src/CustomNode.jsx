import React, { useState } from 'react';
import { Handle, Position } from '@xyflow/react';
import { AiOutlineDown } from 'react-icons/ai';

const CustomNode = ({ data }) => {
  const [collapsed, setCollapsed] = useState(false);
  const [subCollapsed, setSubCollapsed] = useState(false);

  const toggleCollapse = () => setCollapsed(!collapsed);
  const toggleSubCollapse = () => setSubCollapsed(!subCollapsed);

  return (
    <div className="p-4 border border-blue-300 rounded bg-white shadow-md">
      <div className="flex justify-between font-bold items-center">
        <h3 className='text-2xl'>{data.label}</h3>
        <AiOutlineDown className="cursor-pointer" onClick={toggleCollapse} />
      </div>
      {!collapsed && (
        <div className="mt-2">
          <div className="flex justify-between font-bold items-center">
            <h4>{data.subheading1}</h4>
            <AiOutlineDown className="cursor-pointer" onClick={toggleSubCollapse} />
          </div>
          {!subCollapsed && (
            <ul>
              {data.components1.map((component, index) => (
                <li key={index}>{component}</li>
              ))}
            </ul>
          )}

          <div className="flex justify-between font-bold  items-center mt-2">
            <h4>{data.subheading2}</h4>
            <AiOutlineDown className="cursor-pointer" onClick={toggleSubCollapse} />
          </div>
          {!subCollapsed && (
            <ul>
              {data.components2.map((component, index) => (
                <li key={index}>{component}</li>
              ))}
            </ul>
          )}
        </div>
      )}

      <Handle type="source" position={Position.Bottom} />
      <Handle type="target" position={Position.Top} />
    </div>
  );
};

export default CustomNode;
