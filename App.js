import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";

const weatherApi =
  "https://api.openweathermap.org/data/2.5/weather?q=Lyon&APPID=d38e611926571bf12311100c0a48dba1";

export default class App extends Component {
  state = {
    isLoaded: false,
    data: {},
  };

  componentDidMount() {
    this.getData();
    console.log(this.state.data);
  }

  getData = () => {
    return fetch(weatherApi)
      .then((data) => data.json())
      .then((dataJSON) => this.setState({ data: dataJSON, isLoaded: true }))
      .catch((err) => console.error(err));
  };
  render() {
    if (this.state.isLoaded) {
      return (
        <View style={styles.container}>
          <Text>{this.state.data.name}</Text>
          <Text>{this.state.data.main.temp}</Text>
          <Text>{this.state.data.weather[0].main}</Text>
          <Text>{this.state.data.weather[0].description}</Text>
        </View>
      );
    } else {
      return (
        <View>
          <Text>{"coucou"}</Text>
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})