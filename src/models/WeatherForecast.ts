export interface IWeatherForecast {
  DateTime?: Date;
  DayOfTheWeek?: string;
  Sunrise?: Date;
  Sunset?: Date;
  DayTemperature?: number;
  EveningTemperature?: number;
  MaxTemperature?: number;
  MinTemperature?: number;
  MorningTemperature?: number;
  NightTemperature?: number;
  Description?: string;
  Weather: string;
}

class WeatherForecast implements IWeatherForecast {
  private _dateTime: Date;
  private _dayOfTheWeek: string;
  private _sunrise: Date;
  private _sunset: Date;
  private _dayTemperature?: number;
  private _eveningTemperature: number;
  private _maxTemperature: number;
  private _minTemperature: number;
  private _morningTemperature: number;
  private _nightTemperature: number;
  private _description: string;
  private _weather: string;

  constructor(
    dateTime: Date,
    dayOfTheWeek: string,
    sunrise: Date,
    sunset: Date,
    eveningTemperature: number,
    maxTemperature: number,
    minTemperature: number,
    morningTemperature: number,
    nigthTemperature: number,
    description: string,
    weather: string,
    dayTemperature?: number
  ) {
    this._dateTime = dateTime;
    this._dayOfTheWeek = dayOfTheWeek;
    this._sunrise = sunrise;
    this._sunset = sunset;
    this._dayTemperature = dayTemperature;
    this._eveningTemperature = eveningTemperature;
    this._maxTemperature = maxTemperature;
    this._minTemperature = minTemperature;
    this._morningTemperature = morningTemperature;
    this._nightTemperature = nigthTemperature;
    this._description = description;
    this._weather = weather;
  }

  public get DateTime() {
    return this._dateTime;
  }

  public set DateTime(value) {
    this._dateTime = value;
  }

  public get DayOfTheWeek() {
    return this._dayOfTheWeek;
  }

  public set DayOfTheWeek(value) {
    this._dayOfTheWeek = value;
  }

  public get Sunrise() {
    return this._sunrise;
  }

  public set Sunrise(value) {
    this._sunrise = value;
  }

  public get Sunset() {
    return this._sunset;
  }

  public set Sunset(value) {
    this._sunset = value;
  }

  public get DayTemperature() {
    return this._dayTemperature;
  }

  public set DayTemperature(value) {
    this._dayTemperature = value;
  }

  public get EveningTemperature() {
    return this._eveningTemperature;
  }

  public set EveningTemperature(value) {
    this._eveningTemperature = value;
  }

  public get MaxTemperature() {
    return this._maxTemperature;
  }

  public set MaxTemperature(value) {
    this._maxTemperature = value;
  }

  public get MinTemperature() {
    return this._minTemperature;
  }

  public set MinTemperature(value) {
    this._minTemperature = value;
  }

  public get MorningTemperature() {
    return this._morningTemperature;
  }

  public set MorningTemperature(value) {
    this._morningTemperature = value;
  }

  public get NightTemperature() {
    return this._nightTemperature;
  }

  public set NightTemperature(value) {
    this._nightTemperature = value;
  }

  public get Description() {
    return this._description;
  }

  public set Description(value) {
    this._description = value;
  }

  public get Weather() {
    return this._weather;
  }

  public set Weather(value) {
    this._weather = value;
  }
}

export default WeatherForecast;
