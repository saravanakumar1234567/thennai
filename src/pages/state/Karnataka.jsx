import React from "react";
import "../state/TamilNadu.css";
import tamilNaduImage from "../../assets/karnatakanew.png"; // Update the path as needed

const Karnataka  = () => {
    const priceHistory = [
        { year: "2020", price: "₹25/kg" },
        { year: "2021", price: "₹30/kg" },
        { year: "2022", price: "₹35/kg" },
        { year: "2023", price: "₹40/kg" },
        { year: "2024", price: "₹45/kg" },
      ];
    
      return (
        <div className="tamilnadu-page">
          <h1 className="tamilnadu-heading">ಕರ್ನಾಟಕ ತೆಂಗಿನಕಾಯಿ ಬೆಲೆ</h1>
          <p className="state-subheading">
        ಕಳೆದ ಕೆಲವು ವರ್ಷಗಳಲ್ಲಿ ಕರ್ನಾಟಕದ ತೆಂಗಿನಕಾಯಿ ಬೆಲೆಗಳ ಹಾದಿಯನ್ನು
        ತಿಳಿದುಕೊಳ್ಳಿ. ನೈಜ-ಸಮಯದ ಬೆಲೆಗಳನ್ನು ಅನ್ವೇಷಿಸಿ ಹಾಗೂ ಮಾರುಕಟ್ಟೆಯನ್ನು
        ಪ್ರಭಾವಿತಗೊಳಿಸುವ.
      </p>
     
          <div className="tamilnadu-content">
            <div className="tamilnadu-image">
              <img src={tamilNaduImage} alt="Tamil Nadu" />
              <p className="image-description">
              ತೆಂಗಿನಕಾಯಿ ಬೆಳೆ ಮತ್ತು ಉತ್ತಮ ಉತ್ಪಾದನೆಯಿಂದ ಪ್ರಸಿದ್ಧವಾದ ಕರ್ನಾಟಕ.
              </p>
            </div>
            <div className="state-table-container">
          <h2>ಬೆಲೆ ಇತಿಹಾಸ</h2>
          <table className="price-history-table">
            <thead>
                  <tr>
                    <th>Year</th>
                    <th>Price</th>
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
                 ನೈಜ-ಸಮಯದ ತೆಂಗಿನಕಾಯಿ ಬೆಲೆ ನೋಡಿ
                 </a>
          </div>
        </div>
      </div>
      <div className="additional-info">
        <h2>ತೆಂಗಿನಕಾಯಿ ಬೆಲೆಯನ್ನು ಪ್ರಭಾವಿಸುವ ಅಂಶಗಳು</h2>
        <ul>
          <li>ಹವಾಮಾನ ಪರಿಸ್ಥಿತಿಗಳು ಮತ್ತು ಋತುಚಕ್ರದ ಬದಲಾವಣೆಗಳು</li>
          <li>ರಫ್ತು ಅಗತ್ಯತೆಗಳು ಮತ್ತು ಜಾಗತಿಕ ತೆಂಗಿನಕಾಯಿ ಮಾರುಕಟ್ಟೆ ಪ್ರವೃತ್ತಿಗಳು</li>
          <li>ತೆಂಗಿನಕಾಯಿ ಆಧಾರಿತ ಉತ್ಪನ್ನಗಳ ಸ್ಥಳೀಯ ಬೇಡಿಕೆ</li>
          <li>ಕೃಷಿ ಮತ್ತು ಸಹಾಯಧನಗಳ ಕುರಿತ ಸರ್ಕಾರಿ ನೀತಿಗಳು</li>
        </ul>
        <div className="fun-fact">
          <h3>ನಿಮಗೆ ಗೊತ್ತೇ?</h3>
          <p>
            ಕರ್ನಾಟಕ ಭಾರತದ ಪ್ರಮುಖ ತೆಂಗಿನಕಾಯಿ ಉತ್ಪಾದಕರಲ್ಲೊಂದು, ದೇಶದ ಕೃಷಿ
            ಆರ್ಥಿಕತೆಗೆ ದೊಡ್ಡದಾದ ಕೊಡುಗೆ ನೀಡುತ್ತದೆ.
          </p>
        </div>
      </div>
    </div>
  );
};
export default Karnataka;