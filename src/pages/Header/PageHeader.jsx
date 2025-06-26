import { NavLink, Outlet } from "react-router"
import './PageHeader.scss'

function PageHeader() {
    return (<>
    <header>
      <img src="/src/assets/LOGO.png" alt="Kasa logo"/>
      <ul>
        <li><NavLink id="Accueil-btn" to={'/'}>Accueil</NavLink></li>
        <li><NavLink id="Propos-btn" to={'/propos'}>Propos</NavLink></li>
      </ul>
    </header>
    <div id="actualPage">
      <Outlet />
    </div> 
    </>)
}

export default PageHeader