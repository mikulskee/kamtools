import React from "react"
import styled from "styled-components"
import FooterCardAboutUs from "../../components/FooterCardAboutUs/FooterCardAboutUs"
import FooterCardNav from "../../components/FooterCardNav/FooterCardNav"
import FooterCardOpeningHours from "../../components/FooterCardOpeningHours/FooterCardOpeningHours"

const Wrapper = styled.footer`
  background-color: #171717;
  padding: 60px 20px 0;
  @media only screen and (min-width: 1024px) {
    padding: 60px 20vw 0;
  }
`

const CardWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  margin-bottom: 80px;
  flex-wrap: wrap;
  align-items: center;
`

const Footer = () => {
  return (
    <Wrapper>
      <CardWrapper>
        <FooterCardAboutUs />
        <FooterCardNav />
        <FooterCardOpeningHours />
      </CardWrapper>

      <div style={{ width: "100%", padding: "20px 0" }}>
        <p style={{ fontSize: "8px" }}>Copyright © 2020 MJ Technologies</p>
      </div>
    </Wrapper>
  )
}

export default Footer
