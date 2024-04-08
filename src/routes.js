import { Route, Routes } from 'react-router-dom'

import NotFound from './pages/404'
import Homepage from './pages/Homepage'
import SinglePokePage from './pages/SinglePokePage'
import CategoryPage from './pages/CategoryPage'

export default () => (
  <Routes>
    <Route path="/" element={<Homepage />} />
    <Route path="/:name" element={<SinglePokePage />} />
    <Route path="type/:type" element={<CategoryPage />} />
    <Route path="/error" element={<NotFound />} />
  </Routes>
)
