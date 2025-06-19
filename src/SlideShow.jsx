import { useState } from "react"
import "./SlideShow.scss"
import OverImage from "./OverImage";

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
                {images.length > 1 ?
                    <>
                    <div className="OverImage-Mid Carousel-nav">
                        <button onClick={previousImage}>&lt;</button>
                        <button onClick={nextImage}>&gt;</button>
                    </div>
                    <div className="OverImage-Bottom Carousel-nav-txt">
                        <h3>{indexImage + 1}/{images.length}</h3>
                    </div>
                    </>
                    : null}
            </OverImage>
        </div>
    </>)
}

export default SlideShow