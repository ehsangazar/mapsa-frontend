import Head from 'next/head'
import ImageList from './containers/ImagesList/ImagesList'
import { useEffect, useState } from 'react';

const Home = ({ data=[], title }) => {
  return (
    <>
      <Head>
        <title>Pinterest App</title>
        <meta name="description" content="Pinterest App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        {title}
        {data.length === 0 && <p>Loading...</p>}
        <ImageList data={data} />
      </div>
    </>
  )
}

Home.getInitialProps = async () => {
  const response = await fetch('https://fakestoreapi.com/products');
  const data = await response.json();
  return { data, title:'Ehsan Gazar' }
}

export default Home


