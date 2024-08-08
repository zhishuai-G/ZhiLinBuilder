import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Builder from './pages/builder'
import Render from './pages/render'

function App() {
  
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Builder />} />
          <Route path='/render' element={<Render />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App