import React, { useState, useCallback, useEffect } from 'react'
import debounce from 'lodash/debounce';
import { swapiFetch } from './util/request'
import Search from './components/Search'
import List from './components/List'
import Logo from './assets/img/logo.png'
import './App.css'

function App () {
  const [list, setList] = useState([])
  const [search, setSearch] = useState([])
  const [info, setInfo] = useState(null)
  const [error, setError] = useState(null)

  const swapiList = useCallback(async () => {
    try {
      setInfo('')
      setError('')
      const response = await swapiFetch({
        method: 'GET',
        url: '/people/'
      })
      setList(response.results)
    } catch (error) {
      setError(error)
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
      if (searchTerm === '') return
      const response = await swapiFetch({
        method: 'GET',
        url: `/people/?search=${encodeURIComponent(searchTerm)}`,
      })
      setSearch(response.results)
    } catch (err) {
      setError(err)
    }
  }, 500)

  const swapiInfo = useCallback(async value => {
    let starships = [];
    if (value.starships.length > 0) {
      starships = await Promise.all(
        value.starships.map(async value => await swapiFetch({
          method: 'GET',
          url: value
        }))
      )
    }

    const payload = {
      ...value,
      starships
    }
    setInfo(payload)
    setSearch('')
  }, [])

  return (
    <div className="Container">
      {error && <div className="Container-Error"><p>{error}</p></div>}
      <div>
        <a href="/">
          <img alt="joker"
            className="poster"
            src={Logo}
            width="500"
            height="500"
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