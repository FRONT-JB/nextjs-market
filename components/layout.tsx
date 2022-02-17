import { ReactNode } from 'react';
import classNames from 'classnames';
import Link from 'next/link';
import { useRouter } from 'next/router';

interface Props {
  title?: string;
  canGoBack?: boolean;
  hasTabBar?: boolean;
  children: ReactNode;
}

const Layout = ({ title, canGoBack, hasTabBar, children }: Props) => {
  const router = useRouter();
  const handleGoback = () => {
    router.back();
  };
  return (
    <div>
      <div
        className={classNames(
          'fixed top-0 flex items-center  w-full px-4 max-w-xl py-3 text-lg font-medium text-gray-700 bg-white border-b',
          { 'justify-center': !canGoBack },
        )}
      >
        {canGoBack ? (
          <button type='button' onClick={handleGoback}>
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
                d='M15 19l-7-7 7-7'
              />
            </svg>
          </button>
        ) : null}
        {title ? <span>{title}</span> : null}
      </div>
      <div className={classNames('pt-16', { 'pb-20': hasTabBar })}>
        {children}
      </div>
      {hasTabBar ? (
        <nav className='fixed bottom-0 flex w-full max-w-xl px-10 pt-3 pb-5 text-xs text-gray-700 bg-white border-t'>
          <ul className='flex w-full'>
            <li className='w-1/5'>
              <Link href='/'>
                <a className='flex flex-col items-center space-y-2'>
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
                      strokeWidth={2}
                      d='M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6'
                    />
                  </svg>
                  <span>홈</span>
                </a>
              </Link>
            </li>
            <li className='w-1/5'>
              <Link href='/community'>
                <a className='flex flex-col items-center space-y-2'>
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
                      d='M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z'
                    />
                  </svg>
                  <span>동네생활</span>
                </a>
              </Link>
            </li>
            <li className='w-1/5'>
              <Link href='/chats'>
                <a className='flex flex-col items-center space-y-2'>
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
                      d='M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z'
                    />
                  </svg>
                  <span>채팅</span>
                </a>
              </Link>
            </li>
            <li className='w-1/5'>
              <Link href='/stream'>
                <a className='flex flex-col items-center space-y-2'>
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
                  <span>라이브</span>
                </a>
              </Link>
            </li>
            <li className='w-1/5'>
              <Link href='/profile'>
                <a className='flex flex-col items-center space-y-2'>
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
                      d='M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z'
                    />
                  </svg>
                  <span>나의 정보</span>
                </a>
              </Link>
            </li>
          </ul>
        </nav>
      ) : null}
    </div>
  );
};

export default Layout;