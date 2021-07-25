import App from '../components/app';
import Head from 'next/head';

export default function RootPage () {
    return (
        <>
        <Head>
            <title>WhatsApp 2.0</title>
            <link rel="icon" href="/static/favicon.ico"></link>
        </Head>
        <App />
        </>
    )
}