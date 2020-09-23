import React from "react"
import styled from "styled-components"

function SignUp() {
  return (
    <div id="mc_embed_signup">
      <form
        action="https://gmail.us2.list-manage.com/subscribe/post?u=2da69e66643c826a2f6d0b153&amp;id=3d314f1951"
        method="post"
        id="mc-embedded-subscribe-form"
        name="mc-embedded-subscribe-form"
        class="validate"
        target="_blank"
        novalidate
      >
        <Wrap id="mc_embed_signup_scroll">
          <EmailInput
            type="email"
            name="EMAIL"
            class="email"
            id="mce-EMAIL"
            placeholder="Email"
            required
          />
          <div class="clear">
            <SubmitButton
              type="submit"
              name="subscribe"
              id="mc-embedded-subscribe"
              class="button"
            >
              Join
            </SubmitButton>
          </div>
        </Wrap>
      </form>
    </div>
  )
}

export default SignUp

const Wrap = styled.div`
  display: flex;
  height: 30px;
`

const SubmitButton = styled.button`
  font-family: monserrat, sans-serif;
  height: 30px;
  background-color: #c38d9e;
  color: black;
  border: 1px black solid;

  :hover {
    cursor: pointer;
    background-color: rgb(195, 141, 158, 0.85);
  }
`
const EmailInput = styled.input`
  margin-right: 5px;
  font-family: monserrat, sans-serif;
  border: 1px black solid;
  padding-left: 5px;
`
