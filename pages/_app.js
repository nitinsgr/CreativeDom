import '../styles/globals.css'
import '../styles/Home.module.css'
import 'react-sticky-header/styles.css';
import 'locomotive-scroll/dist/locomotive-scroll.css';
import { AppProps } from 'next/app';
import { useRef } from 'react';
import { LocomotiveScrollProvider as RLSProvider } from 'react-locomotive-scroll';

function MyApp({ Component, pageProps }) {
  const containerRef = useRef(null);
  return (
    <RLSProvider
    options={
      {
        smooth: true,
        multiplier : 0.4,
        lerp : 0.1,
        repeat: false,
        scrollFromAnywhere : true,
        direction: 'vertical', // or horizontal
        class: 'is-inview',
        scrollbarContainer: false,
        // ... all available Locomotive Scroll instance options 
      }
    }
    watch={
      [
        //..all the dependencies you want to watch to update the scroll.
        //  Basicaly, you would want to watch page/location changes
        //  For exemple, on Next.js you would want to watch properties like `router.asPath` (you may want to add more criterias if the instance should be update on locations with query parameters)
      ]
    }
    containerRef={containerRef}
  >
    <main data-scroll-container data-scroll-direction="horizontal">
    <Component {...pageProps} />
    </main>
  </RLSProvider>
  );
}

export default MyApp

