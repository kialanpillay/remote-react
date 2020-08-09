import React from "react";
import Icon from "@material-ui/core/Icon";
import MarketOverviewChart from "../components/MarketOverviewChart";
import EconomicCalendar from "../components/EconomicCalendar";

function Investing() {
  return (
    <div className="container">
      <main>
        <h1 className="title">
          INVESTING
          <Icon style={{ fontSize: "3rem", color: "#0070f3" }}>poll</Icon>
        </h1>
        <div className="grid">
          <MarketOverviewChart />
          <EconomicCalendar />
        </div>
        <div className="home">
          <h2>
            <a href="/"> &larr; Back Home</a>
          </h2>
        </div>
      </main>

      <style jsx>{`
        .container {
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        main {
          padding: 0rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          width: 100%;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        .title {
          margin: 3rem;
          line-height: 1.15;
          font-size: 4rem;
          letter-spacing: 0.5rem;
        }

        .title,
        .description {
          text-align: center;
        }

        .grid {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;
        }

        .home h2 {
          margin: 0 0 1rem 0;
          font-size: 1.5rem;
          font-weight: 600;
        }

        .home h2:hover {
          color: #0070f3;
        }

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }

          .title {
            font-size: 2.2rem;
          }
        }
      `}</style>
      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}

export default Investing;
