import React from "react"
import { StaticQuery, graphql } from "gatsby"
import styled from "styled-components"

import SignUp from "../components/signup"

function Bio() {
  return (
    <StaticQuery
      query={bioQuery}
      render={data => {
        const { author } = data.site.siteMetadata
        return (
          <>
            <Container>
              <BioWrap>
                <IntroText>
                  Paul. Health coach turned software developer.
                </IntroText>
                <IntroText>
                  Coaching, behaviour change + client adherence.
                </IntroText>
              </BioWrap>
            </Container>
            <SignUpWrap>
              <Subtitle>
                I'm buiding an app for coaches to help them be remote + manage
                client adherence, stay in the loop.
              </Subtitle>
              <SignUp />
            </SignUpWrap>
          </>
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
  font-family: monserrat, sans-serif;
  font-size: 0.875em;
  font-weight: 700;
`

const SignUpWrap = styled.div`
  margin-top: 20px;
`

const Subtitle = styled.div`
  font-family: monserrat, sans-serif;
  font-weight: 700;
  font-size: 0.875em;
  text-decoration: underline;
  margin-bottom: 10px;
`

export default Bio
