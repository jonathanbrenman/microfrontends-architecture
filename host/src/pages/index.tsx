import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import { useState } from 'react';

export default function Home() {
  const [ route, setRoute ] = useState("/root");

  return (
    <>
      <Head>
        <title>Base Frontend</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.navbar}>
            <div>Menu</div>
            <ul>
              <li className={styles.menuItem}>
                <a onClick={() => setRoute("/root")}>Home</a>
              </li>
              <li className={styles.menuItem}>
                <a onClick={() => setRoute("/app1")}>App1</a>
              </li>
              <li className={styles.menuItem}>
                <a onClick={() => setRoute("/app2")}>App2</a>
              </li>
            </ul>
        </div>

        <div className={styles.content}>
          <iframe
            src={route}
            width="100%"
            height="100%"
            frameBorder="none"
          ></iframe>
        </div>

      </main>
    </>
  )
}
