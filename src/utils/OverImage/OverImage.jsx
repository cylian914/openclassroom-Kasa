import "./OverImage.scss"

function OverImage({img, height, width, lazy, children}) { 
    return (<>
    <div className="OverImage" style={{"backgroundImage" : `url(${img})`, "height": `${height === undefined?"auto":height}`, "width": `${width === undefined?"auto":width}`, "loading": `${lazy == undefined?"eager":"lazy"}`}}>
        {children}
    </div>
    </>)
}

export default OverImage