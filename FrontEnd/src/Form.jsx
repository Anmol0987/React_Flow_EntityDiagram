import React from 'react'
import axios from 'axios'
import { useState } from 'react'

const Form = () => {
  const [isAdd, setIsAdd] = useState(false)
 const [nodeForm, setNodeForm] = useState({
  id: '',
  lable: '',
  ComponentName: ''
 })

 const handleChange = (e) => {
  const { name, value } = e.target;
  setNodeForm((prevData) => ({
    ...prevData,
    [name]: value,
  }));
};

  const handelSubmit = (e) => {
    e.preventDefault()
    alert('Node Added')
    axios.post('http://localhost:3000/api/diagram-data/node',nodeForm)
      .then((response) => {
        console.log(response);
      }, (error) => {
        console.log(error);
      }
      )
      setNodeForm({
        id: '',
        lable: '',
        ComponentName: ''
      })
      setIsAdd(false)
  }

  if (isAdd) {
    return (
      <div className=' '>
        <form onSubmit={handelSubmit} class="max-w-sm mx-auto bg-slate-400 p-10 rounded-2xl">
        <div class="mb-5">
            <label for="name" class="block mb-2 text-sm font-medium text-gray-900 ">Node Id</label>
            <input type="text" onChange={handleChange} value={nodeForm.id} id="id" name='id' class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="Node 1" />
          </div>
          <div class="mb-5">
            <label for="name" class="block mb-2 text-sm font-medium text-gray-900 ">Node lable</label>
            <input type="text" onChange={handleChange} value={nodeForm.lable} id="lable" name='lable' class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="Node 1" />
          </div>
          <div class="mb-5">
            <label for="Component" class="block mb-2 text-sm font-medium text-gray-900">Component</label>
            <input type="text" onChange={handleChange} value={nodeForm.ComponentName} id="ComponentName" name='ComponentName' class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required />
          </div>
          <div className=' flex justify-between items-center'>
            <button type="submit" class="text-white bg-blue-700   hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-3 text-center ">Submit</button>
            <button onClick={() => setIsAdd(false)} class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">close</button>
          </div>
        </form>

      </div>
    )
  }
  else {
    return (
      <div>
        <button className=' bg-blue-500 rounded-md px-4 py-2 ' onClick={() => setIsAdd(true)}>Add Node</button>
      </div>
    )
  }


}

export default Form