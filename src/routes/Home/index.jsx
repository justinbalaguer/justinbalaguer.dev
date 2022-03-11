import './Home.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHand } from '@fortawesome/free-solid-svg-icons'

const Home = () => {
  return(
    <div className='content'>
      <div className='home'>
        <h1>Hello. <FontAwesomeIcon icon={faHand} /></h1>
        <h2>My name is Justin.</h2>
        <p>I am a web developer from Albay, Philippines. 
          Lately I have been coding a lot of frontend stuff using <a href='https://reactjs.org/' target='_blank' rel='noreferrer noopener'>ReactJS</a>. 
          I enjoy creating REST APIs and just random, cool, fun, little projects. 
          You can check my open source projects on <a href='https://github.com/justinbalaguer' target='_blank' rel='noreferrer noopener'>GitHub</a>.</p>
        <h3>Interests</h3>
        <p>GraphQL, Web3, TypeScript, Automation, Vim</p>
      </div>
    </div>
  )
}

export default Home
