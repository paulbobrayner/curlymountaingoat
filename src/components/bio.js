import React from "react"
import { StaticQuery, graphql } from "gatsby"
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
                My name's Paul, former PT + Health coach turned software
                developer.
              </IntroText>
              <IntroText>
                Building an app to help coaches/health pros work remotely +
                manage client adherance.
              </IntroText>
              <IntroText>
                Blogging all things behaviour change, client adherance,
                sustainable change + health.
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
  // margin-bottom: 4px;
`

export default Bio
