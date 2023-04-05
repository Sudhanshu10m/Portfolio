import './side.scss'
import { Link, NavLink } from 'react-router-dom'
import Profilepicture from '../../assets/images/Profilepicture.JPG'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faHome,
  faEnvelope,
  faUser,
  faDiagramProject,
} from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

const Sidebar = () => (
  <div className="nav-bar">
    <Link className="logo" to="/">
      {/* <img src={Profilepicture} alt="logo" /> */}
    </Link>
    <nav>
      <NavLink exact="true" activeclassname="active" to="/">
        <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
      </NavLink>

      <NavLink
        exact="true"
        activeclassname="active"
        className="project-link"
        to="/projects"
      >
        <FontAwesomeIcon icon={faDiagramProject} color="#4d4d4e" />
      </NavLink>
    </nav>
    <ul>
      <li>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.linkedin.com/in/sudhanshu-vishwakarma-038749257/"
        >
          <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
        </a>
      </li>
      <li>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://github.com/Sudhanshu10m"
        >
          <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
        </a>
      </li>
      <li>
        <a
          target="_blank"
          rel="noreferrer"
          href="mailto:sudhanshuvishwakarma01@gmail.com"
        >
          <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
        </a>
      </li>
    </ul>
  </div>
)

export default Sidebar
