import type { NextPage } from 'next'
import Head from 'next/head'
import { faDiscord, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import styles from '../styles/Home.module.css'

library.add(faTwitter, faDiscord, faInstagram);

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Solfari</title>
        <meta name="description" content="Generated by create next app" />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>Solfari</h1>
        <div className={styles.social}>
          <a href="https://twitter.com/SolfariNFT">
            <FontAwesomeIcon icon={["fab", "twitter"]} />
          </a>
          <a href="https://discord.gg/4KS5XhGtE4">
            <FontAwesomeIcon icon={["fab", "discord"]} />
          </a>
          <a href="https://instagram.com/SolfariNFT">
            <FontAwesomeIcon icon={["fab", "instagram"]} />
          </a>
        </div>
        <p className={styles.description}>Coming soon</p>
      </main>
      <img className={styles.bottomStripe} src="/stripe-left.png" />
    </div>
  );
}

export default Home
