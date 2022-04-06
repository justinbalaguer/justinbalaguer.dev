import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Contact.scss'

const Contact = () => {
  return(
    <div className='content'>
      <div className='contact'>
        <div>
          <h3>Email:</h3>
          <FontAwesomeIcon icon={faEnvelope} />&nbsp;<a href='mailto:hello@justinbalaguer.dev'>hello&#64;justinbalaguer.dev</a>
        </div>
        <br />
        <div>
          <h3>Social:</h3>
          <div className='social-media'>
            <div>
              <a href='https://github.com/justinbalaguer' target='_blank' rel='noreferrer noopener'><FontAwesomeIcon icon={faGithub} />&nbsp;GitHub</a>
            </div>
            <div>
              <a href='https://twitter.com/ojintoji' target='_blank' rel='noreferrer noopener'><FontAwesomeIcon icon={faTwitter} />&nbsp;Twitter</a>
            </div>
            <div>
              <a href='https://www.linkedin.com/in/justinbalaguer/' target='_blank' rel='noreferrer noopener'><FontAwesomeIcon icon={faLinkedin} />&nbsp;LinkedIn</a>
            </div>
          </div>
        </div>
        <br />
        <div>
          <h3>Cryptocurrency:</h3>
          <p>
            <code>ETH: 0xb9dB50b933aE312ea4A55707e0a146c0c60bFb19</code>
          </p>
          <p>
            <code>BSC: 0x8548e0c0A044168Fe7dB72ea4AC6f3dD05C548dc</code>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Contact
