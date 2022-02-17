import type { NextPage } from 'next';

const Live: NextPage = () => {
  return (
    <div className='py-10 space-y-4 divide-y-2'>
      {[1, 2, 3, 4, 5].map((_, i) => (
        <div key={i} className='px-4 pt-4 '>
          <div className='w-full rounded-md shadow-sm bg-slate-300 aspect-video' />
          <b className='mt-2 text-lg font-medium text-gray-700'>
            Let&apos;s try potatos
          </b>
        </div>
      ))}
      <button
        type='button'
        className='fixed p-3 text-white transition-all bg-orange-400 border-transparent rounded-full shadow-xl cursor-pointer bottom-5 right-5 hover:bg-orange-500'
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='w-6 h-6'
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='2'
            d='M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z'
          />
        </svg>
      </button>
    </div>
  );
};

export default Live;
