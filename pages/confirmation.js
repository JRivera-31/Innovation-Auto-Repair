import Head from 'next/head';
import ConfirmationPage from '../components/Confirmation/ConfirmationPage'

export default function Confirmation() {
    return (
<div>
        <Head>
        <title>Confirmation</title>
        <link
                    rel="shortcut icon"
                    type="img/png"
                    href="/images/Innovation_Logo-no-bg.png"
                />
      </Head>
      < ConfirmationPage />
    </div>
    )
    
}