import React, { useState } from "react";
import Logo from "../../image/Screenshot 2023-11-01 at 23.00.02.png";

const Header = () => {
  const [selectedLanguage, setSelectedLanguage] = useState("Uzbek");

  const handleLanguageChange = (e) => {
    setSelectedLanguage(e.target.value);
  };

  return (
    <div>
      <div className="header">
        <div className="container">
          <div className="headerMain">
            <div className="headerLeft">
              <div className="headerImage">
                <img src={Logo} alt="" />
              </div>
              <div className="headerWords">
                <ul>
                  <li>
                    <a href="#">Maktablar</a>
                  </li>
                  <li>
                    <a href="#">Digital Olmazor</a>
                  </li>
                  <li>
                    <a href="#">Yangiliklar</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="headerRight">
              <div className="headerWords">
                <ul>
                  <li>
                    <a href="#">Online kutubxona</a>
                  </li>
                  <li>
                    <select
                      value={selectedLanguage}
                      onChange={handleLanguageChange}
                    >
                      <option value="English">Eng</option>
                      <option value="Uzbek">O'z</option>
                    </select>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
