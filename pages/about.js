import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import descriptionStyles from '@/styles/Description.module.css'
import { Footer } from '@/components/Footer'
import { Links } from '@/components/Links'
import {Headline} from '@/components/Headline'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App アバウトページ</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="robots" content="noindex,nofollow" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        <div className={descriptionStyles.description}>
          <Headline
            title="About page"
            page="about"
            number={111}
            array={[1, 2, 3]}
            obj={{foo: "foo", bar: "bar"}}
            boolean
          >
              <code className={styles.code}>pages/about.js</code>
          </Headline>
          <div>
            <a
              href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              By{' '}
              <Image
                src="/vercel.svg"
                alt="Vercel Logo"
                className={styles.vercelLogo}
                width={100}
                height={24}
                priority
              />
            </a>
          </div>
        </div>

        <div className={styles.center}>
          <Image
            className={styles.logo}
            src="/next.svg"
            alt="Next.js Logo"
            width={180}
            height={37}
            priority
          />
        </div>

        <h1>
          About Page
        </h1>

        <Links />
      </main>

      <Footer />
    </>
  )
}
