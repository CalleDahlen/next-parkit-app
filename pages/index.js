import Head from 'next/head'
import styles from '../styles/Home.module.css'


export default function Home() {
  return (
    <>
      <Head>
        <title>The PARKIT! App</title>
        <meta name="description" content="Find what days you are allowed to park at streets." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className={styles.main}>
        <h1>PARK IT!</h1>
      </main>
    </>
  )
}
