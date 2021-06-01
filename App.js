import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { TextInput, StyleSheet, Text, View, Button, Alert } from 'react-native';
import { PieChart } from 'react-native-svg-charts'
import axios from 'axios';

export default function App() {
  return (
    <ChartPanel />
  );
}


class ChartPanel extends React.Component {

  state = {
    loaded: false
    , newValue: ""
    , newLabel: ""
    , values: []
    , labels:[]
  };

  fetchChartData = () => {
    fetch('https://trianglewebtech.com/sandbox/ReactJS/pieChartData.php?action=get&t='+(new Date()))
      .then((response) => response.json())
      .then((json) => {
        this.setState({values:json.values, labels:json.labels});
      })
      .catch((error) => {
        console.error(error);
      });
  }

  updateLabel = (v) => {
    this.state.newLabel = v;
  }
  updateValue = (v) => {
    this.state.newValue = v;
  }

  deleteData = (label) => {

    /*
    axios.get('https://trianglewebtech.com/sandbox/ReactJS/pieChartData.php', {
      action: 'delete',

      label: label
    })
    .then((response) => {
      console.log(response);
//      this.setState({values:json.values, labels:json.labels});
    })
    .catch((error) => {
      console.log(error);
    });
    */

    var durl = 'https://trianglewebtech.com/sandbox/ReactJS/pieChartData.php'

                + '?action=delete'
                + '&label='+label
                + '&t='+(new Date());

     fetch(durl
            , {
//                  headers: {
//                    'Accept': 'application/json',
//                    'Content-Type': 'application/json charset=UTF-8'
//                  },

//                  method: 'POST',
//                  body: JSON.stringify({
//                    label: label,
//                    action: "delete",
//                  })
                }

          )
          .then((response) => response.json())
          .then((json) => {
            console.log("--------------------------------------------------");
            console.log(new Date());
            console.log(json);
            console.log("--------------------------------------------------");
            this.setState({values:json.values, labels:json.labels});
          })
          .catch((error) => console.log(error));
  //    this.fetchChartData();

  }

  initDelete = (i) => {
      Alert.alert(
        this.state.labels[i],
        "Click 'Delete' if you'd like to delete this. Otherwise click anywhere outside the box to go back to the graphic."
        ,
        [
          {
            text: "Yes, delete it!",
            onPress: () => this.deleteData(this.state.labels[i]),
            style: "cancel",
          },
        ],
        {
          cancelable: true,
          onDismiss: () => {}
        }
      );
  }

  addNewValue = () => {
    if (!isNaN(this.state.newValue) && this.state.newLabel.trim()!="") {
//      console.log("Input seems okay...", (new Date()));
      fetch('https://trianglewebtech.com/sandbox/ReactJS/pieChartData.php'
                + '?action=add&t='+(new Date())
                + '&value='+this.state.newValue
                + '&label='+this.state.newLabel
//            , {
//                  method: 'POST',
//                  headers: {
//                    Accept: 'application/json',
//                    'Content-Type': 'application/json'
//                  },
//                  body: JSON.stringify({
//                    value: this.state.newValue,
//                    label: this.state.newLabel,
//                    action: "add",
//                  })
//                }
          )
        .then((response) => response.json())
        .then((json) => {          
          console.log("--------------------------------------------------");
          console.log(new Date());
          console.log(json);
          console.log("--------------------------------------------------");
          this.setState({values:json.values, labels:json.labels});
        })
        .catch((error) => {
          console.error(error);
        });
      ;
    }
  }

  render() {
    //// Run the fetch once on load.
    if (!this.state.loaded) {
      for (var i=0;i<50;i++) {
        console.log("...");
      }
      this.state.loaded = true;
      this.fetchChartData();
    }

    return <View style={styles.container}>
      <Text style={styles.instructions}>Enter a value to add to the Pie Chart.</Text>
      <Text>Label:</Text>
      <TextInput
        id="newLabel"
        style={styles.input}
        onChangeText={(v) => this.updateLabel(v)}
      />
      <Text>Value:</Text>
      <TextInput
        id="newValue"
        style={styles.input}
        onChangeText={(v) => this.updateValue(v)}
      />
      <Button title="Add Value" onPress={() => this.addNewValue()} />
      <Text></Text>
      <PieChartExample labels={this.state.labels} values={this.state.values} parent={this} initDelete={this.initDelete} />
    </View>

  }
}

class PieChartExample extends React.Component {
    render() {
        var randomColor = () => ('#' + ((Math.random() * 0xffffff) << 0).toString(16) + '000000').slice(0, 7)
        var pieData = this.props.values
            .filter((value) => value > 0)
            .map((value, index) => ({
                value,
                svg: {
                    fill: randomColor(),
                    onPress: () => this.props.initDelete.apply(this.props.parent, [index]),
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
  instructions: {
    padding:20,
    fontSize:20,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    width:300,
    height: 40,
    margin: 12,
    borderWidth: 1,
  },  
});













