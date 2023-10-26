import Head from 'next/head';
//import styles from '@/styles/Home.module.css'
import Sidebar from '@/components/Sidebar';


export default function Home() {
  return (
  <div>
      <Head>
        <title>whatsapp 2.0</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Sidebar />
    </div>
  );
}
