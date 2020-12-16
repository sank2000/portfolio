import Head from 'next/head';
import { Home } from '../components';

export default function Index() {
  return (
    <>
      <Head>
        <title>san</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Home />
    </>
  );
}
