import { Link, NavLink } from 'react-router-dom';
import { useState } from 'react';
import './index.scss'; // index from inside sidebar folder
import lettera from '../../assets/images/letter-a.png';
import logoSub from '../../assets/images/logoSub.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faHome, faUser, faEnvelope, faSuitcase, faGear, faBars, faClose } from '@fortawesome/free-solid-svg-icons'

const Sidebar = () => {
  const [showNav, setShowNav] = useState(false);

  return (
    <div className="nav-bar">
      <Link className='logo' to='/'>
      <img src={lettera} alt="logo" />
      <img className='sublogo' src={logoSub} alt="logoSubtitle" />
    </Link>
      <nav className={showNav ? 'mobile-show' : ''}>
      <NavLink onClick={() => setShowNav(false)} exact="true" activeclassname='active' to="/">
        <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
      </NavLink>

      <NavLink onClick={() => setShowNav(false)} exact="true" activeclassname='active' className='about-link' to="/about">
        <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
      </NavLink>

      <NavLink onClick={() => setShowNav(false)} exact="true" activeclassname='active' className='contact-link' to="/contact">
        <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
      </NavLink>

      <NavLink onClick={() => setShowNav(false)} exact="true" activeclassname='active' className='portfolio-link' to="/portfolio">
        <FontAwesomeIcon icon={faSuitcase} color="#4d4d4e" />
      </NavLink>

      <FontAwesomeIcon onClick={() => setShowNav(false)} icon={faClose} color="#4d4d4e" size="3x" className="close-icon" />
      </nav>
      <ul>
      <li>
        <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/alexandercattell/">
          <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" className="anchor-icon" />
        </a>
      </li>
      <li>
        <a target="_blank" rel="noreferrer" href="https://github.com/abcattell91">
          <FontAwesomeIcon icon={faGithub} color="#4d4d4e" className="anchor-icon" />
        </a>
      </li>
      <li>
        <NavLink exact="true" activeclassname='active' to="/dashboard">
          <FontAwesomeIcon icon={faGear} color="#4d4d4e" className="anchor-icon" />
        </NavLink>
      </li>
      </ul>
      <FontAwesomeIcon
          onClick={() => setShowNav(true)}
          icon={faBars}
          color="#fca311"
          size="3x"
          className='hamburger-icon' />
    </div>
  )
}

export default Sidebar
