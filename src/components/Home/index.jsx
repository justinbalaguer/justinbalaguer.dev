import './style.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'

const Home = () => {
  return (
    <div id='home'>
      <article>
        <hgroup>
          <h4>Hi!<span id='emoji'>👋</span> I'm Justin.</h4>
          <h5>Developer based in Albay, Philippines.</h5>
        </hgroup>
      </article>
      <article>
        <h5>Contact 📧</h5>
        <div>
          <a href='mailto:hello@justinbalaguer.dev'>hello@justinbalaguer.dev</a>
        </div>
        <div>
          <a href='https://matrix.to/#/@ojintoji:matrix.org' target='_blank' rel='noreferrer'>@ojintoji:matrix.org</a>
        </div>
      </article>
      <article>
        <h5>Socials 💻</h5>
        <div>
          <a href='https://github.com/justinbalaguer' target='_blank' rel='noreferrer'>
            <FontAwesomeIcon icon={faGithub} />&nbsp;
          </a>
          <a href='https://github.com/justinbalaguer' target='_blank' rel='noreferrer'>@justinbalaguer</a>
        </div>
        <div>
          <a href='https://www.linkedin.com/in/justinbalaguer/' target='_blank' rel='noreferrer'>
            <FontAwesomeIcon icon={faLinkedin} />&nbsp;
          </a>
          <a href='https://www.linkedin.com/in/justinbalaguer/' target='_blank' rel='noreferrer'>@justinbalaguer</a>
        </div>
        <div>
          <a href='https://twitter.com/ojintoji' target='_blank' rel='noreferrer'>
            <FontAwesomeIcon icon={faTwitter} />&nbsp;
          </a>
          <a href='https://twitter.com/ojintoji' target='_blank' rel='noreferrer'>@ojintoji</a>
        </div>
      </article>
      <article className='crypto-section'>
        <h5>Crypto ₿</h5>
        <hgroup>
          <u>Monero (XMR)</u>
          <p>48cU2R5fJZZTyEJyjn4dbJRsBam7k3oNP9ZUdzjP6sYReqKELdDekpk92SNQxEAfFj924Zp9Fmm8yebe3JJmXYUk5wbgsjF</p>
        </hgroup>
      </article>
      <article>
        <h5>Bio 📃</h5>
        <hgroup>
          <u>2022 - present</u>
          <p>Full Stack Developer at <a href='https://beta.sparkpoint.io' target='_blank' rel='noreferrer'>SparkPoint Technologies Inc.</a></p>
        </hgroup>
        <hgroup>
          <u>2021 - 2022</u>
          <p>Full Stack Developer at <a href='https://www.geniusgiant.com/' target='_blank' rel='noreferrer'>GeniusGiant Website Development &amp; QA Services</a></p>
        </hgroup>
        <hgroup>
          <u>2019 - 2020</u>
          <p>Developer at <a href='https://across.ph/' target='_blank' rel='noreferrer'>Across Media IT Solutions</a></p>
        </hgroup>
      </article>
      <hr />
    </div>
  )
}

export default Home