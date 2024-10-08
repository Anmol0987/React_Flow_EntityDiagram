import React from 'react'

const Form = () => {
const [isAdd, setIsAdd] = React.useState(false)

if(isAdd){
  return (
    <div className=' '>
        

<form class="max-w-sm mx-auto bg-slate-400 p-10">
  <div class="mb-5">
    <label for="name" class="block mb-2 text-sm font-medium text-gray-900 ">Node Name</label>
    <input type="text" id="name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="Node 1" />
  </div>
  <div class="mb-5">
    <label for="Component" class="block mb-2 text-sm font-medium text-gray-900">Component</label>
    <input type="text" id="Component" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required />
  </div>
  <div className=' flex justify-between items-center'>
  <button type="submit" onClick={()=>setIsAdd(false)}  class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center ">Submit</button>
  <button type="submit" onClick={()=>setIsAdd(false)} class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">close</button>
  </div>
</form>

    </div>
  )}
  else {
    return (
      <div>
        <button className='p-1 bg-blue-500 rounded-md  ' onClick={() => setIsAdd(true)}>Add Node</button>
      </div>
    )
  }


}

export default Form