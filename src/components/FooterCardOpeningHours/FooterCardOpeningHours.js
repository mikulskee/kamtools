import React from "react"
import styled from "styled-components"

const FooterCard = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px 10px;
`

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

const H6 = styled.h6`
  line-height: 1;
  font-size: 1.3rem;
  width: fit-content;
`

const Divider = styled.div`
  display: flex;
  align-items: center;
  margin: 10px 0;
  width: fit-content;

  span:nth-child(2) {
    width: 50px;
    height: 2px;
    background-color: ${({ theme }) => theme.colors.primary};
  }

  span:nth-child(1) {
    height: 10px;
    width: 10px;
    background-color: ${({ theme }) => theme.colors.primary};
    margin-right: 20px;
  }
`

const Description = styled.p`
  margin: 20px 0 6px;
  font-size: 12px;
  width: 200px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  span {
    color: gray;
    font-size: 12px;
  }
`

const FooterCardNav = () => {
  return (
    <FooterCard>
      <TitleWrapper>
        <H6>Godziny otwarcia</H6>
        <Divider>
          <span />
          <span />
        </Divider>
        <Description>
          <span>Poniedziałek</span>7:00 - 17:00
        </Description>
        <Description style={{ margin: "6px 0 6px" }}>
          <span>Wtorek</span>7:00 - 17:00
        </Description>
        <Description style={{ margin: "6px 0 6px" }}>
          <span>Środa</span>7:00 - 17:00
        </Description>
        <Description style={{ margin: "6px 0 6px" }}>
          <span>Czwartek</span>7:00 - 17:00
        </Description>
        <Description style={{ margin: "6px 0 6px" }}>
          <span>Piątek</span>7:00 - 17:00
        </Description>
        <Description style={{ margin: "6px 0 6px" }}>
          <span>Sobota</span>8:00 - 14:00
        </Description>
        <Description style={{ margin: "6px 0 6px" }}>
          <span>Niedziela</span>Nieczynne
        </Description>
      </TitleWrapper>
    </FooterCard>
  )
}

export default FooterCardNav
