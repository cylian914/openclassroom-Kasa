import Collapse from "../../utils/Colapse/Collapse"
import "./Propos.scss"

function Propos() {
    return (<>
        <img className="propos-img" src="src/assets/ProposBgImg.png" alt="todo" />
        <Collapse title={"Fiabilité"} ><h2>Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.</h2></Collapse>
        <Collapse title={"Respect"} > <h2>La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.</h2></Collapse>
        <Collapse title={"Service"} > <h2>La qualité du service est au cœur de notre engagement chez Kasa. Nous veillons à ce que chaque interaction, que ce soit avec nos hôtes ou nos locataires, soit empreinte de respect et de bienveillance.</h2></Collapse>
    </>)
}

export default Propos