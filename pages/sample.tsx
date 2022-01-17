const Sample = () => {
  return (
    <div className='grid gap-10 px-5 py-20 bg-slate-400'>
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
      <div className='p-10 bg-white shadow-2xl rounded-xl'></div>
      <div className='p-10 bg-white shadow-2xl rounded-xl'></div>
      <div className='p-10 bg-white shadow-2xl rounded-xl'></div>
    </div>
  );
};

export default Sample;
