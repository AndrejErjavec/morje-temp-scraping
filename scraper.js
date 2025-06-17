import * as cheerio from "cheerio";
import fetch from "node-fetch";

let prevRes = "0";

export const getTemp = async (req, res) => {
  try {
    const response = await fetch(
      "https://www.arso.gov.si/vode/podatki/amp/H9350_t_1.html"
    );
    const page = await response.text();

    const $ = cheerio.load(page);

    const rows = $("table.podatki > tbody > tr");

    let firstValidTemp = null;

    rows.each((i, row) => {
      const tempText = $(row).find("td").eq(1).text().trim();
      if (tempText !== "-") {
        firstValidTemp = tempText;
        return false;
      }
    });

    res.send(firstValidTemp);
  } catch (error) {
    res.send("error while fetching data");
    console.log(error);
  }
};
