import '../styles/globals.css'
import Header from '../components/header'
import head from 'next/head'

function MyApp({ Component, pageProps }) {
  return (
    <div className="bg-blue-300 h-screen">
        <head>
            <title>Ekrem's Blog</title>
            <link rel="preconnect" href="https://fonts.gstatic.com"/>
                <link href="https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,300;0,400;0,600;0,700;1,300;1,400;1,600;1,700&display=swap" rel="stylesheet"/>
                </head>
      <Header/>
      <main className="mt-8">
        <Component {...pageProps} />
      </main>
  </div>
  )
}

export default MyApp

