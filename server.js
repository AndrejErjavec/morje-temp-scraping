import express from 'express';
import {getTemp} from './scraper.js'

const app = express();

app.get('/morjeTemp', getTemp)

app.listen(3000, (err) => {
  if (err) console.log(err)
  console.log("server started")
})