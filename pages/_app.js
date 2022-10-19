import '../styles/globals.css'
import Layout from '../components/Layout';
import '../styles/Work.css'

export default function MyApp({ Component, pageProps }) {
  return (
    <Layout standalone={pageProps.standalone}>
      <Component {...pageProps} />
    </Layout>
  )
}
