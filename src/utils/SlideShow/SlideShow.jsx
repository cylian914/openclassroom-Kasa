import { useState } from "react"
import "./SlideShow.scss"
import OverImage from "../OverImage/OverImage";

function SlideShow({ images, height }) {
    const [indexImage, setIndexImage] = useState(0);

    const setImage = (id) => {
        setIndexImage(id);
    }

    const previousImage = () => {
        setImage((indexImage - 1) < 0 ? (images.length - 1) : (indexImage - 1));
    }

    const nextImage = () => {
        setImage((indexImage + 1) % images.length);
    }

    return (<>
        <div className="Carousel">
            <OverImage img={images[indexImage]} height={height}>
                { <>
                    <div className="OverImage-Mid Carousel-nav" style={{'visibility': `${images.length > 1?"show":"hidden"}`}}>
                        <button onClick={previousImage}><img src="/src/assets/SlideShowNav/Left.png"></img></button>
                        <button onClick={nextImage}><img src="/src/assets/SlideShowNav/Right.png"></img></button>
                    </div>
                    <div className="OverImage-Bottom Carousel-nav-txt" style={{'visibility': `${images.length > 1?"show":"hidden"}`}}>
                        <h3>{indexImage + 1}/{images.length}</h3>
                    </div>
                    </>}
            </OverImage>
        </div>
    </>)
}

export default SlideShow