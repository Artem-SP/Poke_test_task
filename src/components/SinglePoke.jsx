import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useStoreDispatch } from '../redux/store'
import { getSinglePoke } from '../redux/reducers/getSinglePoke'
import { useNavigate } from 'react-router-dom'

export default function SinglePoke({ name }) {
  const dispatch = useStoreDispatch()
  const navigate = useNavigate()

  const { singlePoke, error, status } = useSelector(state => state.poke)

  useEffect(() => {
    dispatch(getSinglePoke(name))
  }, [dispatch])

  useEffect(() => {
    if (error) {
      navigate('/error')
    }
  }, [error])

  return (
    <>
      {status !== 'resolved' ? (
        <div>Loading...</div>
      ) : (
        <div>
          <h1>{name}</h1>
          <img src={singlePoke.immageUrl} alt="" srcSet="" />
          <h3>Moves</h3>
          <div>
            {singlePoke?.moves?.map(it => (
              <span key={it}>{it}, </span>
            ))}
          </div>
          <h3>Stats</h3>

          <div>
            {singlePoke?.stats?.map(it => (
              <div key={it.name}>
                <div>{it.name}</div>
                <div>{it.base_stat}</div>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  )
}
