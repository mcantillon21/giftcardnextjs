import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import TokenTable from "../components/TokenTable";
import styles from "../styles/Home.module.css";
import { useRouter } from "next/router";
import { ToastContainer } from "react-nextjs-toast";

export default function Swap() {
  // useEffect(() => {
  //   // Update the document title using the browser API
  //   document.title = `You clicked ${tokenBalance} times`;
  // });

  const router = useRouter();
  const tokenBalance = router.query;
  const b = Object.keys(tokenBalance)[0];
  const [balance, setBalance] = useState(b);
  const [payout, setPayout] = useState(0);

  function calcPayout(input, rate) {
    console.log(input * rate);
    console.log(rate);
    console.log(parseInt(balance) - input * rate);
    setBalance(parseInt(balance) - input * rate);
  }

  useEffect(() => {}, [balance, payout]);

  return (
    <div className={styles.container}>
      <main className={styles.main} style={{ justifyContent: "start" }}>
        <h1 className={styles.title}>Unlocking your gift cards 🚀</h1>
        <div className="header">
          <h4
            style={{
              display: "flex",
              justifyContent: "center",
              margin: "3rem",
            }}
          >
            Token Balance: {balance}
          </h4>
        </div>

        <div className={styles.table}>
          <TokenTable
            calcPayout={calcPayout}
            setPayout={setPayout}
            payout={payout}
          />
        </div>
      </main>
    </div>
  );
}
