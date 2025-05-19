import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from "react-router";
import './index.scss'
import Accueil from './Accueil.jsx'
import Err from './Error.jsx'
import Propos from './Propos.jsx'
import ImageHeader from './ImageHeader.jsx'
import PageHeader from './PageHeader.jsx';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route element={<PageHeader />}>
        <Route element={<ImageHeader />}>
          <Route index element={<Accueil />} />
          <Route path='/propos' element={<Propos />} />
        </Route>
        <Route path='logement/:id'/>
        {/*404*/}
        <Route path='/*' element={<Err />} />
      </Route>
    </Routes>
  </BrowserRouter>,
)
