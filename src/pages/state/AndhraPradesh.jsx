import React from "react";
import "../state/TamilNadu.css";
import tamilNaduImage from "../../assets/anp.png"; // Update the path as needed

const AndhraPradesh = () => {
    const priceHistory = [
      { year: "2020", price: "₹22/kg" },
      { year: "2021", price: "₹28/kg" },
      { year: "2022", price: "₹34/kg" },
      { year: "2023", price: "₹38/kg" },
      { year: "2024", price: "₹42/kg" },
    ];
  
    return (
        <div className="tamilnadu-page">
          <h1 className="tamilnadu-heading">ఆంధ్ర ప్రదేశ్ కొబ్బరికాయ ధరలు</h1>
          <p className="tamilnadu-subheading">
          గత సంవత్సరాలలో ఆంధ్ర ప్రదేశ్ లోని కొబ్బరికాయ ధరల నడవడిని తెలుసుకోండి.
        వాస్తవ-సమయ ధరలను అన్వేషించండి మరియు మార్కెట్ పై ప్రభావం చూపించే అంశాలను
        అర్థం చేసుకోండి.
          </p>
          <div className="tamilnadu-content">
            <div className="tamilnadu-image">
              <img src={tamilNaduImage} alt="Tamil Nadu" />
              <p className="image-description">
              అధిక దిగుబడి మరియు నాణ్యమైన కొబ్బరికాయల కోసం ప్రసిద్ధి గాంచిన ఆంధ్ర  ప్రదేశ్.
              </p>
            </div>
            <div className="tamilnadu-table-container">
              <h2>ధరల చరిత్ర</h2>
              <table className="price-history-table">
                <thead>
                  <tr>
                  <th>సంవత్సరం</th>
                  <th>ధర</th>
                  </tr>
                </thead>
                <tbody>
                  {priceHistory.map((item, index) => (
                    <tr key={index}>
                      <td>{item.year}</td>
                      <td>{item.price}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className="button-container">
                <a
                  href="https://www.commodityonline.com/mandiprices/coconut"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="realtime-button"
                >
                  వాస్తవ-సమయ కొబ్బరికాయ ధరలు చూడండి
                </a>
              </div>
            </div>
          </div>
    
        <div className="additional-info">
          <h2>కొబ్బరికాయ ధరలపై ప్రభావం చూపే అంశాలు</h2>
          <ul>
            <li>వాతావరణ పరిస్థితులు మరియు సీజనల్ మార్పులు</li>
            <li>ఎగుమతి డిమాండ్ మరియు గ్లోబల్ కొబ్బరికాయ మార్కెట్ ధోరణులు</li>
            <li>కొబ్బరికాయ ఆధారిత ఉత్పత్తుల స్థానిక డిమాండ్</li>
            <li>వ్యవసాయ మరియు సబ్సిడీలకు సంబంధించి ప్రభుత్వ విధానాలు</li>
          </ul>
          <div className="fun-fact">
            <h3>మీకు తెలుసా?</h3>
            <p>
              ఆంధ్ర ప్రదేశ్ భారతదేశంలో అత్యధిక కొబ్బరికాయ ఉత్పత్తిదారుల్లో ఒకటి,
              దేశపు వ్యవసాయ ఆర్థిక వ్యవస్థకు ప్రధానంగా తోడ్పడుతుంది.
            </p>
          </div>
        </div>
      </div>
    );
  };
  
  export default AndhraPradesh;
