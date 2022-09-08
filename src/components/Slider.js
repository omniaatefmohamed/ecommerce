import image1 from '../images/image1.jpg';
import image2 from '../images/image2.jpg'
import "./../css/slider.css"

function Slider() {
    return (
        <>
            <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={image1} className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src={image2} className="d-block w-100" alt="..." />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Slider;