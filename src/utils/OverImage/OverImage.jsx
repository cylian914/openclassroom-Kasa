import "./OverImage.scss"

function OverImage({img, height, width, lazy, children}) { 
    return (<>
    <div className="OverImage" style={{"backgroundImage" : `url(${img})`}}>
        {children}
    </div>
    </>)
}

export default OverImage