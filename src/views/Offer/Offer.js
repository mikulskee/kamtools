import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import OfferCardWrapper from "../../components/OfferCardWrapper/OfferCardWrapper"
import BackgroundImage from "gatsby-background-image"

const Wrapper = styled.section`
  padding-bottom: 60px;
`

const StyledBgImg = styled(BackgroundImage)`
  width: 100%;
  height: 300px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  background-attachment: fixed;

  ::before,
  ::after {
    background-attachment: fixed;
  }
`
const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  filter: blur(-2px);
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
    background-color: ${({ theme }) => theme.colors.primary};
  }

  span:nth-child(2) {
    height: 10px;
    width: 10px;
    background-color: ${({ theme }) => theme.colors.primary};
    margin: 0 20px;
  }
`
const Offer = () => {
  const data = useStaticQuery(graphql`
    {
      offerBg: file(name: { eq: "offerBg" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 1920) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <Wrapper>
      <StyledBgImg Tag="div" fluid={data.offerBg.childImageSharp.fluid}>
        <TitleWrapper>
          <Description>Co możemy dla Ciebie zrobić</Description>
          <Divider>
            <span />
            <span />
            <span />
          </Divider>
          <H3>Nasza oferta</H3>
        </TitleWrapper>
      </StyledBgImg>

      <OfferCardWrapper />
    </Wrapper>
  )
}

export default Offer
