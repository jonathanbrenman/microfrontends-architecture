import Head from 'next/head'
import styles from '@/styles/Root.module.css'

export default function Root() {
  return (
    <>
      <Head>
        <title>Base Frontend - Root</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1>Hi this is a micro-frontends based Architecture</h1>
      </main>
    </>
  )
}