import './index.scss'
import { Link } from 'react-router-dom'
import AnimatedLetters from '../AnimatedLetters/animatedLetters'
import { useState, useEffect } from 'react'
import Skills from '../Skills/skills'

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const nameArray = ['S', 'u', 'd', 'h', 'a', 'n', 's', 'h', 'u']
  const jobArray = [
    'W',
    'e',
    'b',
    ' ',
    'D',
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

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000) //SOME PROBLEM HERE
  }, [])

  return (
    <div className="home-page">
      <div className="text-zone">
        <h1>
          <span className={letterClass}>H</span>
          <span className={`${letterClass} _12`}>i</span>
          <span className={`${letterClass} _13`}>,</span>
          <br />
          <span className={`${letterClass} _15`}>I</span>
          <span className={`${letterClass} _16`}>'</span>
          <span className={`${letterClass} _17`}>m</span>
          &nbsp;
          <AnimatedLetters
            letterClass={letterClass}
            strArray={nameArray}
            idx={19}
          />
          <br />
          <AnimatedLetters
            letterClass={letterClass}
            strArray={jobArray}
            idx={29}
          />
        </h1>
        <h2>Frontend Developer / Tech Enthusiast</h2>
        {/* <Link to="/contact" className="flat-button">
          CONTACT ME
        </Link> */}
      </div>
      <Skills />
    </div>
  )
}

export default Home
