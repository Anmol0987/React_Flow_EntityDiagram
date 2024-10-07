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
                <li key={index}>
                  <div className='bg-red-500'>
                    {component}
                    <Handle
                      type="source"
                      position={Position.Right}
                      id={`${component}`}
                      style={{ background: 'red', top: 90 + index * 30 }}
                    />
                    <Handle
                      type="target"
                      position={Position.Left}
                      id={`${component}`}
                      style={{ background: 'red', top: 90 + index * 30 }}
                    />
                  </div>
                </li>
              ))}
            </ul>
          )}
          <div className="flex justify-between font-bold  items-center mt-2">
            <h4>
              {data.subheading2}
            </h4>
            <AiOutlineDown className="cursor-pointer" onClick={toggleSubCollapse} />
          </div>
          {!subCollapsed && (
            <ul>
              {data.components2.map((component, index) => (
                <li className='bg-orange-400' key={index}>
                  {component}
                  <Handle
                    type="source"
                    position={Position.Right}
                    id={`${component}`}
                    style={{ background: 'orange', top: 145 + index * 30 }}
                  />
                  <Handle
                    type="target"
                    position={Position.Left}
                    id={`${component}`}
                    style={{ background: 'orange', top: 145 + index * 30 }}
                  />
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
      <Handle type="source" id={`${data.label}-${data.label}`} position={Position.Bottom} />
      <Handle type="target" id={`${data.label}-${data.label}`} position={Position.Top} />
    </div>
  );
};

export default CustomNode;
