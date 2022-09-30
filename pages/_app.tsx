import type { AppProps } from 'next/app';
import Head from 'next/head';
import { useRouter } from 'next/router';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import Loader from '../src/components/Loader';
import Header from '../src/hocs/header/Header';
import GlobalStyle from '../styles/GlobalStyle';
import { theme } from "../styles/theme";
import dynamic from 'next/dynamic';

const Footer = dynamic(() => import(/* webpackChunkName: 'footer' */ '../src/hocs/footer/Footer'));

function MyApp({ Component, pageProps }: AppProps) {
  const date = new Date();;
  const year = date.getFullYear();
  const [loading, setLoading] = React.useState(false);

  const router = useRouter();
  React.useEffect(() => {
    const handleStart = () => { setLoading(true); };
    const handleComplete = () => { setLoading(false); };

    router.events.on('routeChangeStart', handleStart);
    router.events.on('routeChangeComplete', handleComplete);
    router.events.on('routeChangeError', handleComplete);
  }, [router]);

  return (
    <>
      <Head>
        <title>Welcome to Sanele Mngadi web page</title>
        <meta name="viewport" content='initial-scale=1, width=device-width' />
        <meta name="keywords" content="Web design, ux/ui, websites, sanele mngadi, django, nextjs, frontend, backend" />
        <meta name="robots" content="all" />
        <link rel="canonical" href={`https://www.sanelemngadi.com${router.pathname}`}></link>
        <meta name="author" content="Sanele Mngadi" />
      </Head>

      {
        !loading ? (
          <React.Fragment>
            <ThemeProvider theme={theme}>
              <GlobalStyle theme={theme} />
              <Header />
              <Component {...pageProps} />
              <Footer />
              <div style={{ backgroundColor: "#fff", padding: "1rem", textAlign: "center" }}>
                sanele mngadi &copy; {year}
              </div>
            </ThemeProvider>
          </React.Fragment>
        ) : (
          <Loader />
        )
      }
    </>
  )
}

export default MyApp;
