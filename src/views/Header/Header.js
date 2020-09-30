import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from "react-responsive-carousel"

const Wrapper = styled.header`
  height: 60vh;
  overflow: hidden;
  position: relative;
`

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
const HeaderWrapper = styled(BackgroundImage)`
  position: relative;
  width: 100%;
  height: 60vh;
  display: flex;
  flex-direction: column;
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
const Subtitle = styled.p`
  margin-top: 20px;
`

const Header = () => {
  const data = useStaticQuery(graphql`
    {
      bg1: file(name: { eq: "headerBg" }) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 1920) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
      bg2: file(name: { eq: "headerBg2" }) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 1920) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
      bg3: file(name: { eq: "headerBg3" }) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 1920) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
  `)

  return (
    <Wrapper>
      <StyledCarousel
        infiniteLoop={true}
        autoPlay={true}
        showStatus={false}
        transitionTime={500}
        interval={5000}
        showArrows={true}
      >
        <HeaderWrapper Tag="div" fluid={data.bg1.childImageSharp.fluid}>
          <span className="cover" />
          <H1>WSZYSTKO CZEGO POTRZEBUJESZ W JEDNYM MIEJSCU</H1>
          <Subtitle>
            Doświadczeni ludzie doradzą Ci i pomogą w podjęciu decyzji
          </Subtitle>
        </HeaderWrapper>
        <HeaderWrapper Tag="div" fluid={data.bg2.childImageSharp.fluid}>
          <span className="cover" />
          <H1>WSZYSTKO CZEGO POTRZEBUJESZ W JEDNYM MIEJSCU</H1>
          <Subtitle>
            Doświadczeni ludzie doradzą Ci i pomogą w podjęciu decyzji
          </Subtitle>
        </HeaderWrapper>
        <HeaderWrapper Tag="div" fluid={data.bg3.childImageSharp.fluid}>
          <span className="cover" />
          <H1>WSZYSTKO CZEGO POTRZEBUJESZ W JEDNYM MIEJSCU</H1>
          <Subtitle>
            Doświadczeni ludzie doradzą Ci i pomogą w podjęciu decyzji
          </Subtitle>
        </HeaderWrapper>
      </StyledCarousel>
    </Wrapper>
  )
}

export default Header
