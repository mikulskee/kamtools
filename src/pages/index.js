import { graphql } from "gatsby"
import React from "react"
import "../assets/index.css"

const Home = ({ data }) => {
  return (
    <section
      style={{
        position: "relative",
        height: "100vh",
        backgroundImage: `url(${data.image2.childImageSharp.fluid.src})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(12, 12, 12, 0.9)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          paddingLeft: "20vw",
        }}
      >
        <img
          style={{ display: "block", width: "100px" }}
          src={data.image1.childImageSharp.fluid.src}
          srcSet={data.image1.childImageSharp.fluid.srcSet}
          sizes={data.image1.childImageSharp.fluid.sizes}
          alt=""
        />
        <h1 style={{ margin: "40px 0 20px" }}>Strona w budowie...</h1>
        <div
          style={{
            position: "relative",
            width: "50vw",
            height: "2px",
            backgroundColor: "gray",
            margin: "20px 0",
          }}
        >
          <span style={{ position: "absolute", top: "-30px", right: "0" }}>
            90%
          </span>
          <span
            style={{
              position: "absolute",
              width: "90%",
              height: "100%",
              backgroundColor: "red",
            }}
          />
        </div>
        <p style={{ margin: "20px 0 20px" }}>
          W razie jakichkolwiek pytań, prosimy o kontakt pod adresem email:{" "}
          <a
            style={{ marginLeft: "5px" }}
            href="mailto:kamil.paluch@kamtools.com.pl"
          >
            kamil.paluch@kamtools.com.pl
          </a>{" "}
        </p>
      </div>
    </section>
  )
}

export const query = graphql`
  {
    image1: file(name: { eq: "kamtoolsLogo" }) {
      childImageSharp {
        fluid(maxWidth: 1027, maxHeight: 989, quality: 90) {
          src
          srcSet
          sizes
        }
      }
    }
    image2: file(name: { eq: "construction" }) {
      childImageSharp {
        fluid(maxWidth: 1920, quality: 90) {
          src
          srcSet
          sizes
        }
      }
    }
  }
`
export default Home
