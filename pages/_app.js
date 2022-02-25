import '../styles/globals.css'
import Script from 'next/script'
import Layout from '../components/Layout';
import '../styles/Work.css'

export default function MyApp({ Component, pageProps }) {
  return (
    <Layout standalone={pageProps.standalone}>
        <Script src="/js/vendor/aos/aos.js"></Script>
        <Script src="/js/vendor/bootstrap/js/bootstrap.bundle.min.js"></Script>
        <Script src="/js/vendor/glightbox/js/glightbox.min.js"></Script>
        <Script src="/js/vendor/isotope-layout/isotope.pkgd.min.js"></Script>
        <Script src="/js/vendor/swiper/swiper-bundle.min.js"></Script>
        <Script src="/js/vendor/typed.js/typed.min.js"></Script>
        <Script src="/js/vendor/waypoints/noframework.waypoints.js"></Script>
        <Script src="/js/vendor/main.js"></Script>
      <Component {...pageProps} />
    </Layout>
  )
}