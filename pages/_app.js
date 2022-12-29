import Head from 'next/head'
import Header from '../components/Header'
import '../styles/globals.css'

const App = ({ Component, pageProps }) => {
    return (
        <>
            <Head>
                <title>Miro&apos;s Portfolio</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>

            <Header />
            <Component {...pageProps} />
        </>
    )
}

export default App