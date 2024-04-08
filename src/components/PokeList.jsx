import { useEffect, useState } from 'react'

import { useSelector } from 'react-redux'
import { useStoreDispatch } from '../redux/store'

import { getAll } from '../redux/reducers/getAll'

import { Link, useNavigate } from 'react-router-dom'

import Types from './Types'

const PokeList = () => {
  const pokePerPage = 50
  const navigate = useNavigate()

  const [currentPokeList, setCurrentPokeList] = useState([])
  const [lastPokeIndex, setLastPokeIndex] = useState(pokePerPage)

  const firstPokeIndex = lastPokeIndex - pokePerPage

  const dispatch = useStoreDispatch()

  const { allPokemon, status, error } = useSelector(state => state.poke)

  useEffect(() => {
    dispatch(getAll())
  }, [dispatch])

  useEffect(() => {
    if (error) {
      navigate('/error')
    }
  }, [error])

  useEffect(() => {
    if (allPokemon) {
      setCurrentPokeList(allPokemon.slice(firstPokeIndex, lastPokeIndex))
    }
  }, [allPokemon])

  useEffect(() => {
    document.addEventListener('scroll', scrollHandler)
    return function () {
      document.removeEventListener('scroll', scrollHandler)
    }
  })

  const scrollHandler = e => {
    if (
      e.target.documentElement.scrollHeight -
        (e.target.documentElement.scrollTop + window.innerHeight) <
        100 &&
      lastPokeIndex + pokePerPage < allPokemon.length
    ) {
      setLastPokeIndex(prev => prev + pokePerPage)

      setCurrentPokeList(allPokemon.slice(0, firstPokeIndex + lastPokeIndex))
    }
  }

  const handleSearch = e => {
    let filteredPoke = allPokemon.filter(poke => {
      return poke.name.toLowerCase().startsWith(e.target.value.toLowerCase())
    })

    setCurrentPokeList(filteredPoke)
  }

  return (
    <div className="container">
      <div>
        <form action="">
          <input type="text" name="" id="" onChange={e => handleSearch(e)} />
        </form>
      </div>
      <Types />
      {status !== 'resolved' ? (
        <div>Loading...</div>
      ) : (
        <div>
          {currentPokeList.map(item => (
            <Link key={item.name} to={`/${item.name}`} name={item.name}>
              {item.name}
              <br />
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}

export default PokeList
