import { Link } from "react-router"
import "./Error.scss"

function Err() {
    return (<><div className="Error">
        <h1 className="Error-404">404</h1>
        <h2 className="Error-msg">Oups! La page que vous demandez n'existe pas.</h2>
        <Link to="/"><h3 className="Error-link">Retourner sur la page d’accueil</h3></Link>
    </div></>)
}

export default Err