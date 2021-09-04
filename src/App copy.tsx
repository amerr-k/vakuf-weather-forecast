import React from "react";
import axios from "axios";
import Person, { IPerson } from "./models/Person";

export interface AppProps {}

export interface AppState {
  persons?: IPerson[];
}

class App extends React.Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);
    this.state = {
      persons: [],
    };
  }

  mapPerson = (json: []): any => {
    console.log("mapPerson");
    return json.map((item) => {
      return new Person(item["name"]);
    });
  };

  componentDidMount() {
    console.log("componentDidMount");

    // axios
    //   .get(
    //     `https://api.openweathermap.org/data/2.5/onecall?lat=44.1436&lon=17.4&units=metric&cnt=5&exclude=hourly,minutely&appid=09b61c1db4fbb5f3f7b27100dc2f445e`
    //   )
    //   .then((res) => {
    //     console.log(res.data);
    //   });

    axios.get(`https://swapi.dev/api/people`).then((res) => {
      console.log(res);
      //let persons = this.mapPerson(res.data.results);
      let persons = this.mapPerson(res.data.results);
      this.setState({ persons: persons });
      console.log(this.state.persons);
    });
  }
  render() {
    console.log("render");

    const { persons } = this.state;
    return (
      <ul>
        {persons?.map((person) => (
          <li>{person.Name}</li>
        ))}
      </ul>
    );
  }
}

export default App;
