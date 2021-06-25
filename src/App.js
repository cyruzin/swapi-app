import React from 'react'

import useDebounce from './hooks/useDebounce'

import { swapiFetch } from './util/request'
import { BASE_URL } from './util/constants'

import Search from './components/Search'
import List from './components/List'
import Info from './components/Info'

import Logo from './assets/img/logo.png'

import './App.css'

function App() {
  const [loading, setLoading] = React.useState(false)
  const [list, setList] = React.useState([])
  const [search, setSearch] = React.useState([])
  const [info, setInfo] = React.useState(null)
  const [error, setError] = React.useState(null)
  const searchRef = React.createRef(null)
  const SWAPI_LIST = 'SWAPI_LIST'

  const swapiList = React.useCallback(async () => {
    try {
      setInfo('')
      setError('')
      setLoading(true)
      const response = await swapiFetch({
        method: 'GET',
        url: '/people/'
      })
      localStorage.setItem(SWAPI_LIST, JSON.stringify(response.results))
      setList(response.results)
    } catch (error) {
      setError(error)
    } finally {
      setLoading(false)
    }
  }, [])

  const listFromCache = React.useCallback(() => {
    try {
      setInfo('')
      setError('')
      setLoading(true)

      const result = JSON.parse(localStorage.getItem(SWAPI_LIST))

      if (result) setList(result)
      else swapiList()
    } catch (error) {
      setError(error)
    } finally {
      setLoading(false)
    }
  }, [swapiList]);

  React.useEffect(() => {
    listFromCache()
  }, [listFromCache])

  const swapiSearch = useDebounce(async (searchTerm) => {
    try {
      setSearch('')
      setInfo('')
      setError('')
      setLoading(true)
      if (searchTerm === '') return
      const response = await swapiFetch({
        method: 'GET',
        url: `/people/?search=${encodeURIComponent(searchTerm)}`,
      })
      setSearch(response.results)
    } catch (err) {
      setError(err)
    } finally {
      setLoading(false)
    }
  }, 500)

  const swapiInfo = React.useCallback(async value => {
    try {
      setLoading(true)
      setInfo(value)
      setSearch('')
    } catch (err) {
      setError(err)
    } finally {
      setLoading(false)
    }
  }, [])

  const onClear = () => {
    searchRef.current.value = ''
    setSearch([])
  }

  return (
    <div className="Container">
      {error && <div className="Container-Error"><p>{error}</p></div>}
      {loading && <div className="Container-Loading"><p>Loading...</p></div>}
      <div>
        <a href={BASE_URL}>
          <img
            alt="joker"
            className="Container-Img"
            src={Logo}
          />
        </a>

        <p className="Container-Info Container-Info-Text">By Cyro Dubeux</p>
        <p className="Container-Info">
          <a
            className="Container-Link"
            href="https://github.com/cyruzin/swapi-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </p>
      </div>

      <div className="Content">
        <Search
          onKeyUp={swapiSearch}
          onClick={swapiInfo}
          onClear={onClear}
          results={search}
          ref={searchRef}
        />
        {!info && <List info={list} onClick={swapiInfo} />}
        {<Info info={info} />}
      </div>
    </div >
  );
}

export default App