import React from "react";
import clearIcon from "../img/assets/clear.svg";
import cloudsIcon from "../img/assets/clouds.svg";
import drizzleIcon from "../img/assets/drizzle.svg";
import mistIcon from "../img/assets/mist.svg";
import rainIcon from "../img/assets/rain.svg";
import snowIcon from "../img/assets/snow.svg";
import thunderstormIcon from "../img/assets/thunderstorm.svg";
import { IWeatherForecast } from "../models/WeatherForecast";
export interface WeatherDayCardProps {
  className?: string;
  weatherForecastDay?: IWeatherForecast;
}

export interface WeatherDayCardState {}

class WeatherDayCard extends React.Component<
  WeatherDayCardProps,
  WeatherDayCardState
> {
  constructor(props: WeatherDayCardProps) {
    super(props);
    this.state = {};
  }

  getRightWeatherIcon = (): string => {
    switch (this.props.weatherForecastDay?.Weather) {
      case "Rain":
        return rainIcon;
      case "Clouds":
        return cloudsIcon;
      case "Clear":
        return clearIcon;
      case "Thunderstorm":
        return thunderstormIcon;
      case "Snow":
        return snowIcon;
      case "Drizzle":
        return drizzleIcon;
      default:
        return mistIcon;
    }
  };

  render() {
    const { weatherForecastDay, className } = this.props;

    return (
      <div className={className}>
        {/* <span>{weatherForecastDay?.Sunrise?.toLocaleDateString()}</span> */}
        <span>{weatherForecastDay?.DayOfTheWeek}</span>
        <img
          className={"weather-icon"}
          src={this.getRightWeatherIcon()}
          alt="weatherIcon"
        />
        <div>
          {weatherForecastDay?.MinTemperature} /{" "}
          {weatherForecastDay?.MaxTemperature} <span>&#8451;</span>
        </div>
      </div>
    );
  }
}

export default WeatherDayCard;
