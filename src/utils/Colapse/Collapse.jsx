import { useState } from "react"
import "./Collapse.scss"

function Collapse({ title, children }) {
    const [active, setActive] = useState('hide')

    const changeState = () => {
       setActive(active === "show"?"hide":"show"); 
    }

    return (<>
        <div className="Collapse">
            <button className="Collapse-multp" onClick={changeState}>
                <h2 className="Collapse-title">{title}</h2>
                <img src="/src/assets/ArrowCollapse.png" className={"Collapse-arrow Collapse-" + active}></img>
            </button>
            <div className={"Collapse-text Collapse-" + active}>{children}</div>
        </div>
    </>)
}

export default Collapse