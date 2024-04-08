import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useStoreDispatch } from '../redux/store'
import { getByCategory } from '../redux/reducers/getByCategory'

import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

export default function Category({ type }) {
  const dispatch = useStoreDispatch()

  const { allByCategory, error, status } = useSelector(state => state.poke)

  const navigate = useNavigate()

  useEffect(() => {
    dispatch(getByCategory(type))
  }, [dispatch])

  useEffect(() => {
    if (error) {
      navigate('/error')
    }
  }, [error])

  return (
    <div>
      {status !== 'resolved' ? (
        <div>Loading...</div>
      ) : (
        <div>
          {allByCategory.map(poke => (
            <Link
              key={poke.pokemon.name}
              to={`/${poke.pokemon.name}`}
              name={poke.pokemon.name}>
              {poke.pokemon.name}
              <br />
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}
