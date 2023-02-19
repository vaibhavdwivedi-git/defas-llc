import Head from "next/head";
import styles from "@/styles/display_games.module.css";
import Game from "@/components/Game/game.js";
import Footer from "@/components/Footer/footer.js";
import Link from "next/link";

export default function Home({ data }) {
  return (
    <>
      <Head>
        <title>DeFaS</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Link href="/view_profile">
        <img className={styles.menu} src="./menu.png" />
      </Link>
      <div className={styles.section1}>
        <img className={styles.logo} src="./logo.png" />
        <h1 className={styles.heading1}>Make Your Fantasy a Reality</h1>
        <p className={styles.bodyText2}>Dream Big. Make your team now !!</p>
        <Link href="/create_contest">
          <button className={styles.button}>Create a Contest</button>
        </Link>
      </div>
      <div className={styles.section2}>
        <h1 className={styles.heading2}>Live Contest</h1>

        <div className={styles.gallery}>
          {data.map((contest, i) => (
            <Game game={contest} key={i} />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}

export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch("http://localhost:3000/api/contest");
  const data = await res.json();
  //Pass data to the page via props
  return { props: { data } };
}
