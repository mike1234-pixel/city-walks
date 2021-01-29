import React from "react"
import { MDBCarousel, MDBCarouselCaption, MDBCarouselInner, MDBCarouselItem, MDBView, MDBMask, MDBContainer } from "mdbreact"
import carouselImage1 from "./carousel-images/carousel-illustration-1-2.jpg"
import carouselImage2 from "./carousel-images/carousel-illustration-2-2.jpg"
import carouselImage3 from "./carousel-images/carousel-illustration-3-2.jpg"
import './Carousel.css'

const Carousel = () => {
  return (
    <MDBContainer className="carousel-container">
      <MDBCarousel
      activeItem={1}
      length={3}
      showControls={true}
      showIndicators={true}
      className="z-depth-1"
    >
      <MDBCarouselInner>
        <MDBCarouselItem itemId="1">
          <MDBView>
            <img
              className="d-block w-100 carousel-img"
              src={carouselImage1}
              alt="First slide"
            />
          <MDBMask />
          </MDBView>
          <MDBCarouselCaption>
            <h3 className="h3-responsive">Explore</h3>
            <p>First text</p>
          </MDBCarouselCaption>
        </MDBCarouselItem>
        <MDBCarouselItem itemId="2">
          <MDBView>
            <img
              className="d-block w-100 carousel-img"
              src={carouselImage2}
              alt="Second slide"
            />
          <MDBMask />
          </MDBView>
          <MDBCarouselCaption>
            <h3 className="h3-responsive">Strong mask</h3>
            <p>Second text</p>
          </MDBCarouselCaption>
        </MDBCarouselItem>
        <MDBCarouselItem itemId="3">
          <MDBView>
            <img
              className="d-block w-100 carousel-img"
              src={carouselImage3}
              alt="Third slide"
            />
          <MDBMask overlay="black-slight" />
          </MDBView>
          <MDBCarouselCaption>
            <h3 className="h3-responsive">Slight Mast</h3>
            <p>Third text</p>
          </MDBCarouselCaption>
        </MDBCarouselItem>
      </MDBCarouselInner>
    </MDBCarousel>
    </MDBContainer>
  );
}

export default Carousel;