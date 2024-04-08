import { useParams } from 'react-router-dom'
import Category from '../components/Category'

export default function CategoryPage() {
  const { type } = useParams()

  return <Category type={type} />
}
