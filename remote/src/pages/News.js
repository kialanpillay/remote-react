import React from "react";
import Icon from "@material-ui/core/Icon";

function News({ data, ip }) {
  return (
    <div>
      <main>
        <h1 className="title">
          NEWS<Icon style={{ fontSize: 54, color: "#0070f3" }}>rss_feed</Icon>
        </h1>
        <div className="card">
          <h1>Top Headlines from {ip.country}</h1>
          {data.articles.slice(0, 11).map((article, id) => {
            return (
              <a
                key={id}
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <p>{article.title}</p>
              </a>
            );
          })}
          <h2 className="home">
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

        a:hover {
          color: inherit;
          text-decoration: underline;
        }

        .title {
          margin-top: 3rem;
          line-height: 1.15;
          font-size: 4rem;
          letter-spacing: 0.5rem;
        }

        .title,
        .description {
          text-align: center;
        }

        .description {
          line-height: 1.5;
          font-size: 1.5rem;
        }

        .grid {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;
          margin-top: 3rem;
        }

        .card {
          margin: 0rem;
          flex-basis: 45%;
          padding: 1.5rem;
          text-align: left;
          color: inherit;
          border: 2px solid #eaeaea;
          border-radius: 10px;
          width: 60%;
        }
        .home h2 {
          font-size: 1.5rem;
          font-weight: 600;
        }

        .home a:hover {
          color: #0070f3;
          text-decoration: none;
        }

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }

          .card {
            width: 95%;
          }

          .title {
            font-size: 2.5rem;
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

// This gets called on every request
export async function getServerSideProps(context) {
  const rip = await fetch(`http://ip-api.com/json/`);
  const ip = await rip.json();
  const res = await fetch(
    `https://newsapi.org/v2/top-headlines?country=${ip.countryCode.toLowerCase()}&apiKey=${
      process.env.NEWS_KEY
    }`
  );
  const data = await res.json();
  return { props: { data, ip } };
}

export default News;
