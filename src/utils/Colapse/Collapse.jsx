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
                <h2 className={"Collapse-arrow Collapse-" + active}>&lt;</h2>
            </button>
            <div className={"Collapse-text Collapse-" + active}>{children}</div>
        </div>
    </>)
}

export default Collapse