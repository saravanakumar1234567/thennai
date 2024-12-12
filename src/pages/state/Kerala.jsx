import React from "react";
import "../state/TamilNadu.css";
import tamilNaduImage from "../../assets/kerala (1).png"; // Update the path as needed

const TamilNadu = () => {
  const priceHistory = [
    { year: "2020", price: "₹25/kg" },
    { year: "2021", price: "₹30/kg" },
    { year: "2022", price: "₹35/kg" },
    { year: "2023", price: "₹40/kg" },
    { year: "2024", price: "₹45/kg" },
  ];

  return (
    <div className="tamilnadu-page">
      <h1 className="tamilnadu-heading">കേരള തേങ്ങ വില</h1>
      <p className="tamilnadu-subheading">
      കേരളത്തിലെ കഴിഞ്ഞ ചില വർഷങ്ങളിലെ തേങ്ങ വിലയിലുണ്ടായ മാറ്റങ്ങളെ
        കുറിച്ചറിയൂ. യഥാർത്ഥ സമയ വിലകൾ കണ്ടെത്തുകയും മാർക്കറ്റിനെ ബാധിക്കുന്ന
        ഘടകങ്ങളെ മനസ്സിലാക്കുകയും ചെയ്യുക.
      </p>
      <div className="tamilnadu-content">
        <div className="tamilnadu-image">
          <img src={tamilNaduImage} alt="Tamil Nadu" />
          <p className="image-description">
          തേങ്ങയുടെ സമ്പന്ന കൃഷിയാലും ഉയർന്ന വിളവലവുമാലും പ്രശസ്തമായ കേരളം.
          </p>
        </div>
        <div className="tamilnadu-table-container">
          <h2>വില ചരിത്രം</h2>
          <table className="price-history-table">
            <thead>
              <tr>
                <th>വർഷം</th>
                <th>വില</th>
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
              യഥാർത്ഥ സമയം തേങ്ങ വില കാണുക
            </a>
          </div>
        </div>
      </div>
      <div className="additional-info">
        <h2>തേങ്ങയുടെ വിലയെ ബാധിക്കുന്ന ഘടകങ്ങൾ</h2>
        <ul>
        <li>കാലാവസ്ഥാ സാഹചര്യങ്ങൾ, സീസണൽ മാറ്റങ്ങൾ</li>
          <li>കയറ്റുമതി ആവശ്യങ്ങൾ, ആഗോള തേങ്ങ മാർക്കറ്റ് പ്രവണത</li>
          <li>തേങ്ങ അടിസ്ഥാനമാക്കിയുള്ള ഉൽപ്പന്നങ്ങളിലെ പ്രാദേശിക ആവശ്യം</li>
          <li>കൃഷിയും സബ്സിഡികളും സംബന്ധിച്ച സർക്കാർ നയം</li>
        </ul>
        <div className="fun-fact">
        <h3>നിങ്ങൾക്ക് അറിയാമോ?</h3>
          <p>
            ഇന്ത്യയിലെ ഏറ്റവും വലിയ തേങ്ങ ഉൽപാദകരായ സംസ്ഥാനങ്ങളിലൊന്നാണ്
            കേരളം, രാജ്യത്തിന്റെ കൃഷി സാമ്പത്തികത്തിൽ ഏറെ സംഭാവന ചെയ്യുന്നു.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TamilNadu;
 