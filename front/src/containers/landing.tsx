import React, { useState } from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import axios, { AxiosResponse } from 'axios'
import styled from 'styled-components'

export const LandingPageContainer = () => {
  const { loginWithRedirect, user, logout, isLoading, getAccessTokenSilently } = useAuth0()
  const [serverRes, setServerRes] = useState({})

  const setResponse = (object: AxiosResponse) => {
    setServerRes({
      data: object.data,
      status: object.status,
      statusText: object.statusText,
      headers: object.headers,
    })
  }

  const get = async () => {
    const token = await getAccessTokenSilently()
      .then((res) => res)
      .catch((err) => {
        console.log(err)
        return ''
      })

    axios
      .get('http://localhost:3333/todo', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => setResponse(res))
      .catch((err) => setServerRes(err))
  }

  if (isLoading) return <div>Loading...</div>

  return (
    <div>
      <h1>Express + Prisma + Auth0 Demo</h1>
      <button onClick={() => loginWithRedirect()}>Login</button>
      <button onClick={() => logout({ returnTo: window.location.origin })}>Logout</button>

      <Res>
        <div>User info</div>
        <pre>{JSON.stringify(user || {}, null, 4)}</pre>
      </Res>

      <h2>API</h2>
      <button onClick={get}>GET</button>

      <Res>
        <div>Server Response</div>
        <pre>{JSON.stringify(serverRes, null, 4)}</pre>
      </Res>
    </div>
  )
}

const Res = styled.div`
  padding: 20px 20px;

  border: 1px #ccc solid;
  border-radius: 4px;
  background-color: #eee;
  color: #333;

  > div {
    font-weight: bolder;
  }
`
