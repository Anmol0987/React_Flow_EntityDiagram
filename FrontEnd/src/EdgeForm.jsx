import React from 'react'

const EdgeForm = () => {
const [isAdd, setIsAdd] = React.useState(false)

if(isAdd){
  return (
    <div className=' '>
<form class="max-w-sm mx-auto bg-slate-400 p-10 rounded-2xl">
  <div class="mb-5">
    <label for="name" class="block mb-2 text-sm font-medium text-gray-900 ">Edge ID:</label>
    <input type="text" id="id" name='id' class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="ID" />
  </div>
  <div class="mb-5">
    <label for="Component" class="block mb-2 text-sm font-medium text-gray-900">Source:</label>
    <input type="text" id="Source" name='Source' class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required />
  </div>
  <div class="mb-5">
    <label for="Component" class="block mb-2 text-sm font-medium text-gray-900">Target:</label>
    <input type="text" id="Target"  name='Target' class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required />
  </div>
  <div className=' flex justify-between items-center'>
  <button type="submit" onClick={()=>setIsAdd(false)}  class="text-white bg-blue-700   hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-3 text-center ">Submit</button>
  <button type="submit" onClick={()=>setIsAdd(false)} class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">close</button>
  </div>
</form>

    </div>
  )}
  else {
    return (
      <div>
        <button className=' bg-blue-500 rounded-md px-4 py-2 ' onClick={() => setIsAdd(true)}>Add Edge</button>
      </div>
    )
  }


}

export default EdgeForm