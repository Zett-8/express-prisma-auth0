import React from 'react'
import { render } from 'react-dom'
import { Auth0Provider } from '@auth0/auth0-react'
import { createGlobalStyle } from 'styled-components'

import { Router } from './router'

if (process.env.NODE_ENV !== 'production') {
  console.log(`==== connecting to ${process.env.NODE_ENV} server ====`)
}

const Style = createGlobalStyle`
  html {
    font-family: "Helvetica", "Roboto", "Lucida Grande", Verdana, Arial, sans-serif;
  }
`

render(
  <Auth0Provider
    domain={process.env.AUTH0_DOMAIN || ''}
    clientId={process.env.AUTH0_CLIENT_ID || ''}
    redirectUri={window.location.origin}
    audience={process.env.AUTH0_AUDIENCE || ''}
  >
    <Style />
    <Router />
  </Auth0Provider>,
  document.getElementById('root')
)
