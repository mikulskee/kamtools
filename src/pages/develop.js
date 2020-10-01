import React from "react"
import Layout from "../layout & theme/Layout"
import About from "../views/About/About"
import Header from "../views/Header/Header"
import Nav from "../views/Nav/Nav"
import Offer from "../views/Offer/Offer"
import Reviews from "../views/Reviews/Reviews"
import Footer from "../views/Footer/Footer"

const Home = () => {
  return (
    <Layout>
      <Nav />
      <Header />
      <About />
      <Offer />
      <Reviews />
      <Footer />
    </Layout>
  )
}
export default Home
