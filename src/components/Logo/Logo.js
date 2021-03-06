import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import styled from "styled-components"

const StyledBg = styled(BackgroundImage)`
  height: 60px;
  width: 60px;
  pointer-events: none;
`

const Logo = ({ handleNavigate }) => {
  const data = useStaticQuery(graphql`
    {
      image1: file(name: { eq: "kamtoolsLogo" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 1920) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <a id="home" href="/" onClick={handleNavigate}>
      <StyledBg Tag="div" fluid={data.image1.childImageSharp.fluid} />
    </a>
  )
}

export default Logo
