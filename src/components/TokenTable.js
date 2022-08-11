import React from "react";

import TableScrollbar from "react-table-scrollbar";
import { randomcomps } from "../data/data";
import { toast, ToastContainer } from "react-toastify";
import { MDBDataTable } from "mdbreact";
import "react-toastify/dist/ReactToastify.min.css";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Swap from "../pages/swap";

function TokenTable(props) {
  // const router = useRouter();
  // const tokenBalance = router.query;
  // const b = Object.keys(tokenBalance)[0];

  // function calcPayout (input, rate) {
  //   setBalance(balance - (input * rate))
  // }

  // useEffect(() => {
  //   console.log('Payout', payout);
  // }, [payout])

  // const element = document.getElementById('payout');
  // console.log(element)

  // if (element) {
  //   element.addEventListener('keydown', (e) => {
  //     if (e.key === 'Enter') {
  //       console.log(e.key)
  //       console.log(document.getElementById("payout").value)
  //       setPayout(document.getElementById("payout").value * 0.89)
  //       props.calcPayout(document.getElementById("payout").value, 0.89)
  //       toast('$' + payout + ' Starbucks added to your wallet', {
  //         duration: 5,
  //         type: "success"
  //       })
  //     }
  //   });
  // }

  const data = {
    columns: [
      {
        label: "Merchant",
        field: "company",
        sort: "asc",
      },
      {
        label: "Rate",
        field: "rate",
        sort: "asc",
      },
      {
        label: "Website",
        field: "action",
      },
      {
        label: "Swap",
        field: "swap",
        width: "100px",
      },
    ],
    rows: [
      {
        company: "Starbucks",
        rate: "0.89",
        action: (
          <button onClick={() => window.open("http://www.starbucks.com")}>
            Learn More
          </button>
        ),
        swap: (
          <input
            type="number"
            id="payout"
            style={{ width: "50px" }}
            placeholder="0"
            onKeyDown={(event) => {
              if (event.key === "Enter") {
                // console.log(document.getElementById("payout").value)
                props.setPayout(document.getElementById("payout").value * 0.89);
                props.calcPayout(document.getElementById("payout").value, 0.89);
                toast("$" + props.payout + " Starbucks added to your wallet", {
                  duration: 5,
                  type: "success",
                });
                console.log("Enter key pressed ✅");
              }
            }}
          />
        ),
      },
      {
        company: "Shake Shack",
        rate: "0.71",
        action: (
          <button onClick={() => window.open("http://www.shakeshack.com")}>
            Learn More
          </button>
        ),
        swap: (
          <input
            type="number"
            id="payout"
            style={{ width: "50px" }}
            placeholder="0"
            onKeyDown={(event) => {
              if (event.key === "Enter") {
                // console.log(document.getElementById("payout").value)
                props.setPayout(document.getElementById("payout").value * 0.89);
                props.calcPayout(document.getElementById("payout").value, 0.89);
                toast("$" + props.payout + " Starbucks added to your wallet", {
                  duration: 5,
                  type: "success",
                });
                console.log("Enter key pressed ✅");
              }
            }}
          />
        ),
      },
      {
        company: "Outback Steakhouse",
        rate: "0.54",
        action: (
          <button onClick={() => window.open("http://www.outback.com")}>
            Learn More
          </button>
        ),
        swap: (
          <input
            type="number"
            id="payout"
            style={{ width: "50px" }}
            placeholder="0"
            onKeyDown={(event) => {
              if (event.key === "Enter") {
                // console.log(document.getElementById("payout").value)
                props.setPayout(document.getElementById("payout").value * 0.89);
                props.calcPayout(document.getElementById("payout").value, 0.89);
                toast("$" + props.payout + " Starbucks added to your wallet", {
                  duration: 5,
                  type: "success",
                });
                console.log("Enter key pressed ✅");
              }
            }}
          />
        ),
      },
      {
        company: "Visa",
        rate: "0.99",
        action: (
          <button onClick={() => window.open("http://www.visa.com")}>
            Learn More
          </button>
        ),
        swap: (
          <input
            type="number"
            id="payout"
            style={{ width: "50px" }}
            placeholder="0"
            onKeyDown={(event) => {
              if (event.key === "Enter") {
                // console.log(document.getElementById("payout").value)
                props.setPayout(document.getElementById("payout").value * 0.89);
                props.calcPayout(document.getElementById("payout").value, 0.89);
                toast("$" + props.payout + " Starbucks added to your wallet", {
                  duration: 5,
                  type: "success",
                });
                console.log("Enter key pressed ✅");
              }
            }}
          />
        ),
      },
      {
        company: "Sweetgreen",
        rate: "0.63",
        action: (
          <button onClick={() => window.open("http://www.sweetgreen.com")}>
            Learn More
          </button>
        ),
        swap: (
          <input
            type="number"
            id="payout"
            style={{ width: "50px" }}
            placeholder="0"
            onKeyDown={(event) => {
              if (event.key === "Enter") {
                // console.log(document.getElementById("payout").value)
                props.setPayout(document.getElementById("payout").value * 0.89);
                props.calcPayout(document.getElementById("payout").value, 0.89);
                toast("$" + props.payout + " Starbucks added to your wallet", {
                  duration: 5,
                  type: "success",
                });
                console.log("Enter key pressed ✅");
              }
            }}
          />
        ),
      },
      {
        company: "Allbirds",
        rate: "0.77",
        action: (
          <button onClick={() => window.open("http://www.allbirds.com")}>
            Learn More
          </button>
        ),
        swap: (
          <input
            type="number"
            id="payout"
            style={{ width: "50px" }}
            placeholder="0"
            onKeyDown={(event) => {
              if (event.key === "Enter") {
                // console.log(document.getElementById("payout").value)
                props.setPayout(document.getElementById("payout").value * 0.89);
                props.calcPayout(document.getElementById("payout").value, 0.89);
                toast("$" + props.payout + " Starbucks added to your wallet", {
                  duration: 5,
                  type: "success",
                });
                console.log("Enter key pressed ✅");
              }
            }}
          />
        ),
      },
      {
        company: "iTunes",
        rate: "0.43",
        action: (
          <button onClick={() => window.open("http://www.itunes.com")}>
            Learn More
          </button>
        ),
        swap: (
          <input
            type="number"
            id="payout"
            style={{ width: "50px" }}
            placeholder="0"
            onKeyDown={(event) => {
              if (event.key === "Enter") {
                // console.log(document.getElementById("payout").value)
                props.setPayout(document.getElementById("payout").value * 0.89);
                props.calcPayout(document.getElementById("payout").value, 0.89);
                toast("$" + props.payout + " Starbucks added to your wallet", {
                  duration: 5,
                  type: "success",
                });
                console.log("Enter key pressed ✅");
              }
            }}
          />
        ),
      },
      {
        company: "Sephora",
        rate: "0.68",
        action: (
          <button onClick={() => window.open("http://www.sephora.com")}>
            Learn More
          </button>
        ),
        swap: (
          <input
            type="number"
            id="payout"
            style={{ width: "50px" }}
            placeholder="0"
            onKeyDown={(event) => {
              if (event.key === "Enter") {
                // console.log(document.getElementById("payout").value)
                props.setPayout(document.getElementById("payout").value * 0.89);
                props.calcPayout(document.getElementById("payout").value, 0.89);
                toast("$" + props.payout + " Starbucks added to your wallet", {
                  duration: 5,
                  type: "success",
                });
                console.log("Enter key pressed ✅");
              }
            }}
          />
        ),
      },
      {
        company: "Nike",
        rate: "0.81",
        action: (
          <button onClick={() => window.open("http://www.nike.com")}>
            Learn More
          </button>
        ),
        swap: (
          <input
            type="number"
            id="payout"
            style={{ width: "50px" }}
            placeholder="0"
            onKeyDown={(event) => {
              if (event.key === "Enter") {
                // console.log(document.getElementById("payout").value)
                props.setPayout(document.getElementById("payout").value * 0.89);
                props.calcPayout(document.getElementById("payout").value, 0.89);
                toast("$" + props.payout + " Starbucks added to your wallet", {
                  duration: 5,
                  type: "success",
                });
                console.log("Enter key pressed ✅");
              }
            }}
          />
        ),
      },
      {},
    ],
  };

  return (
    <div className="Table">
      <ToastContainer />
      <MDBDataTable
        paging={false}
        striped
        bordered
        hover
        small={false}
        autoWidth={false}
        data={data}
      />
    </div>
  );
}

export default TokenTable;
