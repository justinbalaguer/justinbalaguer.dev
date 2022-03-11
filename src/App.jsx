import './App.scss';
import { Navigation } from './components/Navigation'
import { Routes, Route } from 'react-router-dom'
import { Home, Projects, Contact } from './routes'
import { useState, useMemo } from 'react'
import axios from 'axios'
import { Announcement } from './components';

const App = () => {

  const [repos, setRepos] = useState(null)
  const [themeIcon, setThemeIcon] = useState('☀️')

  const getData = () => {
    const options = {
      method: 'POST',
      url: 'https://api.github.com/graphql',
      headers: {
        Authorization: import.meta.env.VITE_GITHUB_ACCESS_TOKEN,
        Accept: 'application/vnd.github.v4.idl'
      },
      data: {
        query: `{
          user(login: "justinbalaguer") {
            pinnedItems(first: 6, types: [REPOSITORY]) {
              totalCount
              edges {
                node {
                  ... on Repository {
                    name
                    url
                    description
                  }
                }
              }
            }
          }
        }`
      }
    }

  axios
    .request(options)
    .then(function(response) {
      const res = response.data
      setRepos(res)
    })
    .catch(function (error){
      console.error(error)
    })
  }

  useMemo(() => getData(), [])

  return (
    <div className="App">
      <Announcement />
      <Navigation />
      <br />
      <div className="theme">
        <input type="checkbox" id="switch" name="switch" role="switch"  onChange={() => 
          document.querySelector("html").getAttribute("data-theme") === 'light' ?
          (document.querySelector("html").setAttribute("data-theme", "dark"), setThemeIcon('🌙')) :
          (document.querySelector("html").setAttribute("data-theme", "light"), setThemeIcon('☀️'))
        } />&nbsp;{themeIcon}
        </div>
      <Routes>
        <Route exact path='/' element={<Home />}></Route>
        <Route exact path='/projects' element={<Projects repos={repos} />}></Route>
        <Route exact path='/contact' element={<Contact />}></Route>
      </Routes>
    </div>
  );
}

export default App;
