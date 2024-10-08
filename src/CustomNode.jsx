import React, { useState } from 'react';
import { Handle, Position } from '@xyflow/react';
import { AiOutlineDown } from 'react-icons/ai';
import { FiTable } from "react-icons/fi";

const CustomNode = ({ data,id }) => {
  const [collapsed, setCollapsed] = useState(false);
  const [subCollapsed, setSubCollapsed] = useState(false);

  const toggleCollapse = () => setCollapsed(!collapsed);
  const toggleSubCollapse = () => setSubCollapsed(!subCollapsed);

  return (
    <div className=" border  border-blue-300 rounded bg-[#0F172A] shadow-md">
      <div className="flex justify-between gap-4 bg-[#8EB7FF] p-2   font-bold items-center">
        <h3 className='flex items-center text-white gap-1 justify-center text-[3vh]'>
          <FiTable/>
          {data.label}
          </h3>
          <Handle type="source" id={`${id}`} position={Position.Bottom} className='bg-[#8EB7FF] hover:scale-[2.8] transition-transform duration-200' />
          <Handle type="target" id={`${id}`} position={Position.Top} className='bg-[#8EB7FF] hover:scale-[2.8] transition-transform duration-200' />
        <AiOutlineDown className="cursor-pointer font-bold text-white" onClick={toggleCollapse} />
      </div>
      
      {!collapsed && (
        <div className=" bg-[#0F172A] ">
          <div className="flex justify-between gap-3 font-bold items-center py-2 pr-4 pl-1  text-white bg-[#05091A]">
            <h4>{data.subheading1}</h4>
            <AiOutlineDown className="cursor-pointer" onClick={toggleSubCollapse} />
          </div>
          {!subCollapsed && (
            <ul className='p-1'>
              {data.components1.map((component, index) => (
                <li key={index} >
                  <div className='text-white p-1 '>
                    {component.name}
                    <Handle
                      type="source"
                      position={Position.Right}
                      id={`${id}-${component.id}`}
                      className='0F172A hover:scale-[2.8] transition-transform duration-200'
                      style={{background: 'red',  top: 90 + index * 30 }}
                    />
                    <Handle
                      type="target"
                      position={Position.Left}
                      id={`${id}-${component.id}`}

                      className='0F172A  hover:scale-[2.8] transition-transform  duration-200'
                      style={{background: 'red',  top: 90 + index * 30 }}
                    />
                  </div>
                </li>
              ))}
            </ul>
          )}
          <div className="flex justify-between gap-3 font-bold items-center py-2 pr-4 pl-1  text-white bg-[#05091A]">
            <h4>
              {data.subheading2}
            </h4>
            <AiOutlineDown className="cursor-pointer" onClick={toggleSubCollapse} />
          </div>
          {!subCollapsed && (
            <ul className='p-1'>
              {data.components2.map((component, index) => (
                <li className='text-white p-1 ' key={index}>
                  {component.name}
                  <Handle
                    type="source"
                    position={Position.Right}
                    id={`${id}-${component.id}`}
                    
                    style={{ background: 'orange', top: 145 + index * 30 }}
                     className='0F172A  hover:scale-[2.8] transition-transform  duration-200'
                  />
                  <Handle
                    type="target"
                    position={Position.Left}
                    id={`${id}-${component.id}`}

                    style={{ background: 'orange', top: 145 + index * 30 }}
                     className='0F172A  hover:scale-[2.8] transition-transform  duration-200'
                  />
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
};

export default CustomNode;