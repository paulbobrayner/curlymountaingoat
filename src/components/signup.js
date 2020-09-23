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
          <input
            type="email"
            name="EMAIL"
            class="email"
            id="mce-EMAIL"
            placeholder="email address"
            required
          />
          <div class="clear">
            <SubmitButton
              type="submit"
              value="Subscribe"
              name="subscribe"
              id="mc-embedded-subscribe"
              class="button"
            />
          </div>
        </Wrap>
      </form>
    </div>
  )
}

export default SignUp

const Wrap = styled.div`
  display: flex;
`

const SubmitButton = styled.input`
  font-family: monserrat, sans-serif;
`
