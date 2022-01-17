const Sample = () => {
  return (
    <div className='grid gap-10 px-20 py-20 bg-slate-400'>
      <div className='p-10 bg-white shadow-2xl rounded-3xl'>
        <span className='text-2xl font-semibold'>SelectItem</span>
        <div className='flex justify-between my-2'>
          <span className='text-gray-500'>Grey Chair</span>
          <span className='font-semibold'>$19</span>
        </div>
        <div className='flex justify-between'>
          <span className='text-gray-500'>Grey Chair</span>
          <span className='font-semibold'>$19</span>
        </div>
        <div className='flex justify-between pt-2 mt-2 border-t-2 border-dashed'>
          <span>total</span>
          <span className='font-semibold'>$10</span>
        </div>
        <div className='w-1/2 p-3 mx-auto mt-5 text-center text-white bg-blue-500 rounded-xl'>
          Checkout
        </div>
      </div>
      <div className='overflow-hidden bg-white shadow-2xl rounded-3xl'>
        <div className='p-6 bg-blue-500 pb-14'>
          <span className='text-2xl text-white'>Profile</span>
        </div>
        <div className='relative p-6 bg-white rounded-3xl -top-5'>
          <div className='relative flex items-end justify-between -top-16'>
            <div className='flex flex-col items-center'>
              <span className='text-sm text-gray-500'>Orders</span>
              <span className='font-medium'>$340</span>
            </div>
            <div className='w-24 h-24 bg-red-400 rounded-full' />
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
      <div className='p-10 bg-white shadow-2xl rounded-3xl'></div>
      <div className='p-10 bg-white shadow-2xl rounded-3xl'></div>
    </div>
  );
};

export default Sample;
