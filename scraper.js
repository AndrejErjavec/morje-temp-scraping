import * as cheerio from 'cheerio';
import fetch from 'node-fetch';

let prevRes = "0"

export const getTemp = async (req, res) => {
  try {
    const response = await fetch('https://www.arso.gov.si/vode/podatki/amp/H9350_t_1.html');
    const page = await response.text();

    const $ = cheerio.load(page);

    const element = $('#glavna > tbody > tr > td.vsebina > table.podatki > tbody > tr:nth-child(1) > td:nth-child(3)')
    if (element.text() === "-") {
      res.send(prevRes)
      return
    }
    prevRes = element.text()
    res.send(element.text())
  }
  catch(error) {
    res.send("error while fetching data")
    console.log(error)
  }
}
