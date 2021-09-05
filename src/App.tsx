import axios from "axios";
import * as React from "react";
import WeatherDayCard from "./components/WeatherDayCard";
import { DayOfTheWeek } from "./models/DayOfTheWeek";
import WeatherForecast, { IWeatherForecast } from "./models/WeatherForecast";
import "./styles/style.css";
import { DateFormater } from "./utils/DateFormater";
import CurrentWeatherDayCard from "./components/CurrentWeatherDayCard";
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
      currentDay: undefined,
    };
  }

  mapForecastData = (json: []): any => {
    return json.map((item) => {
      let dateTime = DateFormater(item["dt"]);
      let dayOfTheWeek = DayOfTheWeek[dateTime.getDay()];
      let sunrise = DateFormater(item["sunrise"]);
      let sunset = DateFormater(item["sunset"]);
      let eveningTemp = Math.round(item["temp"]["eve"]);
      let maxTemperature = Math.round(item["temp"]["max"]);
      let minTemperature = Math.round(item["temp"]["min"]);
      let morningTemperature = Math.round(item["temp"]["morn"]);
      let nightTemperature = Math.round(item["temp"]["night"]);
      return new WeatherForecast(
        dateTime,
        dayOfTheWeek,
        sunrise,
        sunset,
        eveningTemp,
        maxTemperature,
        minTemperature,
        morningTemperature,
        nightTemperature,
        item["weather"][0]["description"],
        item["weather"][0]["main"]
      );
    });
  };

  mapCurrentDay = (json: any): any => {
    let dateTime = DateFormater(json["current"]["dt"]);
    let dayOfTheWeek = DayOfTheWeek[dateTime.getDay()];
    let sunrise = DateFormater(json["current"]["sunrise"]);
    let sunset = DateFormater(json["current"]["sunset"]);
    let eveningTemp = Math.round(json["daily"][0]["temp"]["eve"]);
    let maxTemperature = Math.round(json["daily"][0]["temp"]["max"]);
    let minTemperature = Math.round(json["daily"][0]["temp"]["min"]);
    let morningTemperature = Math.round(json["daily"][0]["temp"]["morn"]);
    let nightTemperature = Math.round(json["daily"][0]["temp"]["night"]);
    let currentTemperature = Math.round(json["current"]["temp"]);
    return new WeatherForecast(
      dateTime,
      dayOfTheWeek,
      sunrise,
      sunset,
      eveningTemp,
      maxTemperature,
      minTemperature,
      morningTemperature,
      nightTemperature,
      json["current"]["weather"][0]["description"],
      json["current"]["weather"][0]["main"],
      currentTemperature
    );
  };

  getWeatherData = () => {
    axios.get(OPEN_WEATHER_MAP_PATH).then((res) => {
      let weatherForecast = this.mapForecastData(res.data.daily.slice(1, 6));
      let currentDay = this.mapCurrentDay(res.data as any);
      this.setState({ weatherForecast, currentDay });
    });
  };

  setInterval = () => {
    this.getWeatherData();
    setInterval(this.getWeatherData, 10800000);
  };

  componentDidMount() {
    this.setInterval();
  }
  render() {
    const { weatherForecast, currentDay } = this.state;
    return (
      <div>
        <div className={"weather-card-list-wrapper"}>
          {weatherForecast?.map((weatherForecastDay: IWeatherForecast) => (
            <WeatherDayCard
              className={"weather-forecast-card"}
              weatherForecastDay={weatherForecastDay}
            ></WeatherDayCard>
          ))}
        </div>
        <div className={"current-weather-card-wrapper"}>
          {currentDay && (
            <CurrentWeatherDayCard
              className={"current-weather-forecast-card"}
              currentDay={currentDay}
            ></CurrentWeatherDayCard>
          )}
        </div>
      </div>
    );
  }
}

export default App;
