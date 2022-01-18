const Sample = () => {
  return (
    <div className='grid min-h-screen gap-10 px-20 py-20 bg-slate-400'>
      <div className='p-10 bg-white shadow-2xl rounded-3xl'>
        <span className='text-2xl font-semibold'>SelectItem</span>
        <ul>
          {[1, 2, 3, 4, 5].map((i) => (
            <li key={i} className='flex justify-between my-2'>
              <span className='text-gray-500'>Grey Chair</span>
              <span className='font-semibold'>$19</span>
            </li>
          ))}
        </ul>
        <ul>
          {['a', 'b', 'c', ''].map((item, index) => (
            <li key={index} className='p-1 bg-yellow-100 empty:hidden'>
              {/* empty style */}
              {item}
            </li>
          ))}
        </ul>
        <div className='flex justify-between pt-2 mt-2 border-t-2 border-dashed'>
          <span>total</span>
          <span className='font-semibold'>$10</span>
        </div>
        <button className='w-1/2 p-3 mx-auto mt-5 text-center text-white bg-blue-500 rounded-xl hover:bg-teal-500 hover:text-black active:bg-yellow-500 focus:text-red-500'>
          Checkout
        </button>
      </div>
      <div className='overflow-hidden bg-white shadow-2xl rounded-3xl group'>
        {/* Container 에 group 지정 */}
        <div className='p-6 bg-blue-500 pb-14'>
          <span className='text-2xl text-white'>Profile</span>
        </div>
        <div className='relative p-6 bg-white rounded-3xl -top-5'>
          <div className='relative flex items-end justify-between -top-16'>
            <div className='flex flex-col items-center'>
              <span className='text-sm text-gray-500'>Orders</span>
              <span className='font-medium'>$340</span>
            </div>
            <div className='w-24 h-24 transition-colors rounded-full bg-zinc-300 group-hover:bg-red-300' />
            {/* group ( Container ) 에 hover 했을때 // group-hover */}
            <div className='flex flex-col items-center'>
              <span className='text-sm text-gray-500'>Spent</span>
              <span className='font-medium'>$2,310</span>
            </div>
          </div>
          <div className='relative flex flex-col items-center -mt-10 -mb-5'>
            <span className='text-lg font-medium'>Tony Molloy</span>
            <span className='text-sm text-gray-500'>미국</span>
          </div>
        </div>
      </div>
      <div className='p-10 bg-white shadow-2xl rounded-3xl '>
        <div className='flex items-center justify-between mb-5'>
          <span>←</span>
          <div className='space-x-3'>
            <span>4.9</span>
            <span className='p-2 rounded-md shadow-lg'>👄</span>
          </div>
        </div>
        <div className='mb-5 h-72 bg-zinc-400' />
        <div className='flex flex-col'>
          <span className='text-xl font-medium'>Swoon Louge</span>
          <span className='text-xs text-gray-500'>Chair</span>
          <div className='flex items-center justify-between mt-3 mb-5'>
            <div className='space-x-2'>
              <button className='w-5 h-5 transition-all bg-yellow-500 rounded-full focus:ring-2 ring-offset-2 ring-yellow-500' />
              <button className='w-5 h-5 transition-all bg-indigo-500 rounded-full focus:ring-2 ring-offset-2 ring-indigo-500' />
              <button className='w-5 h-5 transition-all bg-teal-500 rounded-full focus:ring-2 ring-offset-2 ring-teal-500' />
            </div>
            <div className='flex items-center space-x-5'>
              <button className='flex items-center justify-center w-8 text-xl text-gray-500 bg-blue-200 rounded-lg aspect-square'>
                -
              </button>
              <span>1</span>
              <button className='flex items-center justify-center w-8 text-xl text-gray-500 bg-blue-200 rounded-lg aspect-square'>
                +
              </button>
            </div>
          </div>
          <div className='flex items-center justify-between'>
            <span className='text-2xl font-medium'>$450</span>
            <button className='px-8 py-2 text-xs text-center text-white bg-blue-500 rounded-lg'>
              Add to cart
            </button>
          </div>
        </div>
      </div>
      <form className='flex flex-col p-5 space-y-2 bg-blue-300 focus-within:bg-blue-100'>
        <input
          type='text'
          required
          placeholder='username'
          className='px-2 border-yellow-300 required:border-2 disabled:bg-yellow-600 valid:bg-teal-500'
        />
        <input
          type='password'
          required
          placeholder='password'
          className='px-2 invalid:bg-red-300'
        />
        <input
          type='submit'
          value='login'
          placeholder='username'
          className='bg-white'
        />
      </form>
      <form className='flex flex-col p-5 space-y-2 bg-white'>
        <input
          type='text'
          required
          placeholder='username'
          className='px-2 border border-gray-500 rounded-md outline-none peer'
        />
        <span className='hidden peer-invalid:text-red-500 peer-invalid:block'>
          This input is invalid
        </span>
        <span className='hidden peer-valid:text-teal-500 peer-valid:block'>
          Awesome Username
        </span>
        <span className='hidden peer-hover:text-amber-500 peer-hover:block'>
          Peer Hover
        </span>
        <input
          type='submit'
          value='login'
          placeholder='username'
          className='bg-white border border-gray-500 rounded-lg'
        />
      </form>
    </div>
  );
};

export default Sample;
