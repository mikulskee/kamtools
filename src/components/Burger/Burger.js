import React from "react"
import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons"
const Wrapper = styled.button`
  position: absolute;
  z-index: 99999;
  right: 20px;
  background: none;
  border: none;
  outline: none;
  cursor: pointer;
  padding: 10px 20px;
  font-size: 25px;
  svg {
    color: ${({ theme }) => theme.colors.primary};
    path {
      color: ${({ theme }) => theme.colors.primary};
    }
  }
`

const Burger = ({ setIsOpenMenu, isOpenMenu }) => {
  const handleClick = e => {
    e.preventDefault()
    setIsOpenMenu(state => !state)
  }
  return (
    <Wrapper className="burger" onClick={handleClick}>
      {isOpenMenu ? (
        <FontAwesomeIcon icon={faTimes} />
      ) : (
        <FontAwesomeIcon icon={faBars} />
      )}
    </Wrapper>
  )
}

export default Burger
