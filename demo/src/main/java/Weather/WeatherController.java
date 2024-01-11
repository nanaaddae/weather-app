
package Weather;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class WeatherController {

    private final WeatherService weatherService;

    @Autowired
    public WeatherController(WeatherService weatherService) {
        this.weatherService = weatherService;
    }

   @GetMapping("/weather/{zipCode}")
    public ResponseEntity<String> getWeather(@PathVariable String zipCode) {
        String weatherData = weatherService.getWeatherData(zipCode);
        return ResponseEntity.ok(weatherData);
    }

}