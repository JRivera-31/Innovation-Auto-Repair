import Head from 'next/head';
import ConfirmationPage from '../components/Confirmation/confirmationPage'
import Layout from '../components/Layout/layout';

export default function Confirmation() {
    return (
    <Layout>
        <Head>
        <title>Confirmation</title>
        <link
            rel="shortcut icon"
            type="img/png"
            href="/images/Innovation_Logo-no-bg.png"
        />
      </Head>
      < ConfirmationPage />
      </Layout>
    )
    
}