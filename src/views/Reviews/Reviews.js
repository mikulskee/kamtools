import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import styled from "styled-components"
import ClientsReviews from "../../components/ClientsReviews/ClientsReviews"

const Wrapper = styled(BackgroundImage)`
  padding: 80px;
`

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const Description = styled.p``
const H3 = styled.h3`
  line-height: 1;
  font-size: 2rem;
`

const Divider = styled.div`
  display: flex;
  align-items: center;
  margin: 10px 0;

  span:nth-child(1),
  span:nth-child(3) {
    width: 200px;
    height: 2px;
    background-color: white;
  }

  span:nth-child(2) {
    height: 10px;
    width: 10px;
    background-color: white;
    margin: 0 20px;
  }
`

const Reviews = () => {
  const data = useStaticQuery(graphql`
    {
      pattern: file(name: { eq: "pattern" }) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 1920) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <Wrapper Tag="section" fluid={data.pattern.childImageSharp.fluid}>
      <TitleWrapper>
        <Description>Co o nas mówią</Description>
        <Divider>
          <span />
          <span />
          <span />
        </Divider>
        <H3>Opinie naszych klientów</H3>
      </TitleWrapper>
      <ClientsReviews />
    </Wrapper>
  )
}

export default Reviews