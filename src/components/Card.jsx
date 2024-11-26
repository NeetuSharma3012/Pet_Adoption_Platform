import React from 'react'

const Card = ({ title,description, imageUrl }) => {
  return (

    <div className="bg-slate-100 p-5 rounded-lg border-2 border-lime-200 shadow-md space-y-5 mx-5">
    {/* Image Section */}
    {imageUrl && (
      <img
        src={imageUrl}
        alt={title}
        className="w-full h-48 object-cover rounded-md"
      />
    )}
    
    {/* Content Section */}
    <div>
      <h1 className="text-3xl font-bold">{title}</h1>
      <p className="text-gray-700">{description}</p>
    </div>

    {/* Button Section */}
    <div className="flex gap-5">
      <button
        className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-xl bg-white border border-gray-200 text-black hover:bg-gray-100 
        focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:hover:bg-white/10 dark:text-white dark:hover:text-white dark:focus:text-white"
        aria-label="Primary Action"
      >
        Adopt Now
      </button>

      <button
          type="button"
          className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-xl border border-transparent bg-lime-400 text-black hover:bg-lime-500 
          focus:outline-none focus:bg-lime-500 transition disabled:opacity-50 disabled:pointer-events-none"
          aria-label="Primary Action"
        >
          View Details
        </button>
      
    </div>
    
  </div>
    // <div className='bg-white-500 p-5 rounded-lg border space-y-5'>
    //   <h1 className='text-3xl font-bold'>{title}</h1>
    //   <p>{description}</p>

    //   <div className='flex gap-5'>
    //     <button className='bg-black px-2 py-1 rounded-md text-white'>primary button</button>
    //     <button className=' px-2 py-1 rounded-md '>second button</button>
    //   </div>
    // </div>
  );
};

export default Card;