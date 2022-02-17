import { ReactNode } from 'react';
import classNames from 'classnames';

interface Props {
  title?: string;
  canGoBack?: boolean;
  hasTabBar?: boolean;
  children: ReactNode;
}

const Layout = ({ title, canGoBack, hasTabBar, children }: Props) => {
  return (
    <div>
      <div className='fixed top-0 flex items-center justify-center w-full py-3 text-lg font-medium text-gray-700 bg-white border-b'>
        {title ? <span>{title}</span> : null}
      </div>
      <div className={classNames('pt-16', { 'pb-16': hasTabBar })}>
        {children}
      </div>
      {hasTabBar ? (
        <nav className='fixed bottom-0 flex items-center justify-between pt-3 pb-10 text-gray-800 bg-white border-t'>
          <span>1</span>
          <span>2</span>
          <span>3</span>
          <span>4</span>
          <span>5</span>
        </nav>
      ) : null}
    </div>
  );
};

export default Layout;
