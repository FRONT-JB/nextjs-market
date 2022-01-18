import '../styles/globals.css';
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      {/* className='dark' */}
      {/* Tailwind 에서 darkMode 옵션을 class로 했을 경우 이곳에서 핸들링 */}
      {/* darkMode 옵션이 media 일 경우 기기 테마감지 */}
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
