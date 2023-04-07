import '../styles/globals.css';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { router } from 'next/client';

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      <Head>
        <title>Top Courses - наш лучший топ</title>
        <link rel="icon" href="/favicon.ico" />
        
        {/* <link rel="preconnect" href="https://fonts.gstatic.com" /> */}
        {/* <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;400;500;700&display=swap" rel="stylesheet" /> */}
        {/* <meta property="og:url" content={process.env.NEXT_PUBLIC_DOMAIN + router.asPath} /> */}
        {/* <meta property="og:locale" content="ru_RU" /> */}
        {/* <meta property="og:type" content="website" /> */}
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
