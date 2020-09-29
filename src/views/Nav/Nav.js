import React from "react"
import styled from "styled-components"
import Button from "../../components/Button/Button"
import Logo from "../../components/Logo/Logo"

const Wrapper = styled.nav`
  display: flex;
  align-items: center;
  padding: 20px;
  justify-content: space-between;
  ul {
    list-style: none;
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
          <Button component="a">Kontakt</Button>
        </li>
      </ul>
    </Wrapper>
  )
}

export default Nav
