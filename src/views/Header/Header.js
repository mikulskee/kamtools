import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel"
import "pure-react-carousel/dist/react-carousel.es.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faChevronRight,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons"

const Wrapper = styled.header`
  height: 60vh;
  overflow: hidden;
  position: relative;
`
const HeaderWrapper = styled(BackgroundImage)`
  position: relative;
  width: 100%;
  height: 60vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  span.cover {
    position: absolute;
    content: "";
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: -1;
  }
`

const H1 = styled.h1`
  width: 50%;
  text-align: center;
  font-weight: 800;
`
const StyledButtonNext = styled(ButtonNext)`
  position: absolute;
  top: 50%;
  right: 20px;
  z-index: 9999999;
  font-size: 40px;
  background: none;
  border: none;
  outline: none;
`
const StyledButtonBack = styled(ButtonBack)`
  position: absolute;
  top: 50%;
  left: 20px;
  z-index: 9999999;
  font-size: 40px;
  background: none;
  border: none;
  box-shadow: none;

  outline: none;
`
const Header = () => {
  const data = useStaticQuery(graphql`
    {
      bg1: file(name: { eq: "headerBg" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
      bg2: file(name: { eq: "headerBg2" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
      bg3: file(name: { eq: "headerBg3" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
  `)

  return (
    <Wrapper>
      <CarouselProvider
        naturalSlideWidth={100}
        naturalSlideHeight={125}
        totalSlides={3}
        isPlaying={true}
        infinite={true}
        visibleSlides={1}
      >
        <StyledButtonBack>
          <FontAwesomeIcon icon={faChevronLeft} />
        </StyledButtonBack>
        <StyledButtonNext>
          <FontAwesomeIcon icon={faChevronRight} />
        </StyledButtonNext>
        <Slider>
          <Slide index={0}>
            <HeaderWrapper Tag="div" fluid={data.bg1.childImageSharp.fluid}>
              <span className="cover" />
              <H1>WSZYSTKO CZEGO POTRZEBUJESZ W JEDNYM MIEJSCU</H1>
            </HeaderWrapper>
          </Slide>
          <Slide index={1}>
            <HeaderWrapper Tag="div" fluid={data.bg2.childImageSharp.fluid}>
              <span className="cover" />
              <H1>WSZYSTKO CZEGO POTRZEBUJESZ W JEDNYM MIEJSCU</H1>
            </HeaderWrapper>
            .
          </Slide>
          <Slide index={2}>
            <HeaderWrapper Tag="div" fluid={data.bg3.childImageSharp.fluid}>
              <span className="cover" />
              <H1>WSZYSTKO CZEGO POTRZEBUJESZ W JEDNYM MIEJSCU</H1>
            </HeaderWrapper>
          </Slide>
        </Slider>
      </CarouselProvider>

      {/* 
        
         */}
    </Wrapper>
  )
}

export default Header
