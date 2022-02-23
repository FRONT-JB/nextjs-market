import classNames from 'classnames';

interface MessageProps {
  message: string;
  reversed?: boolean;
  avatarUrl?: string;
}

const Message = ({ message, avatarUrl, reversed }: MessageProps) => {
  return (
    <div
      className={classNames('flex  items-start', {
        'flex-row-reverse space-x-reverse': reversed,
        'space-x-2': !reversed,
      })}
    >
      <div className='w-8 h-8 rounded-full bg-slate-400' />
      <div className='w-1/2 p-2 text-sm text-gray-700 border border-gray-300 rounded-md'>
        <p>{message}</p>
      </div>
    </div>
  );
};

export default Message;
