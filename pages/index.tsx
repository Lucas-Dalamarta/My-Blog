import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const name = 'Lucas Felipe Dalamarta'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Home | LFDalamarta.dev </title>
        <meta name="description" content="Lucas's Dalamarta blog" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.content}>
        <Image
          priority
          src="/images/profile.jpeg"
          className={styles.borderCircle}
          height={144}
          width={144}
          alt={name}
        />
        <h2 className={styles.heading}>Hello, I'm Lucas Dalamarta</h2>
        <p>Welcome to my blog</p>
      </div>

    </div>
  )
}
