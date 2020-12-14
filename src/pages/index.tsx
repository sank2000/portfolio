import Head from 'next/head';
import HomePage from '../components/Home/Home';

export default function Home() {
  return (
    <>
      <Head>
        <title>san</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <HomePage />
    </>
  );
}
