import "./OverImage.scss"

function OverImage({img, children}) { 
    return (<>
    <div className="OverImage" style={{"backgroundImage" : `url(${img})`}}>
        <div className="OverImage-chld-container">
            {children}
        </div>
    </div>
    </>)
}

export default OverImage