import React from "react"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from "react-responsive-carousel"
import ClientReviewCard from "../ClientReviewCard/ClientReviewCard"
import styled from "styled-components"

const StyledCarousel = styled(Carousel)`
  li.slide {
    background: transparent;
  }

  .carousel .control-dots .dot {
    /* background-color: black; */
    border-radius: 20%;
    width: 30px;
    height: 5px;
    opacity: 0.5;
  }

  .carousel .control-dots .dot.selected,
  .carousel .control-dots .dot:hover {
    opacity: 1;
  }
`

const ClientsReviews = () => {
  return (
    <StyledCarousel
      infiniteLoop={true}
      autoPlay={true}
      showStatus={false}
      transitionTime={500}
      interval={5000}
      showArrows={false}
    >
      <ClientReviewCard />
      <ClientReviewCard />
      <ClientReviewCard />
    </StyledCarousel>
  )
}

export default ClientsReviews
