import './index.scss'
import React, { useEffect, useState } from 'react';
import Loader from 'react-loaders';
import AnimatedLetters from '../AnimatedLetters';
import portfolioData from '../../data/portfolio.json'

const Portfolio = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  const renderPortfolio = (portfolio) => {
    return (
      <div className="images-container">
        {
          portfolio.map((port, idx) => {
            return (
              <div key={idx} className="image-box">
                <img src={port.cover} alt="portfolio cover"
                  className="portfolio-image"
                />
                <div className="content">
                  <p className="title">{port.title}</p>
                  <h4 className="description">{port.description}</h4>
                  <button className="button" onClick={() => {window.open(port.url)}}>View</button>
                </div>
              </div>
            )
          })
        }
      </div>
    )
  }

  return (
    <>
      <div className="container portfolio-page">
        <h1 className="page-title">
          <AnimatedLetters
            letterClass={letterClass}
            strArray={"Portfolio".split("")}
            index={15}
          />
        </h1>
        <div>{renderPortfolio(portfolioData.portfolio)}</div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Portfolio;
