import { useEffect, useRef, useState } from 'react';
import { auth, storage, db } from '../../firebase';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { addDoc } from 'firebase/firestore';
import { collection } from 'firebase/firestore';
import './index.scss';
import AnimatedLetters from '../AnimatedLetters';
import Loader from 'react-loaders';


const Home = () => {
    const form = useRef();

    const submitPortfolio = (e) => {
        e.preventDefault();
        const name = form.current[0]?.value;
        const description = form.current[1]?.value;
        const url = form.current[2]?.value;
        const image = form.current[3]?.files[0];

        const storageRef = ref(storage, `portfolio/${image.name}`);

        uploadBytes(storageRef, image).then(
            (snapshot) => {
                getDownloadURL(snapshot.ref).then((downloadUrl) => {
                    savePortfolio({
                        name,
                        description,
                        url,
                        image: downloadUrl
                    })
                }, (error) => {
                    console.log(error);
                    savePortfolio({
                        name,
                        description,
                        url,
                        image: null
                    })
                })
            }, (error) => {
                console.log(error);
                savePortfolio({
                    name,
                    description,
                    url,
                    image: null
                })
            }
        )
    }

    const savePortfolio = async (portfolio) => {
        try {
            await addDoc(collection(db, 'portfolio'), portfolio);
            window.location.reload(false);
        } catch (error) {
            alert('Failed to add portfolio');
        }
    }

    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
      setTimeout(() => {
        setLetterClass('text-animate-hover')
      }, 3000)
    }, [])

    return (
      <>
        <div className="container portfolio-submit-page">
          <div className="text-zone">
            <h1 className="page-title">
              <AnimatedLetters
                letterClass={letterClass}
                strArray={"Submit Item".split("")}
                index={15}
              />
            </h1>
              <div className="portfolio-form">
                <form ref={form} onSubmit={submitPortfolio}>
                  <ul>
                    <li className="half"><input type="text" placeholder="Name" /></li>
                    <li className="half"><textarea placeholder="Description" /></li>
                    <li className="half"><input type="text" placeholder="Url" /></li>
                    <li className="half"><input type="file" placeholder="Image" /></li>
                    <li className="half"><button type="submit" className="flat-button">Submit</button></li>
                    <li className="half"><button onClick={() => auth.signOut()} className="flat-button">Sign out</button></li>
                  </ul>
                </form>
              </div>
            </div>
          </div>
        <Loader type="pacman" />
        </>
    )
}

export default Home;
