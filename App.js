import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { PieChart } from 'react-native-svg-charts'

const randomColor = () => ('#' + ((Math.random() * 0xffffff) << 0).toString(16) + '000000').slice(0, 7)
const data = [50, 10, 40, 95, -4, -24, 85, 91, 35, 53, -53, 24, 50, -20, -80]
const pieData = data
  .filter((value) => value > 0)
  .map((value, index) => ({
      value,
      svg: {
          fill: randomColor(),
          onPress: () => console.log('press', index),
      },
      key: `pie-${index}`,
  }))



/*
export default function App() {
  return (
    <View style={styles.container}>
      <PieChartExample />
    </View>
  );
}
*/

export default function App() {
  return (
    <ChartPanel />
  );
}


class ChartPanel extends React.Component {

  state = {
    data: []
    , colors:[]
    , labels:[]
  };

  fetchChartData = () => {
    fetch('https://trianglewebtech.com/sandbox/ReactJS/pieChartData.php?t='+(new Date()))
      .then((response) => response.json())
      .then((json) => {
        console.log(new Date());
        console.log(JSON.stringify(json.data));
        this.setState({data:json.data, colors:json.colors, labels:json.labels});
      })
      .catch((error) => {
        console.error(error);
      });
  }

  render() {
    return     <View style={styles.container}>
      <Button title="Click me!" onPress={() => this.fetchChartData()} />
      <PieChartExample data={this.state.data} colors={this.state.colors} labels={this.state.labels} />
    </View>

  }
}





class PieChartExample extends React.Component {
    render() {
        var randomColor = () => ('#' + ((Math.random() * 0xffffff) << 0).toString(16) + '000000').slice(0, 7)
        console.log(this.props);
        var pieData = this.props.data
            .filter((value) => value > 0)
            .map((value, index) => ({
                value,
                svg: {
                    fill: this.props.colors[index],
//                    fill: randomColor(),
                    onPress: () => console.log('press', index),
                },
                key: `pie-${index}`,
            }))
        return <PieChart 
          style={{ height: 200, width:300 }}
          data={pieData}
//          valueAccessor={ ({ item }) => this.props.labels.length }
           />
    }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});













