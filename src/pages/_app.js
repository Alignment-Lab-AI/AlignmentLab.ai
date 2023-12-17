import Layout from '@/components/Layout'
import '@/styles/globals.css'
import Head from 'next/head'

export default function App({ Component, pageProps }) {
  return <Layout>
    <Head>
      <title>Alignment Lab AI</title>
      <meta name="description" content="Alignment Lab AI, Utility, Transparency, Accessiblity" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Component {...pageProps} />
  </Layout>
}
