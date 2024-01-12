
package weather;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.CacheControl;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "http://localhost:3000") // 

public class WeatherController {

    private final WeatherService weatherService;

    @Autowired
    public WeatherController(WeatherService weatherService) {
        this.weatherService = weatherService;
    }

   @GetMapping("/weather/{zipCode}")
    public ResponseEntity<String> getWeather(@PathVariable String zipCode) 
    {
        if (!isValidZipCode(zipCode)) { // checks if the zip code is valid
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Invalid zip code");
        }


         HttpHeaders headers = new HttpHeaders();
        headers.setCacheControl(CacheControl.noCache());
        String weatherData = weatherService.getWeatherData(zipCode);
        return ResponseEntity.ok(weatherData);
    }


    // method to check if the zip code is a 5 digit number or if the zip code isn't empty
    private boolean isValidZipCode(String zipCode) {
        return zipCode.matches("^\\d{5}$") || !zipCode.isEmpty();
    }

}
