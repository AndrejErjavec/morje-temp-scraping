# morje-temp-scraping
Scraper za temperaturo morja v Kopru

I wanted to have sea temperature displayed on my HomeAssistant weather dashboard. Beause of problems with multiscrape integration I wrote this simple script to scrape the data and provide and endpoint where HomeAssistant can access it via its RESTful sensor.

If you want to add this to HomeAssistant, create a new sensor inside `configuration.yaml`:

``` yaml
sensor
  - platform: rest
    resource: http://localhost:3000/morjeTemp
    method: GET
    name: "Morje Koper temperatura"
    unique_id: morje-koper-temp
    scan_interval: 600
    unit_of_measurement: "°C" 
```

Make sure to replace `localhost` with your server's IP. In my case I host the server on same machine as HomeAssistant.
