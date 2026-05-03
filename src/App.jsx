// import { BrowserRouter, Routes, Route } from 'react-router'
import { createHashRouter, RouterProvider } from 'react-router'

import Home from './pages/Home'
import Invitaciones from './pages/Invitaciones'
import IsaiLupita from './pages/Invitaciones/IsaiLupita'
import 'bootstrap/dist/css/bootstrap.min.css';
// import './App.css'

const router = createHashRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/invitaciones',
    element: <Invitaciones />,
  },
  {
    path: '/invitaciones/isai-y-lupita',
    element: <IsaiLupita />,
  }
])

function App() {
  return <RouterProvider router={router} />
}

// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/invitaciones" element={<Invitaciones />} />
//         <Route path="invitaciones/isai-y-lupita" element={<IsaiLupita />} />
//       </Routes>
//     </BrowserRouter>
//   )
// }

export default App
