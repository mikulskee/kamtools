import React from "react"
import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faMapMarkerAlt,
  faMobile,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons"

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
  margin: 20px 0 5px;
  font-size: 14px;
  width: 300px;
  display: flex;
  align-items: center;

  span {
    width: 30px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.colors.primary};
    margin-right: 10px;
  }
  svg {
    font-size: 15px;
  }
`

const FooterCardAboutUs = () => {
  return (
    <FooterCard>
      <TitleWrapper>
        <H6>O nas</H6>
        <Divider>
          <span />
          <span />
        </Divider>
        <Description>
          Firma zajmująca się lorem ipsum dolor sit amet, consectetur adipiscing
          elit.
        </Description>
        <Description>
          <span>
            <FontAwesomeIcon icon={faMapMarkerAlt} />
          </span>
          Nowosielce 553, 37-200 Przeworsk
        </Description>
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
      </TitleWrapper>
    </FooterCard>
  )
}

export default FooterCardAboutUs
