import '../styles/globals.css';
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className='flex flex-col m-0 p-0 items-center min-h-screen w-full'>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
