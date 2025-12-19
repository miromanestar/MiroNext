import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../styles/globals.css";

const App = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>Miro&apos;s Portfolio</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" type="image/x-icon" href="/mm-logo.png" />

        <meta
          name="description"
          content="Hello, and welcome to my portfolio! I'm a full-stack software engineer with a passion for creating beautiful, intuitive, and functional web applications."
        />
      </Head>

      <Header />
      <div className="flex h-screen flex-col">
        <div className="grow">
          <Component {...pageProps} />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default App;
