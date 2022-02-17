import type { NextPage } from 'next';

const Create: NextPage = () => {
  return (
    <div className='px-4 py-10 space-y-5'>
      <div>
        <label
          htmlFor='name'
          className='block text-sm font-medium text-gray-700 cursor-pointer select-none'
        >
          Name
        </label>
        <div className='relative flex items-center mt-2 rounded-md shadow-sm'>
          <input
            id='name'
            type='text'
            className='flex w-full px-4 py-2 placeholder-gray-400 border border-gray-300 rounded-md shadow-sm appearance-none focus:outline-none focus:ring-orange-500 focus:border-orange-500'
            autoComplete='off'
          />
        </div>
      </div>
      <div>
        <label
          htmlFor='price'
          className='block text-sm font-medium text-gray-700 cursor-pointer select-none'
        >
          Price
        </label>
        <div className='relative flex items-center mt-2 rounded-md shadow-sm'>
          <div className='absolute left-0 flex items-center justify-center pl-3 pointer-events-none'>
            <span className='text-sm text-gray-500'>$</span>
          </div>
          <input
            id='price'
            type='text'
            placeholder='0.00'
            className='flex w-full py-2 placeholder-gray-400 border border-gray-300 rounded-md shadow-sm appearance-none pr-14 pl-7 focus:outline-none focus:ring-orange-500 focus:border-orange-500'
          />
          <div className='absolute right-0 flex items-center pr-3 pointer-events-none'>
            <span className='text-gray-400'>USD</span>
          </div>
        </div>
      </div>
      <div>
        <label
          htmlFor='description'
          className='text-sm font-medium text-gray-700 cursor-pointer select-none'
        >
          Description
        </label>
        <textarea
          rows={4}
          id='description'
          className='w-full mt-2 border-gray-300 rounded-md shadow-sm focus:ring-1 focus:ring-orange-500 focus:border-orange-500'
        />
      </div>
      <button
        type='button'
        className='w-full px-4 py-2 mt-4 text-sm font-medium text-white transition-all bg-orange-500 border border-transparent rounded-md shadow-sm hover:bg-orange-600 focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 focus:outline-none'
      >
        Go Live
      </button>
    </div>
  );
};

export default Create;
