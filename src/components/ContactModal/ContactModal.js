import React from "react"
import styled from "styled-components"
import {
  faTimes,
  faMobile,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"
import FooterCardOpeningHours from "../FooterCardOpeningHours/FooterCardOpeningHours"

const Wrapper = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 100vh;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.primary};
  z-index: 99999999999;
  align-items: center;
  padding: 40px 0;
  max-height: 640px;
  max-width: 500px;
  justify-content: space-around;
  flex-direction: column;
  display: ${({ isContactModalOpen }) =>
    isContactModalOpen ? "flex" : "none"};
  box-shadow: 0px 0px 20px 2px #000;
`

const Close = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  padding: 10px;
  background: none;
  outline: none;
  border: none;
  box-shadow: none;
  font-size: 25px;
  cursor: pointer;
`

const Description = styled.p`
  margin: 20px 0 5px;
  font-size: 15px;
  width: 300px;
  display: flex;
  align-items: center;

  span {
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    background-color: white;
    margin-right: 10px;
  }
  svg {
    font-size: 25px;
    color: ${({ theme }) => theme.colors.primary};
    * {
      color: ${({ theme }) => theme.colors.primary};
    }
  }
`
const StyledImg = styled(Image)`
  width: 30%;
`
const ContactModal = ({ setIsContactModalOpen, isContactModalOpen }) => {
  const data = useStaticQuery(graphql`
    {
      image1: file(name: { eq: "kamtoolsLogoWhite" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 1920) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <Wrapper isContactModalOpen={isContactModalOpen}>
      <Close onClick={() => setIsContactModalOpen(false)}>
        <FontAwesomeIcon icon={faTimes} />
      </Close>
      <StyledImg fluid={data.image1.childImageSharp.fluid} />
      <Description style={{ margin: "5px 0 10px" }}>
        <span>
          <FontAwesomeIcon icon={faMobile} />
        </span>

        <a href="tel:+48883953990">883-953-990</a>
      </Description>
      <Description style={{ margin: "0 0 10px" }}>
        <span>
          <FontAwesomeIcon icon={faEnvelope} />
        </span>

        <a href="mailto:kamil.paluch@kamtools.com.pl">
          kamil.paluch@kamtools.com.pl
        </a>
      </Description>
      <FooterCardOpeningHours />
    </Wrapper>
  )
}

export default ContactModal
