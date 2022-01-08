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
      </div>
    </div>
  )
}

export default Contact