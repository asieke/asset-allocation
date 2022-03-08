import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Link from 'next/link';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className='flex flex-col px-10 py-10 items-center min-h-screen w-full bg-slate-700'>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
