import './index.scss'
import AnimatedLetters from '../AnimatedLetters';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCss3, faGitAlt, faHtml5, faJsSquare, faReact} from '@fortawesome/free-brands-svg-icons';
import Loader from 'react-loaders';
import Ruby from '../../assets/images/rails-logo.png'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  return (
      <>
    <div className="container about-page">
      <div className="text-zone">
        <h1>
          <AnimatedLetters
            letterClass={letterClass}
            strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
            index={15}
          />
        </h1>
        <p>I am a software developer who has just finished the Web Development course at Le Wagon (July 2022). When not programming, I am a Professional Musician and teacher working in London and throughout the UK.</p>
        <p>As a developer I love to problem-solve. My training as a classical musician means I am comfortable learning new languages, mastering skills and performing in high pressure environments. I bring a clear and focussed approach to programming. I've worked in music education for the past 10 years and I believe in the importance of continuous learning. I enjoy working in a team who are as motivated and excited about programming as I am. When not at a computer you'll find me going on walks with my Shiba Inu, Ruby!</p>
      </div>
      <div className="cube-container">
        <div className="stage-cube-cont">
          <div className='cubespinner'>
            <div className="face1">
              <img src={Ruby} alt="Ruby" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faJsSquare} color="#EFd81D" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faGitAlt} color="#EC4E28" />
            </div>
          </div>
        </div>
      </div>
      {/* <div className="blank"></div> */}
    </div>
    <Loader type="pacman" />
    </>
  )
}

export default About;
