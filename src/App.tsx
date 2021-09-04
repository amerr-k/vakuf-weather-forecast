import axios from "axios";
import * as React from "react";
import WeatherForecast, { IWeatherForecast } from "./models/WeatherForecast";
import { DateFormater } from "./utils/DateFormater";
import { DayOfTheWeek } from "./models/DayOfTheWeek";
import WeatherDayCard from "./components/WeatherDayCard";
import "./styles/style.css";
const OPEN_WEATHER_MAP_PATH =
  "https://api.openweathermap.org/data/2.5/onecall?lat=44.1436&lon=17.4&units=metric&cnt=5&exclude=hourly,minutely&appid=09b61c1db4fbb5f3f7b27100dc2f445e";

export interface AppProps {}

export interface AppState {
  weatherForecast?: IWeatherForecast[];
  currentDay?: IWeatherForecast;
}

class App extends React.Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);
    this.state = {
      weatherForecast: [] as IWeatherForecast[],
      currentDay: {} as IWeatherForecast,
    };
  }

  mapData = (json: []): any => {
    return json.map((item) => {
      let dateTime = DateFormater(item["dt"]);
      let dayOfTheWeek = DayOfTheWeek[dateTime.getDay()];
      let sunrise = DateFormater(item["sunrise"]);
      let sunset = DateFormater(item["sunset"]);
      return new WeatherForecast(
        dateTime,
        dayOfTheWeek,
        sunrise,
        sunset,
        item["temp"]["eve"],
        item["temp"]["max"],
        item["temp"]["min"],
        item["temp"]["morn"],
        item["temp"]["night"],
        item["weather"][0]["description"],
        item["weather"][0]["main"]
      );
    });
  };

  componentDidMount() {
    axios.get(OPEN_WEATHER_MAP_PATH).then((res) => {
      console.log(res.data);
      let weatherForecast = this.mapData(res.data.daily.slice(1, 5));
      let currentDay = this.mapData([res.data.daily[0]] as any);
      this.setState({ weatherForecast, currentDay });
    });
  }
  render() {
    console.log("render");

    const { weatherForecast, currentDay } = this.state;
    console.log(weatherForecast);
    //samo komentar
    return (
      <div>
        <div className={"weather-card-wrapper"}>
          {weatherForecast?.map(
            (weatherForecastDay: IWeatherForecast, i: number) => (
              <WeatherDayCard
                className={"weather-forecast-card"}
                weatherForecastDay={weatherForecastDay}
              ></WeatherDayCard>
            )
          )}
        </div>
      </div>
    );
  }
}

export default App;

// <ul>
// {weatherForecast?.map((day) => (
//   <li>{day.DateTime?.toLocaleString()}</li>
// ))}
// </ul>
// <ul>
// {weatherForecast?.map((day) => (
//   <li>{day.Sunrise?.toLocaleString()}</li>
// ))}
// </ul>
// <ul>
// {weatherForecast?.map((day) => (
//   <li>{day.Sunset?.toLocaleString()}</li>
// ))}
// </ul>
// <ul>
// {weatherForecast?.map((day) => (
//   <li>{day.DayOfTheWeek?.toLocaleString()}</li>
// ))}
// </ul>
