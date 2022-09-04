import { useState } from 'react'
import Loader from 'react-loaders'
import { Link } from 'react-router-dom'
import Animatedletters from '../AnimatedLetters'
import './index.scss'

const Home = () => {
  const [letterClass] = useState('text-animate')
  const nameArray = ['T', 'a', 'h', 's', 'e', 'e', 'n']
  const jobArray = [
    'w',
    'e',
    'b',
    ' ',
    'd',
    'e',
    'v',
    'e',
    'l',
    'o',
    'p',
    'e',
    'r',
    '.',
  ]

  // useEffect(() => {
  //   return setTimeout(() => {
  //       setLetterClass('text-animate-hover')
  //   }, 4000)
  // }, [])

  return (
    <div className="container home-page">
      <div className="text-zone">
        <h1>
          <span className={letterClass}>H</span>
          <span className={`${letterClass} _12`}>i,</span>
          <br />
          <span className={`${letterClass} _13`}>I</span>
          <span className={`${letterClass} _14`}>'m</span>

          <Animatedletters
            letterClass={letterClass}
            strArray={nameArray}
            idx={16}
          />
          <br />
          <Animatedletters
            letterClass={letterClass}
            strArray={jobArray}
            idx={22}
          />
        </h1>
        <h2>Full Stack Developer / JavaScript Expert</h2>
        <Link to="/contact" className="flat-button">
          CONTACT ME
        </Link>
        <Link to="/about" className="flat-button">
          ABOUT
        </Link>
      </div>
      <Loader type='pacman' />
    </div>
  )
}

export default Home
