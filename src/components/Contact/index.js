import { useEffect, useState } from 'react';
import Loader from 'react-loaders';
import AnimatedLetters from '../AnimatedLetters';
import './index.scss';

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              strArray={['C','o','n','t','a','c','t',' ','m','e','.']}
              index={15}
              letterClass={letterClass}
            />
          </h1>
          <p>If you have any requests or questions then please do not hesistate to contact me using the below form</p>
          <div className="contact-form">
            <form>
              <ul>
                <li className="half">
                  <input type="text" name="name" placeholder="Name" required />
                </li>
                <li className="half">
                  <input type="email" name="email" placeholder="Email" required />
                </li>
                <li className="half">
                  <input placeholder="Subject" type="text" name="subject" required />
                </li>
                <li className="half">
                  <textarea placeholder="Message" name="message" required />
                </li>
                <li className="half">
                  <input type="submit" className="flat-button" value="send" />
                </li>
              </ul>
            </form>
          </div>
        </div>
      </div>
    <Loader type="pacman" />
    </>
  )
}

export default Contact;
