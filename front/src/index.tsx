import React from 'react'
import { render } from 'react-dom'
import { Router } from './router'

if (process.env.NODE_ENV !== 'production') {
  console.log(`==== connecting to ${process.env.NODE_ENV} server ====`)
}

render(<Router />, document.getElementById('root'))
