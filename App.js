import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
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
    <View style={styles.container}>
      <PieChartExample />
      <Text>Open up App.js to start working on your app!</Text>      
    </View>
  );
}



class PieChartExample extends React.Component {
    render() {
        const data = [50, 10, 40, 95, -4, -24, 85, 91, 35, 53, -53, 24, 50, -20, -80]
        const randomColor = () => ('#' + ((Math.random() * 0xffffff) << 0).toString(16) + '000000').slice(0, 7)
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
        return <PieChart style={{ height: 200, width:300 }} data={pieData} />
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













