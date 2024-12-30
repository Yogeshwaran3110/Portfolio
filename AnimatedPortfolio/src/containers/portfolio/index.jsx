import React from "react";
import PageHeaderContent from "../../components/pageHeaderContent";
import { BsInfoCircleFill } from "react-icons/bs";
import ImageOne from "../../images/hotel.jpeg";
import ImageTwo from "../../images/Login.png";
import ImageThree from "../../images/race.jpeg";

import "./styles.scss";
import { useState } from "react";

const portfolioData = [
  {
    id: 2,
    name: "HOTEL",
    image: ImageOne,
    link: "https://github.com/parthasarathi-FullstackDeveloper/hotel_Management",
  },
  {
    id: 2,
    name: "SECURE LOGIN",
    link: "https://github.com/parthasarathi-FullstackDeveloper/UUID-Generator",
    image: ImageTwo,
  },
  {
    id: 2,
    name: "LAP COUNT ",
    image: ImageThree,
    link: "https://github.com/parthasarathi-FullstackDeveloper/LapCount",
  },
];

const filterData = [
  {
    filterId: 2,
    label: "Developement",
  },
];

const Portfolio = () => {
  const [filteredvalue, setFilteredValue] = useState(1);
  const [hoveredValue, setHoveredValue] = useState(null);

  function handleFilter(currentId) {
    setFilteredValue(currentId);
  }

  function handleHover(index) {
    setHoveredValue(index);
  }


  const filteredItems =
    filteredvalue === 1
      ? portfolioData
      : portfolioData.filter((item) => item.id === filteredvalue);

  return (
    <section id="portfolio" className="portfolio">
      <PageHeaderContent
        headerText="Projects"
        icon={<BsInfoCircleFill size={40} />}
      />
      <div className="portfolio__content">
        <ul className="portfolio__content__filter">
          {filterData.map((item) => (
            <li
              className={item.filterId === filteredvalue ? "active" : ""}
              onClick={() => handleFilter(item.filterId)}
              key={item.filterId}
            >
              {item.label}
            </li>
          ))}
        </ul>
        <div className="portfolio__content__cards">
          {filteredItems.map((item, index) => (
            <div
              className="portfolio__content__cards__item"
              key={`cardItem${item.name.trim()}`}
              onMouseEnter={() => handleHover(index)}
              onMouseLeave={() => handleHover(null)}
            >
              <div className="portfolio__content__cards__item__img-wrapper">
                <a>
                  <img alt="dummy data" src={item.image} />
                </a>
              </div>
              <div className="overlay">
                {index === hoveredValue && (
                  <div>
                    <p>{item.name}</p>
                    <a href={item.link} target="_blank">

                    
                    <button>Visit</button>
                    </a>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Portfolio;
