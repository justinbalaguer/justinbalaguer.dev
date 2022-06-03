import './style.scss'

const Home = () => {
  return (
    <div id='home'>
      <article>
        <hgroup>
          <h4>Hi!<span id='emoji'>👋</span> I'm Justin.</h4>
          <h5>Developer based in Albay, Philippines.</h5>
        </hgroup>
      </article>
      <div>
        <h5>Socials 💻</h5>
        <p>tbd...</p>
      </div>
      <hr />
      <div className='crypto-section'>
        <h5>Crypto ₿</h5>
        <hgroup>
          <u>Monero (XMR)</u>
          <p>48cU2R5fJZZTyEJyjn4dbJRsBam7k3oNP9ZUdzjP6sYReqKELdDekpk92SNQxEAfFj924Zp9Fmm8yebe3JJmXYUk5wbgsjF</p>
        </hgroup>
      </div>
      <hr />
      <div>
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
      </div>
      <hr />
    </div>
  )
}

export default Home