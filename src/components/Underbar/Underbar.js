import React from "react"
import styled from "styled-components"
import Button from "../Button/Button"

const Wrapper = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.primary};
  padding: 60px 20vw;
`
const H3 = styled.h3`
  font-weight: 600;
`
const Subtitle = styled.p`
  font-size: 14px;
  margin-top: 10px;
`

const Underbar = () => {
  return (
    <Wrapper>
      <div>
        <H3>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</H3>
        <Subtitle>
          Nulla maximus ut ante in posuere. Phasellus fringilla imperdiet
          dapibus.
        </Subtitle>
      </div>
      <div>
        <Button color="secondary">Sprawdź</Button>
      </div>
    </Wrapper>
  )
}

export default Underbar
