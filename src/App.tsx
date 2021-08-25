import React from "react";
import axios from "axios";
import WeatherForecast, { IWeatherForecast } from "./models/WeatherForecast";
import { DateFormater } from "./utils/DateFormater";

const OPEN_WEATHER_MAP_PATH =
  "https://api.openweathermap.org/data/2.5/onecall?lat=44.1436&lon=17.4&units=metric&cnt=5&exclude=hourly,minutely&appid=09b61c1db4fbb5f3f7b27100dc2f445e";

export interface AppProps {}

export interface AppState {
  weatherForecast?: IWeatherForecast[];
}

class App extends React.Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);
    this.state = {
      weatherForecast: [] as IWeatherForecast[],
    };
  }

  mapData = (json: []): any => {
    return json.map((item) => {
      let dateTime = DateFormater(item["dt"]);
      let sunrise = DateFormater(item["sunrise"]);
      let sunset = DateFormater(item["sunset"]);
      return new WeatherForecast(
        dateTime,
        sunrise,
        sunset,
        item["temp"]["day"],
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
      let weatherForecast = this.mapData(res.data.daily);
      this.setState({ weatherForecast });
    });
  }
  render() {
    console.log("render");

    const { weatherForecast } = this.state;
    return (
      <ul>
        {weatherForecast?.map((day) => (
          <li>{day.DateTime?.toLocaleString()}</li>
        ))}
      </ul>
    );
  }
}

export default App;
