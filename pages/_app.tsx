import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import Loader from '../src/components/Loader';
import Footer from '../src/hocs/footer/Footer';
import Header from '../src/hocs/header/Header';
import GlobalStyle from '../styles/GlobalStyle';
import { theme } from "../styles/theme";

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
