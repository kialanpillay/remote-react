import React from "react";

export default class EconomicCalendar extends React.Component {
  componentDidMount() {
    const script = document.createElement("script");
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-events.js";
    script.async = true;
    script.innerHTML = JSON.stringify({
      colorTheme: "light",
      locale: "en",
      isTransparent: false,
      width: "360",
      height: "500",
      importanceFilter: "0, 1",
    });
    document.getElementById("economic_calendar").appendChild(script);
  }

  render() {
    return (
      <div
        id="economic_calendar"
        style={{
          display: "flex",
          marginLeft: "0.5rem",
          marginRight: "0.5rem",
          marginBottom: "1rem",
        }}
      >
        <div className="tradingview-widget-container">
          <div className="tradingview-widget-container__widget"></div>
        </div>
      </div>
    );
  }
}
