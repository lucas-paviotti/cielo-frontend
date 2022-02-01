import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router';
import { Hero } from '../components/Hero';

export default function Home() {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>Cielo S.A.</title>
        <meta name="description" content="Cielo S.A." />
        <meta charSet="UTF-8" key="charset" />
        <meta name="viewport" content="width=device-width,initial-scale=1" key="viewport" />
        <meta property="og:title" content="Cielo S.A." />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://cielosa.com.ar/thumbnail.JPG" />
        <meta property="og:url" content="https://cielosa.com.ar/" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="apple-touch-icon" href={`${router.basePath}/apple-touch-icon.png`} key="apple" />
        <link rel="icon" type="image/png" sizes="32x32" href={`${router.basePath}/favicon/favicon-32x32.png`} key="icon32" />
        <link rel="icon" type="image/png" sizes="16x16" href={`${router.basePath}/favicon/favicon-16x16.png`} key="icon16" />
        <link rel="icon" href={`${router.basePath}/favicon/favicon.ico`} key="favicon" />
      </Head>

      <Hero></Hero>

      <p className='description'>
        Get started by editing{' '}
        <code className='code'>pages/index.js</code>
      </p>

      <div className='grid'>
        <a href='https://nextjs.org/docs' className='card'>
          <h2>Documentation &rarr;</h2>
          <p>Find in-depth information about Next.js features and API.</p>
        </a>

        <a href='https://nextjs.org/learn' className='card'>
          <h2>Learn &rarr;</h2>
          <p>Learn about Next.js in an interactive course with quizzes!</p>
        </a>

        <a
          href='https://github.com/vercel/next.js/tree/master/examples'
          className='card'
        >
          <h2>Examples &rarr;</h2>
          <p>Discover and deploy boilerplate example Next.js projects.</p>
        </a>

        <a
          href='https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
          className='card'
        >
          <h2>Deploy &rarr;</h2>
          <p>
            Instantly deploy your Next.js site to a public URL with Vercel.
          </p>
        </a>
      </div>
    </>
  )
}
