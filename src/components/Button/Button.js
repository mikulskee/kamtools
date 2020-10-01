import React from "react"
import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLongArrowAltRight } from "@fortawesome/free-solid-svg-icons"

const StyledIcon = styled(FontAwesomeIcon)`
  position: absolute;
  transform: translateX(0);
  opacity: 0;
  transition: all 0.15s linear;
`

const BTN = styled.button`
  cursor: pointer;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: center;
  background-color: ${({ color }) =>
    color === "secondary" ? `white` : `#445CA4`};
  color: ${({ color }) => (color === "secondary" ? `#445CA4` : "white")};
  padding: 12px 40px !important;

  border: ${({ color }) =>
    color === "secondary" ? `white` : `1px solid #445CA4`};
  font-weight: 600;
  text-decoration: none;
  outline: none;

  span {
    pointer-events: none;
    transition: transform 0.15s linear;
    transform: translateX(0);
    font-weight: 600;

    color: ${({ color }) => (color === "secondary" ? `#445CA4` : "white")};
  }
  svg {
    color: ${({ color }) => (color === "secondary" ? `#445CA4` : "white")};
    path {
      color: ${({ color }) => (color === "secondary" ? `#445CA4` : "white")};
    }
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
`

const A = styled.a`
  display: flex;
  align-items: center;
  flex-direction: row;
  background-color: ${({ color }) =>
    color === "secondary" ? `white` : `#445CA4`};
  color: ${({ color }) => (color === "secondary" ? `#445CA4` : "white")};
  padding: 12px 40px !important;

  border: ${({ color }) =>
    color === "secondary" ? `white` : `1px solid #445CA4`};
  padding: 12px 40px !important;
  span {
    transition: transform 0.15s linear;
    transform: translateX(0);
    font-weight: 600;

    color: ${({ color }) => (color === "secondary" ? `#445CA4` : "white")};
  }

  svg {
    color: ${({ color }) => (color === "secondary" ? `#445CA4` : "white")};
    path {
      color: ${({ color }) => (color === "secondary" ? `#445CA4` : "white")};
    }
  }
  ::after {
    display: none !important;
  }
  &:hover span {
    transform: translateX(-12px);
  }
  &:hover svg {
    transform: translateX(35px);
    opacity: 1;
  }
`

const Button = props => {
  if (props.component === "button" || props.component === undefined) {
    return (
      <BTN
        className={props.className}
        color={props.color}
        onClick={() => {
          props.setIsContactModalOpen(true)
          props.setIsOpenMenu(false)
        }}
      >
        <span>{props.children}</span>
        <StyledIcon icon={faLongArrowAltRight} />
      </BTN>
    )
  } else if (props.component === "a") {
    return (
      <A className={props.className} color={props.color}>
        <span>{props.children}</span>
        <StyledIcon icon={faLongArrowAltRight} />
      </A>
    )
  } else {
    return (
      <BTN className={props.className} color={props.color}>
        <span>{props.children}</span>
        <StyledIcon icon={faLongArrowAltRight} />
      </BTN>
    )
  }
}

export default Button
