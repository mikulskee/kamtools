import React from "react"
import styled from "styled-components"
import Logo from "../../components/Logo/Logo"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLongArrowAltRight } from "@fortawesome/free-solid-svg-icons"

const StyledIcon = styled(FontAwesomeIcon)`
  position: absolute;
  transform: translateX(0);
  opacity: 0;
  transition: all 0.15s linear;
`

const Wrapper = styled.nav`
  display: flex;
  align-items: center;
  padding: 20px;
  justify-content: space-between;
  ul {
    list-style: none;
    padding: 20px;
    display: flex;
    align-items: center;
    li {
      margin: 0 10px;
      a {
        color: black;
        font-weight: 600;
        text-decoration: none;
        padding: 10px 5px;
        display: flex;
        flex-direction: column;
        justify-content: center;

        &:hover ::after {
          transform: scaleX(1);
        }

        &.contact {
          display: flex;
          align-items: center;
          flex-direction: row;
          background-color: ${({ theme }) => theme.colors.primary};
          color: white;
          padding: 20px 40px;
          border: 1px solid ${({ theme }) => theme.colors.primary};
          span {
            transition: transform 0.15s linear;
            transform: translateX(0);
          }
          ::after {
            display: none;
          }
          &:hover span {
            transform: translateX(-12px);
          }
          &:hover svg {
            transform: translateX(35px);
            opacity: 1;
          }
        }

        ::after {
          content: "";
          margin-top: 5px;
          transform: scaleX(0);
          transition: transform 0.15s linear;
          display: block;
          height: 1px;
          width: 100%;
          background-color: black;
        }
      }
    }
  }
`

const Nav = () => {
  return (
    <Wrapper>
      <Logo />
      <ul>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">O nas</a>
        </li>
        <li>
          <a href="#">Usługi</a>
        </li>
        <li>
          <a href="#">Projekty</a>
        </li>
        <li>
          <a href="#">Opinie</a>
        </li>
        <li>
          <a className="contact" href="#">
            <span>Kontakt</span>
            <StyledIcon icon={faLongArrowAltRight} />
          </a>
        </li>
      </ul>
    </Wrapper>
  )
}

export default Nav
