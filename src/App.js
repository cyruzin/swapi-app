import React, {
  useState,
  useCallback,
  useEffect
} from 'react';

import debounce from 'lodash/debounce';

import { swapiFetch } from './util/request'
import { BASE_URL } from './util/constants'

import Search from './components/Search'
import List from './components/List'

import Logo from './assets/img/logo.png'

import './App.css'

function App () {
  const [loading, setLoading] = useState(false)
  const [list, setList] = useState([])
  const [search, setSearch] = useState([])
  const [info, setInfo] = useState(null)
  const [error, setError] = useState(null)


  const swapiList = useCallback(async () => {
    try {
      setInfo('')
      setError('')
      setLoading(true)
      const response = await swapiFetch({
        method: 'GET',
        url: '/people/'
      })
      setList(response.results)
    } catch (error) {
      setError(error)
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    swapiList()
  }, [swapiList])

  const swapiSearch = debounce(async (searchTerm) => {
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

  const swapiInfo = useCallback(async value => {
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

        <p className="Container-Info">By Cyro Dubeux</p>
        <p className="Container-Info">
          <a
            className="Container-Link"
            href="https://github.com/cyruzin"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </p>
      </div>

      <div>
        <Search
          onKeyUp={swapiSearch}
          onClick={swapiInfo}
          results={search}
          info={info}
        />
        {!info && <List info={list} onClick={swapiInfo} />}
      </div>
    </div >
  );
}

export default App