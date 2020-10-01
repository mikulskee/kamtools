import React from "react"
import styled from "styled-components"

const Wrapper = styled.div`
  position: relative;
  padding: 10px 40px;
  background-color: white;
  width: 80vw;
  max-width: 600px;
  margin: 60px auto;
`
const Name = styled.p`
  font-weight: 600;
  color: black;
  margin: 20px 0;
  display: flex;
  justify-content: space-between;
  font-size: 1.6rem;
`

const Divider = styled.div`
  width: 100%;
  height: 1px;
  background-color: #dadada;
  margin-top: -80px;
`

const Opinion = styled.p`
  color: black;
  font-size: 14px;
  text-align: left;
  padding: 40px 20px;
`

const Quote = styled.span`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 6rem;
  font-family: "Sorts Mill Goudy", serif;
  line-height: 1.2;

  @media only screen and (min-width: 1024px) {
    font-size: 10rem;
    line-height: 0.8;
  }
`
const ClientReviewCard = () => {
  return (
    <Wrapper>
      <Name>
        Jan Kowalski <Quote>"</Quote>
      </Name>
      <Divider />
      <Opinion>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean nec
        augue est. Aliquam erat volutpat. Etiam viverra, quam sit amet pulvinar
        dapibus, felis nisi porta arcu, sed convallis tortor felis non lorem.
        Nam a mi non odio accumsan sodales et et nibh. Pellentesque cursus
        consequat molestie. Nullam libero risus, dapibus sit amet dictum vel,
        efficitur eget felis.
      </Opinion>
    </Wrapper>
  )
}

export default ClientReviewCard
