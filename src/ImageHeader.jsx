import { Outlet, useLocation } from "react-router";
import "./ImageHeader.scss"

function ImageHeader() { 
    return (<>
    {console.log(useLocation().pathname)}
    <img id="imageHeader" src={useLocation().pathname == "/"?"src/assets/AccueilBgImg.png":"src/assets/ProposBgImg.png"} alt=""/>
    <Outlet />
    </>)
}

export default ImageHeader