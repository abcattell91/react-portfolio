import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './index.scss'; // index from inside Home folder
import LogoTitle from '../../assets/images/letter-a.png'
import AnimatedLetters from '../AnimatedLetters';
import Logo from './Logo'
import Loader from 'react-loaders';

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const nameArray = 'lex'.split('');
  const jobArray = 'Web Developer'.split('');

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
  }, [])

  return (
    <>
    <div className='container home-page'>
      <div className='text-zone'>
        <h1>
        <span className={letterClass}>H</span>
        <span className={`${letterClass} _12`}>i,</span>
        <br />
        <span className={`${letterClass} _13`}>I</span>
        <span className={`${letterClass} _14`}>'m</span>

        <img className="logo-spin" src={LogoTitle} alt="developer" />
        <AnimatedLetters letterClass={letterClass}
        strArray={nameArray}
        index={15} />
        <br />
        <AnimatedLetters letterClass={letterClass}
        strArray={jobArray}
        index={18} />
        </h1>
        <h2>Fullstack Developer</h2>
        <Link to="/contact" className="flat-button">Contact Me</Link>
      </div>
      <Logo />
    </div>
    <Loader type="pacman" />
    </>
  )
}

export default Home;