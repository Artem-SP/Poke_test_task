import { useEffect } from 'react'

import { useSelector } from 'react-redux'
import { useStoreDispatch } from '../redux/store'

import { getTypes } from '../redux/reducers/getTypes'

import { Link } from 'react-router-dom'

const Types = () => {
  const dispatch = useStoreDispatch()

  const { types, status } = useSelector(state => state.poke)

  useEffect(() => {
    dispatch(getTypes())
  }, [dispatch])

  return (
    <div className="container">
      {status !== 'resolved' ? (
        <div>Loading...</div>
      ) : (
        <div>
          {types.map(item => (
            <Link key={item.name} to={`type/${item.name}`} type={item.name}>
              {item.name}
              <br />
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}

export default Types
