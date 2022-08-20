import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../components/Navbar.js';
import Products from '../components/Products.js';

const Home: NextPage = () => {
  return (
    <div className="" lang="ar-EG" dir="rtl">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        <Navbar />
        <Products />
      </div>

    </div>
  )
}

export default Home
