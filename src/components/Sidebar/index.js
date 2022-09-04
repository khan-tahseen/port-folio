import { Link, NavLink } from 'react-router-dom'
import './index.scss'
import LogoS from '../../assets/images/tahseen.png'
import LogoSubtitle from '../../assets/images/tahseenSubtitle.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin, faSkype } from '@fortawesome/free-brands-svg-icons'

const Sidebar = () => (
  <div className="nav-bar">
    <Link className="logo" to="/">
      <img src={LogoS} alt="logo" />
      <img className="sub-logo" src={LogoSubtitle} alt="tahseen" />
    </Link>
    <nav>
      <NavLink exact="true" activeclassname="active" to="/">
        <FontAwesomeIcon icon={faHome} color="#4d4d4e"></FontAwesomeIcon>
      </NavLink>
      <NavLink
        exact="true"
        activeclassname="active"
        className="about-link"
        to="/about"
      >
        <FontAwesomeIcon icon={faUser} color="#4d4d4e"></FontAwesomeIcon>
      </NavLink>
      <NavLink
        exact="true"
        activeclassname="active"
        className="contact-link"
        to="/contact"
      >
        <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e"></FontAwesomeIcon>
      </NavLink>
    </nav>
    <ul>
      <li>
        <a
          href="https://www.linkedin.com/in/tahseen-ahamad-486862192/"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon
            icon={faLinkedin}
            color="#4d4d4e"
            className="anchor-icon"
          />
        </a>
      </li>
      <li>
        <a
          href="https://github.com/khan-tahseen"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon
            icon={faGithub}
            color="#4d4d4e"
            className="anchor-icon"
          />
        </a>
      </li>
      <li>
        <a
          href="live:.cid.4c15d310081d94de"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon
            icon={faSkype}
            color="#4d4d4e"
            className="anchor-icon"
          />
        </a>
      </li>
    </ul>
  </div>
)

export default Sidebar
