import '../styles/globals.css'
import Script from 'next/script'
import Layout from '../components/Layout';
import '../styles/Work.css'

export default function MyApp({ Component, pageProps }) {
  return (
    <Layout standalone={pageProps.standalone}>
        <Script src="/js/vendor/bootstrap/js/bootstrap.bundle.min.js"></Script>
      <Component {...pageProps} />
    </Layout>
  )
}
