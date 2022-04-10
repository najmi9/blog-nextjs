import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
        <link href="/js/vendor/aos/aos.css" rel="stylesheet" />
        <link href="/js/vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet" />
        <link href="/js/vendor/bootstrap-icons/bootstrap-icons.css" rel="stylesheet" />
        <link href="/js/vendor/boxicons/css/boxicons.min.css" rel="stylesheet" />
        <link href="/js/vendor/glightbox/css/glightbox.min.css" rel="stylesheet" />
        <link href="/js/vendor/swiper/swiper-bundle.min.css" rel="stylesheet" />
        <link href="/css/style.css" rel="stylesheet" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}