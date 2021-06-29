import '../styles/globals.css'
import Header from '../components/header'
import App from 'next/app'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return (
    <div className="bg-blue-300 min-h-screen">
      <Head>
        <title>Ekrem's Blog</title>
        <meta
          name="Ekrem's Blog and First Sİte"
          content="Ekrem Günden create this blog site with used to strapi and nextjs technologies."
        />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,300;0,400;0,600;0,700;1,300;1,400;1,600;1,700&display=swap"
          rel="stylesheet"
        />
        <script src="https://myblog-6f70.restdb.io/rest/_jsapi.js"/>
      </Head>
      <Header />
      <main className="bg-blue-300 mt-6">
        <Component {...pageProps} />
      </main>
    </div>
  )
}

export default MyApp
