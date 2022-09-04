import { useRef, useState } from 'react'
import Loader from 'react-loaders'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import Animatedletters from '../AnimatedLetters'
import emailjs from '@emailjs/browser'
import './index.scss'

const Contact = () => {
  const [letterClass] = useState('text-animate')
  const refForm = useRef()

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs.sendForm('service_eklu85d', 'template_py0c8ah', refForm.current, 'qp9HMNNY8Cer9DTDY')
    .then((result) => {
      alert('Message successfully sent!')
      console.log(result.text);
      window.location.reload(false)
    }, (error) => {
      alert('Failed to send the message, please try again')
      console.log(error.text);
    })
  }

  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <Animatedletters
              letterClass={letterClass}
              strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
            I am interested in freelance opportunities - especially on ambitious
            or large projects. However, if you have any other requests or
            questions, don't hesitate to contact me using below form either.
          </p>
          <div className="contact-form">
            <form ref={refForm} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input type="text" name="name" placeholder="Name" required />
                </li>
                <li className="half">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    required
                  />
                </li>
                <li>
                  <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    required
                  />
                </li>
                <li>
                  <textarea
                    name="message"
                    placeholder="Message"
                    required
                  ></textarea>
                </li>
                <li>
                  <input type="submit" className="flat-button" value="SEND" />
                </li>
              </ul>
            </form>
          </div>
        </div>
        <div className='info-map'>
            Tahseen Ahamad,
            <br />
            New Delhi,
            <br />
            Jamia Millia Islamia, Okhla Vihar
            <br />
            <span>tahseenkhanit@gmail.com</span>
        </div>
        <div className='map-wrap'>
            <MapContainer center={[44.96366, 19.61045]} zoom={13}>
                <TileLayer url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'/>
                <Marker position={[44.96366, 19.61045]}>
                    <Popup>Tahseen lives here, come over for a cup of coffee :)</Popup>
                </Marker>
            </MapContainer>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Contact
