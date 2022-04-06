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
  const [themeDark, setThemeDark] = useState(true)

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

  const toggle = () => {
    document.querySelector("html").getAttribute("data-theme") === 'light' ?
    (document.querySelector("html").setAttribute("data-theme", "dark"), setThemeIcon("🌙"), setThemeDark(true)) :
    (document.querySelector("html").setAttribute("data-theme", "light"), setThemeIcon("☀️"), setThemeDark(false))
  }

  useMemo(() => getData(), [])

  return (
    <div className="App">
      {/* <Announcement /> */}
      <Navigation />
      <br />
      <div className="theme">
        <input type="checkbox" id="switch" name="switch" role="switch"  onChange={toggle} checked={themeDark ? true : false} />&nbsp;{themeIcon}
      </div>
      <Routes>
        <Route exact path='/' element={<Contact />}></Route>
        <Route exact path='/projects' element={<Projects repos={repos} />}></Route>
        <Route path='*' element={<p>Not found</p>}></Route>
      </Routes>
    </div>
  );
}

export default App;
