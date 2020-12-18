import Head from 'next/head';
import { useState } from 'react';
import { Home } from '../components';

export default function Index() {

  const [page, setPage] = useState(1);

  return (
    <>
      <Head>
        <title>san</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {page === 1 && <Home setPage={setPage}/>}
    </>
  );
}
