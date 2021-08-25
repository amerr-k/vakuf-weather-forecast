import React from "react";
import axios from "axios";

export interface WeatherDayCardProps {}

export interface WeatherDayCardState {}

class WeatherDayCard extends React.Component<
  WeatherDayCardProps,
  WeatherDayCardState
> {
  constructor(props: WeatherDayCardProps) {
    super(props);
    this.state = {};
  }

  render() {
    return <div>sta ima</div>;
  }
}

export default WeatherDayCard;
