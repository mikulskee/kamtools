import React from "react"
import Underbar from "../components/Underbar/Underbar"
import Layout from "../layout & theme/Layout"
import Header from "../views/Header/Header"
import Nav from "../views/Nav/Nav"

const Home = () => {
  return (
    <Layout>
      <Nav />
      <Header />
      <Underbar />
    </Layout>
  )
}
export default Home
