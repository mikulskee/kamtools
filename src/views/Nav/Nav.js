import React, { useRef } from "react"
import styled from "styled-components"
import Button from "../../components/Button/Button"
import Logo from "../../components/Logo/Logo"
import smoothscroll from "smoothscroll-polyfill"

const Wrapper = styled.nav`
  position: sticky;
  top: 0;
  display: flex;
  align-items: center;
  padding: 20px;
  justify-content: space-between;
  z-index: 999999;
  background-color: white;
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
        // if (window.innerWidth < 1024) {
        //   closeBurgerAnimation().play();
        // } else return;
        break
      case "about":
        console.log(sectionName)

        const sectionAbout = document.querySelector(`section.${sectionName}`)
        const positionAbout = sectionAbout.getBoundingClientRect().top
        const elementAboutPosition = positionAbout - bodyRect - navHeight

        window.scrollTo({ top: elementAboutPosition, behavior: "smooth" })
        // if (window.innerWidth < 1024) {
        //   closeBurgerAnimation().play()
        // } else return
        break
      case "offer":
        console.log(sectionName)

        const sectionOffer = document.querySelector(`section.${sectionName}`)
        const positionOffer = sectionOffer.getBoundingClientRect().top
        const elementOfferPosition = positionOffer - bodyRect - navHeight

        window.scrollTo({ top: elementOfferPosition, behavior: "smooth" })
        // if (window.innerWidth < 1024) {
        //   closeBurgerAnimation().play()
        // } else return
        break
      case "reviews":
        const sectionReviews = document.querySelector(`section.${sectionName}`)
        const positionReviews = sectionReviews.getBoundingClientRect().top
        const elementReviewsPosition = positionReviews - bodyRect - navHeight

        window.scrollTo({ top: elementReviewsPosition, behavior: "smooth" })
        // if (window.innerWidth < 1024) {
        //   closeBurgerAnimation().play()
        // } else return

        break
      default:
        break
    }
  }
  return (
    <Wrapper ref={navRef}>
      <Logo handleNavigate={handleNavigation} />
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
