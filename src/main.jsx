import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from "react-router";
import './index.scss'
import Accueil from './Accueil.jsx'
import Err from './Error.jsx'
import Propos from './Propos.jsx'
import PageHeader from './PageHeader.jsx';
import Logment from './Logement.jsx';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route element={<PageHeader />}>
        <Route>
          <Route index element={<Accueil />} />
          <Route path='/propos' element={<Propos />} />
        </Route>
        <Route path='logement/:id'element={<Logment />}/>
        
        {/*404*/}
        <Route path='/*' element={<Err />} />
      </Route>
    </Routes>
  </BrowserRouter>,
)
