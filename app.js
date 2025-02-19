const express = require('express')
const app = express()

// Heroku dynamically sets a port
const PORT = process.env.PORT || 5000

app.use(express.static('dist'))

app.listen(PORT, () => {
  /* eslint-disable-next-line no-console */
  console.log('server started on port 5000')
})

//health test 23.10.2021
app.get('/health', (req, res) => {
  res.send('ok')
})

//version 23.10.2021
app.get('/version', (req, res) => {
  res.send('1.1') // change this string to ensure a new version deployed
})
