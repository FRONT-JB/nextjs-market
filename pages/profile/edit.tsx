import type { NextPage } from 'next';

const EditProfile: NextPage = () => {
  return (
    <div className='px-4 py-10 space-y-4'>
      <div className='flex items-center space-x-3'>
        <div className='rounded-full w-14 h-14 bg-slate-300' />
        <label
          htmlFor='photo'
          className='px-3 py-2 text-sm font-medium text-gray-700 border border-gray-300 rounded-md shadow-sm cursor-pointer focus:ring-2 focus:ring-offset-2 focus:ring-orange-500'
        >
          Change Photo
          <input id='photo' type='file' className='hidden' accept='image/*' />
        </label>
      </div>
      <div className='space-y-1'>
        <label htmlFor='email' className='text-sm font-medium text-gray-700'>
          Email address
        </label>
        <input
          type='email'
          id='email'
          className='w-full px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md shadow-sm appearance-none focus:outline-none focus:ring-orange-500 focus:border-orange-500'
          autoComplete='off'
          required
        />
      </div>
      <div className='space-y-1'>
        <label htmlFor='phone' className='text-sm font-medium text-gray-700'>
          Phone Number
        </label>
        <div className='flex rounded-md shadow-sm'>
          <span className='flex items-center justify-center px-3 text-sm text-gray-500 border border-r-0 border-gray-300 cursor-default select-none rounded-l-md bg-gray-50'>
            +82
          </span>
          <input
            type='number'
            id='phone'
            className='w-full px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md rounded-l-none shadow-sm appearance-none focus:outline-none focus:ring-orange-500 focus:border-orange-500'
            required
          />
        </div>
      </div>
      <button
        className='w-full px-4 py-2 mt-3 text-sm font-medium text-white transition-all bg-orange-500 border border-transparent rounded-md shadow-sm hover:bg-orange-600 focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 focus:outline-none'
        type='button'
      >
        Update Profile
      </button>
    </div>
  );
};

export default EditProfile;
