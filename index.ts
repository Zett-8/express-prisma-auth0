if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config({
    path: '.env.development',
  })
}

import { app } from './src/app'

const PORT = process.env.PORT || 3333

app.listen(PORT, () => {
  console.log(`server is running on :${PORT}. env="${process.env.NODE_ENV}"`)
})
