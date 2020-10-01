import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"
import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faWrench,
  faHammer,
  faScrewdriver,
  faToolbox,
} from "@fortawesome/free-solid-svg-icons"

const Wrapper = styled.section`
  padding: 100px 10vw;
  display: flex;
  justify-content: space-between;
  flex-direction: column;

  @media only screen and (min-width: 1024px) {
    flex-direction: row;
  }
`

const GalleryWrapper = styled.div`
  position: relative;
  width: 80%;
  @media only screen and (min-width: 1024px) {
    width: 35vw;
  }

  div:nth-child(1) {
    width: 70%;
  }
  div:nth-child(2) {
    position: absolute !important;
    width: 50%;
    top: 10%;
    right: 0;
    border: 6px solid white;
  }
  div:nth-child(3) {
    position: absolute !important;
    width: 70%;
    top: 45%;
    left: 60%;
    border: 6px solid white;
  }
`

const Testimonials = styled.div`
  margin: 20px;
  width: 100%;
  @media only screen and (min-width: 1024px) {
    width: 30vw;
  }
`

const H3 = styled.h3`
  color: black;
  font-size: 1.7rem;
`
const Description = styled.p`
  color: black;
  margin-top: 40px;
  line-height: 1.6;
  & * {
    color: black;
  }
`

const IconsWrapper = styled.div`
  display: flex;
  margin-top: 30px;
  align-items: center;

  svg {
    margin: 0 20px;
  }
  svg:nth-child(1) {
    margin-left: 0;
  }
  & * {
    font-size: 30px;
    color: black;
  }
`

const About = () => {
  const data = useStaticQuery(graphql`
    {
      gallery1: file(name: { eq: "gallery1" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      gallery2: file(name: { eq: "gallery2" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      gallery3: file(name: { eq: "gallery3" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <Wrapper className="about">
      <GalleryWrapper>
        <Image fluid={data.gallery1.childImageSharp.fluid} />
        <Image fluid={data.gallery2.childImageSharp.fluid} />
        <Image fluid={data.gallery3.childImageSharp.fluid} />
      </GalleryWrapper>
      <Testimonials>
        <H3>O nas</H3>
        <Description>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et
          dapibus est, vitae tempor enim. Quisque faucibus mi at sagittis
          venenatis. <b>Donec elementum</b> laoreet tortor, at dictum enim
          tristique nec. Nulla consectetur pulvinar turpis, nec tincidunt nunc
          dictum non. Duis suscipit erat id bibendum sodales. Sed auctor
          bibendum mi ut finibus. <b>Vestibulum ante ipsum</b> primis in
          faucibus orci luctus et ultrices posuere cubilia curae.
        </Description>
        <IconsWrapper>
          <FontAwesomeIcon icon={faWrench} />
          <p style={{ fontSize: "12px", marginLeft: "-10px" }}>
            Lorem <br />
            ipsum
          </p>
          <FontAwesomeIcon icon={faHammer} />
          <p style={{ fontSize: "12px", marginLeft: "-10px" }}>
            Lorem <br />
            ipsum
          </p>
          <FontAwesomeIcon icon={faScrewdriver} />
          <p style={{ fontSize: "12px", marginLeft: "-10px" }}>
            Lorem <br />
            ipsum
          </p>
          <FontAwesomeIcon icon={faToolbox} />
          <p style={{ fontSize: "12px", marginLeft: "-10px" }}>
            Lorem <br />
            ipsum
          </p>
        </IconsWrapper>
      </Testimonials>
    </Wrapper>
  )
}

export default About
