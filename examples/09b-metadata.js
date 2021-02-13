import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Head>
        <title>Ninja List | Home</title>
        <meta name='keywords' content='ninjas' />
      </Head>
      <div>
        <h1 className={styles.title}>homepage</h1>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet, consectetur
          adipisicing elit. Quos.
        </p>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet, consectetur
          adipisicing elit. Quos.
        </p>
        <Link href='ninjas'>
          <a className={styles.btn}>see ninja listing</a>
        </Link>
      </div>
    </>
  );
}
