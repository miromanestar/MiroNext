import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'
import '../styles/globals.css'

const App = ({ Component, pageProps }) => {
    return (
        <>
            <Head>
                <title>Miro&apos;s Portfolio</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>

            <Header />
            <div className="flex flex-col h-screen">
                <div className="flex-grow">
                    <Component {...pageProps} />
                </div>
                <Footer />
            </div>
        </>
    )
}

export default App