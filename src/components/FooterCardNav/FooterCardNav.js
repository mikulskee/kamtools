import React from "react"
import styled from "styled-components"

const FooterCard = styled.div``

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
  margin: 20px 0 10px;
  font-size: 14px;
  /* width: 300px; */
  display: flex;
  align-items: center;
  cursor: pointer;

  span {
    width: 10px;
    height: 10px;

    background-color: ${({ theme }) => theme.colors.primary};
    margin-right: 10px;
  }
`

const FooterCardNav = () => {
  return (
    <FooterCard>
      <TitleWrapper>
        <H6>Nawigacja</H6>
        <Divider>
          <span />
          <span />
        </Divider>
        <Description>
          <span />O nas
        </Description>
        <Description style={{ margin: "10px 0 10px" }}>
          <span />
          Usługi
        </Description>
        <Description style={{ margin: "10px 0 10px" }}>
          <span />
          Opinie
        </Description>
      </TitleWrapper>
    </FooterCard>
  )
}

export default FooterCardNav
