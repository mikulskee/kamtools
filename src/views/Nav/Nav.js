import React, { useRef, useState, useEffect, useCallback } from "react"
import styled from "styled-components"
import Button from "../../components/Button/Button"
import Logo from "../../components/Logo/Logo"
import smoothscroll from "smoothscroll-polyfill"
import Burger from "../../components/Burger/Burger"

const Wrapper = styled.nav`
  position: sticky;
  top: 0;
  display: flex;
  align-items: center;
  padding: 20px;
  justify-content: space-between;
  z-index: 999999;
  background-color: white;

  &.mobile {
    /* padding-bottom: ${({ isOpenMenu }) =>
      isOpenMenu ? "100vh" : ""};
    margin-bottom: ${({ isOpenMenu }) =>
      isOpenMenu ? "-100vh" : ""}; */

    ul {
      position: absolute;
      top: 0;
      left: 0;
      flex-direction: column;
      background-color: white;
      z-index: 9999;
      width: 100%;

      padding: 30px 0;
      transition: ${({ isOpenMenu }) =>
        isOpenMenu !== undefined && "transform 0.35s linear"};

      transform: ${({ isOpenMenu }) =>
        isOpenMenu ? "translateY(0)" : "translateY(-120%)"};

      /* height: ${({ isOpenMenu }) =>
        isOpenMenu === "open" ? "70vh" : "0"}; */
    }
  }

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
  const navRef = useRef()
  const [isMobile, setIsMobile] = useState("")
  const [isOpenMenu, setIsOpenMenu] = useState()
  useEffect(() => {
    if (window.innerWidth < 1024) {
      setIsMobile("mobile")
      console.log("mobile")
    } else {
      setIsMobile("desktop")
    }
  }, [])

  const checkIsMobile = useCallback(() => {
    if (window.innerWidth < 1024) {
      setIsMobile("mobile")
      document.querySelector("nav").classList.add("mobile")
    } else {
      setIsMobile("desktop")
      document.querySelector("nav").classList.remove("mobile")
    }
  }, [setIsMobile])

  useEffect(() => {
    window.addEventListener("resize", checkIsMobile)

    return () => {
      window.removeEventListener("resize", checkIsMobile)
    }
  }, [checkIsMobile])

  const handleNavigation = e => {
    e.preventDefault()
    const sectionName = e.target.id
    const navHeight = navRef.current.getBoundingClientRect().height
    const bodyRect = document.body.getBoundingClientRect().top
    smoothscroll.polyfill()

    switch (sectionName) {
      case "home":
        console.log(sectionName)
        window.scrollTo({ top: 0, behavior: "smooth" })
        if (window.innerWidth < 1024) {
          setIsOpenMenu(false)
        } else return
        break
      case "about":
        console.log(sectionName)

        const sectionAbout = document.querySelector(`section.${sectionName}`)
        const positionAbout = sectionAbout.getBoundingClientRect().top
        const elementAboutPosition = positionAbout - bodyRect - navHeight

        window.scrollTo({ top: elementAboutPosition, behavior: "smooth" })
        if (window.innerWidth < 1024) {
          setIsOpenMenu(false)
        } else return
        break
      case "offer":
        console.log(sectionName)

        const sectionOffer = document.querySelector(`section.${sectionName}`)
        const positionOffer = sectionOffer.getBoundingClientRect().top
        const elementOfferPosition = positionOffer - bodyRect - navHeight

        window.scrollTo({ top: elementOfferPosition, behavior: "smooth" })
        if (window.innerWidth < 1024) {
          setIsOpenMenu(false)
        } else return
        break
      case "reviews":
        const sectionReviews = document.querySelector(`section.${sectionName}`)
        const positionReviews = sectionReviews.getBoundingClientRect().top
        const elementReviewsPosition = positionReviews - bodyRect - navHeight

        window.scrollTo({ top: elementReviewsPosition, behavior: "smooth" })
        if (window.innerWidth < 1024) {
          setIsOpenMenu(false)
        } else return

        break
      default:
        break
    }
  }
  return (
    <Wrapper ref={navRef} className={isMobile} isOpenMenu={isOpenMenu}>
      <Logo handleNavigate={handleNavigation} />

      {isMobile === "mobile" ? (
        <>
          <Burger isOpenMenu={isOpenMenu} setIsOpenMenu={setIsOpenMenu} />
        </>
      ) : null}

      <ul>
        <li>
          <a id="home" href="/" onClick={handleNavigation}>
            Home
          </a>
        </li>
        <li>
          <a id="about" href="/" onClick={handleNavigation}>
            O nas
          </a>
        </li>
        <li>
          <a id="offer" href="/" onClick={handleNavigation}>
            Oferta
          </a>
        </li>
        <li>
          <a id="reviews" href="/" onClick={handleNavigation}>
            Opinie
          </a>
        </li>
        <li>
          <Button component="a">Kontakt</Button>
        </li>
      </ul>
    </Wrapper>
  )
}

export default Nav
