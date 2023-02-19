import Head from "next/head";
import styles from "@/styles/wallet.module.css";
import Footer from "@/components/Footer/footer.js";
import Link from "next/link";

export default function Home() {
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

      <div className={styles.bodyContainer}>
        <div className={styles.container}>
          <img className={styles.logo} src="./logo.png" />
          <h1 className={styles.heading1}>DeFaS Wallet</h1>

          <div className={styles.subcontainer}>
            <p className={styles.bodyText2}>Wallet Balance:</p>
            <p className={styles.bodyText1}>$ 4650 </p>
          </div>

          <input
            className={styles.input}
            type="text"
            id="amount"
            name="amount"
            placeholder="Enter amount here..."
          />
          <div>
            <button className={styles.button}>Withdraw</button>
            <button className={styles.button}>Add Money</button>
          </div>
        </div>
      </div>

      <div className={styles.footer}>
        <Footer />
      </div>
    </>
  );
}
