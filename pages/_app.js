import '../styles/globals.css'
import { DefaultSeo, SocialProfileJsonLd } from 'next-seo';
import SEO from '../next-seo.config';

function MyApp({ Component, pageProps }) {
  return <>
        <DefaultSeo {...SEO} />
        <SocialProfileJsonLd type='Organization' name='Techonscroll' url='https://techonscroll.com' sameAs={['https://twiiter.com/']}/>
        <Component {...pageProps} />
  </> 
}

export default MyApp
