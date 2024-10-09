import React from 'react';
import axios from 'axios';

const EdgeForm = () => {
  const [isAdd, setIsAdd] = React.useState(false);
  const [formData, setFormData] = React.useState({
    id: '',
    source: '',
    target: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent the default form submission
    await axios.post('http://localhost:3000/api/edges', formData);

    setFormData({
      id: '',
      source: '',
      target: '',
    });
    setIsAdd(false); // Close the form after submission
  };

  if (isAdd) {
    return (
      <div>
        <form className="max-w-sm mx-auto bg-slate-400 p-10 rounded-2xl" onSubmit={handleSubmit}>
          <div className="mb-5">
            <label htmlFor="id" className="block mb-2 text-sm font-medium text-gray-900">Edge ID:</label>
            <input
              type="text"
              id="id"
              name="id"
              value={formData.id}
              onChange={handleChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="ID"
              required
            />
          </div>
          <div className="mb-5">
            <label htmlFor="source" className="block mb-2 text-sm font-medium text-gray-900">Source:</label>
            <input
              type="text"
              id="source"
              name="source"
              value={formData.source}
              onChange={handleChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              required
            />
          </div>
          <div className="mb-5">
            <label htmlFor="target" className="block mb-2 text-sm font-medium text-gray-900">Target:</label>
            <input
              type="text"
              id="target"
              name="target"
              value={formData.target}
              onChange={handleChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              required
            />
          </div>
          <div className='flex justify-between items-center'>
            <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-3 text-center">Submit</button>
            <button type="button" onClick={() => setIsAdd(false)} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">Close</button>
          </div>
        </form>
      </div>
    );
  } else {
    return (
      <div>
        <button className='bg-blue-500 rounded-md px-4 py-2' onClick={() => setIsAdd(true)}>Add Edge</button>
      </div>
    );
  }
};

export default EdgeForm;