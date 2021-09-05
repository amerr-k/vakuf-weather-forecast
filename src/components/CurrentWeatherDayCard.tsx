import React from "react";
import clearIcon from "../img/assets/clear.svg";
import cloudsIcon from "../img/assets/clouds.svg";
import drizzleIcon from "../img/assets/drizzle.svg";
import mistIcon from "../img/assets/mist.svg";
import rainIcon from "../img/assets/rain.svg";
import snowIcon from "../img/assets/snow.svg";
import thunderstormIcon from "../img/assets/thunderstorm.svg";
import { IWeatherForecast } from "../models/WeatherForecast";
export interface CurrentWeatherDayCardProps {
  className?: string;

  currentDay?: IWeatherForecast;
}

export interface CurrentWeatherDayCardState {}

class CurrentWeatherDayCard extends React.Component<
  CurrentWeatherDayCardProps,
  CurrentWeatherDayCardState
> {
  constructor(props: CurrentWeatherDayCardProps) {
    super(props);

    this.state = {};
  }

  getRightWeatherIcon = (): string => {
    switch (this.props.currentDay?.Weather) {
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
    const { currentDay, className } = this.props;

    return (
      <div className={className}>
        <div className={"current-data-wrapper"}>
          <div>
            {" "}
            <span>{currentDay?.DayOfTheWeek}</span>{" "}
            <span>{currentDay?.DateTime?.toLocaleDateString()}</span>
          </div>
          <div className={"current-temp"}>
            {currentDay?.CurrentTemperature} <span>&#8451;</span>
          </div>
          <div>
            {currentDay?.MinTemperature} / {currentDay?.MaxTemperature}{" "}
            <span>&#8451;</span>
          </div>
        </div>
        <div>
          <img
            className={"weather-icon"}
            src={this.getRightWeatherIcon()}
            alt="weatherIcon"
          />
        </div>
      </div>
    );
  }
}

export default CurrentWeatherDayCard;
