package Weather;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

@Service
public class WeatherService 
{
    @Value("${openweather.api.key}")
    private String apiKey;


 @Value("${openweather.api.url}")
    private String apiUrl;

    private final RestTemplate restTemplate;

    public WeatherService(RestTemplate restTemplate) {
        this.restTemplate = restTemplate;
    }

    public String getWeatherData(String zipCode) {
        String url = apiUrl + "?zip=" + zipCode + "&appid=" + apiKey;
        return restTemplate.getForObject(url, String.class);
    }
}
