import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import * as React from "react";
import { render } from "react-dom";
import { animated, useSpring } from "react-spring";
import { useScroll } from "react-use-gesture";
import Link from 'next/link';
import InfiniteScroll from "react-infinite-scroll-component";



export default function Home() {

  const movies = [
    "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6421/6421949_sd.jpg",
    "https://cdn.shopify.com/s/files/1/0036/4806/1509/products/21099f2ee125c96ed893bf4cf5c7b0f5a618e68a_square2830419_1.jpg?v=1634330029",
    "https://i.imgur.com/MPhdtai.png",
    "https://i.imgur.com/9dprIE8.png",
    "https://jenis.cardfoundry.com/merch/jenis/images/giftcard_images/card_jenisCRD.png?t=1608648889",
    "https://d.comenity.net/ac/jcrew/images/Client/CardArt/CreditCardLarge.png",
    "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6389/6389631_sd.jpg", 
  ];

  const clamp = (value) => {
    if (value > 0) {
      return value > 60 ? 60 : value;
    } else {
      return value < -60 ? -60 : value;
    }
  };
  
  const [style, set] = useSpring(() => ({
    transform: "perspective(500px) rotateY(0deg)"
  }));
  
  const bind = useScroll(event => {
    set({
      transform: `perspective(500px) rotateY(${
        event.scrolling ? clamp(event.delta[0]) : 0
      }deg)`
    });
  });

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Save your gift card scraps.
        </h1>

        <div className={styles.grid}>
          <Link href="/redeem">
            <a className={styles.card2}>
            Redeem
            </a>
          </Link>
        </div>

        <div className={styles.container2} {...bind()}>
          {movies.map(src => (
            <animated.div
              key={src}
              className={styles.card}
              style={{
                ...style,
                backgroundImage: `url(${src})`
              }}
            />
          ))}
        </div>

        {/* <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h2>Documentation &rarr;</h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>Learn &rarr;</h2>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/canary/examples"
            className={styles.card}
          >
            <h2>Examples &rarr;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h2>Deploy &rarr;</h2>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div> */}
      </main>

      {/* <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer> */}
    </div>
  )
}
