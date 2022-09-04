import { faAngular, faCss3, faGitAlt, faHtml5, faJsSquare, faReact } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react'
import Animatedletters from '../AnimatedLetters'
import Loader from 'react-loaders'
import './index.scss'

const About = () => {
  const [letterClass] = useState('text-animate');

//   useEffect(() => {
//     return setTimeout(() => {
//         setLetterClass('text-animate-hover')
//     }, 4000)
//   }, [])

  return (
    <div className="container about-page">
      <div className="text-zone">
        <h1>
          <Animatedletters
          letterClass={letterClass}
            strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
            idx={15}
          />
        </h1>
        <p>
            I'm very ambitious full stack developer looking for a role in established
            IT company with the opportunity to work with the latest technologies
            on challenging and diverse projects. 
        </p>
        <p>
            I'm quietly confident, naturally curious, and prepetually working on
            improving my chops one design problem at a time.
        </p>
      </div>

      <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faAngular} color="#DD0031" />
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
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
            </div>
          </div>
        </div>
    <Loader type='pacman' />
    </div>
  )
}

export default About