import React from "react"
import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faWrench,
  faHammer,
  faToolbox,
} from "@fortawesome/free-solid-svg-icons"

const Wrapper = styled.div`
  display: flex;
  margin: -50px auto 0;
  width: 80vw;
  justify-content: space-between;
  align-items: center;
`

const OfferCard = styled.div`
  position: relative;
  overflow: hidden;
  background-color: #fff;
  width: 33%;
  box-shadow: 0px 0px 6px 2px #445ca46e;
  border: 1px solid #445ca491;
  min-height: 400px;
  padding: 40px;

  svg {
    font-size: 40px;
    * {
      color: ${({ theme }) => theme.colors.primary};
    }
  }
`

const Title = styled.h5`
  color: black;
  font-size: 1.5rem;
  font-weight: 800;
  margin-top: 35px;
  min-height: 120px;
`

const Number = styled.p`
  position: absolute;
  top: -40px;
  left: 80%;
  font-size: 15rem;
  opacity: 0.1;
  color: ${({ theme }) => theme.colors.primary};
`

const Description = styled.p`
  color: black;
`

const OfferCardWrapper = props => {
  return (
    <Wrapper>
      <OfferCard>
        <Number>1</Number>
        <FontAwesomeIcon icon={faWrench} />
        <Title>Sprzedaż narzędzi</Title>
        <Description>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
          consequat ornare tempor. Aliquam non arcu ac augue faucibus bibendum.
          Nulla id neque ante.
        </Description>
      </OfferCard>
      <OfferCard>
        <Number>2</Number>
        <FontAwesomeIcon icon={faHammer} />
        <Title>Naprawa narzędzi</Title>
        <Description>
          Sed euismod justo in enim scelerisque accumsan. Cras ligula lectus,
          condimentum sit amet aliquet sit amet, dapibus ut sem.
        </Description>
      </OfferCard>
      <OfferCard>
        <Number>3</Number>
        <FontAwesomeIcon icon={faToolbox} />
        <Title>Wypożyczanie sprzętu budowlanego</Title>
        <Description>
          Aenean id mi elementum tellus maximus sollicitudin a at quam. Donec
          vitae mollis velit. Etiam magna nibh, vulputate eget massa quis,
          faucibus euismod magna.
        </Description>
      </OfferCard>
    </Wrapper>
  )
}

export default OfferCardWrapper
