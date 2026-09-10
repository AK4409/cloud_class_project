import React from 'react'
import { Link } from 'react-router-dom';


function Contact() {
  return (
    <div className='bg-amber-100'>
      
      <div className='flex flex-row gap-5 text-2xl font-extrabold bg-amber-200 p-1.5'>
        <Link to={"/"}><nav className='text-indigo-500 hover:text-indigo-700'>Home</nav></Link>
        <Link to={"/contact"}><nav className='text-indigo-500 hover:text-indigo-700'>Contact</nav></Link>
      </div>
      <div>
        <form
          action=""
          className="m-4 flex flex-col bg-amber-100"
          method="post"
        >
          <fieldset className="flex flex-col border-2 border-indigo-400 dark:bg-gray-500 rounded-sm">
            <legend className="m-2 text-3xl text-indigo-500 font-bold">Contact Us</legend>
            <label htmlFor="name" className="text-xl ml-1.5">
              Name<span className="text-red-500">*</span>
            </label>
            <div>
              <input
                type="text"
                placeholder="First"
                className="m-2.5 max-w-90 border border-amber-50 bg-white rounded-sm p-2"
                required
              />
              <input
                type="text"
                className="m-2.5 border border-amber-50 bg-white rounded-sm p-2"
                placeholder="middle"
              />
              <input
                type="text"
                className="m-2.5 border border-amber-50 bg-white rounded-sm p-2"
                placeholder="Last"
                required
              />
            </div>
            <label htmlFor="email" className="text-xl ml-1.5">
              Email<span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              placeholder="Email"
              className="m-2.5 max-w-145 border border-amber-50 bg-white rounded-sm p-2"
              required
            />
            <label htmlFor="address" className="text-xl ml-1.5">
              Address<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              placeholder="Street Address Line 1*"
              className="m-2.5 max-w-145 border border-amber-50 bg-white rounded-sm p-2"
              required
            />
            <input
              type="text"
              placeholder="Street Address Line 2 (optional)"
              className="m-2.5 max-w-145 border border-amber-50 bg-white rounded-sm p-2" 
            />
            <label htmlFor="message" className="text-xl ml-1.5">
              Feedback:
            </label>
            <textarea
              name="message"
              className="m-2.5 max-w-145 border border-amber-50 bg-white rounded-sm p-2"
              rows="10"
              cols="30"
              placeholder="Enter Your Feedback Here"
            ></textarea>

            <button className="flex items-center justify-center gap-2 border-2 bg-indigo-500 rounded-sm border-blue-500 text-white text-xl m-2 px-3 py-1 font-bold hover:bg-indigo-600">
              Submit
              <span className="relative flex size-3">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex size-3 rounded-full bg-green-500"></span>
              </span>
            </button>
          </fieldset>
        </form>
      </div>
    </div>
  );
}

export default Contact