import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"
import styled from "styled-components"

import { rhythm } from "../utils/typography"

function Bio() {
  return (
    <StaticQuery
      query={bioQuery}
      render={data => {
        const { author } = data.site.siteMetadata
        return (
          <Container>
            <BioWrap>
              <IntroText>
                Hi. My name's Paul. I'm currently building an app for health
                professionals and coaches that will help them to increase client
                adherance and manage clients remotely.
              </IntroText>
            </BioWrap>
          </Container>
        )
      }}
    />
  )
}

const bioQuery = graphql`
  query BioQuery {
    avatar: file(absolutePath: { regex: "/gatsby-icon.png/" }) {
      childImageSharp {
        fixed(width: 50, height: 50) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    site {
      siteMetadata {
        author
        social {
          twitter
        }
      }
    }
  }
`

const Container = styled.div`
  display: flex;
`

const BioWrap = styled.div``

const IntroText = styled.div`
  font-family: "monserrat, sans-serif";
  margin-bottom: 20px;
`

export default Bio
